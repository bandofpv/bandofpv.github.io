---
id: reading-eye
title: Reading Eye For The Blind With NVIDIA Jetson Nano
sidebar_label: Reading Eye For The Blind 
---
December 2019 - February 2020

**Note:** check out my tutorial **[here](https://andrewbernas.com/docs/tutorials/reading-eye-for-the-blind)**

## Introduction:

The World Health Organization (WHO) estimates that there are 285 million people that are visually impaired. Specifically in the United States, there are 1.3 million who are legally blind and only 10 percent of them can actually read braille and only 10 percent of the blind children are learning it. This is due to how expensive books are to read in braille. It costs up to $15,000 just to convert five chapters of a science book! Due to the price, very few blind people are able to learn through books. People who are reading impaired or suffer vision loss also struggle to read. While many can use audio-books, they are still limited on what they can read based on audio books' availability and costs. Books are the cheapest way to learn and 285 million people are unable to take advantage of this resource we greatly take for granted. The Reading Eye device would allow more freedom in terms of book choice, without having to make investments towards buying several audio-books. It is able to detect printed and handwritten text and speak it in a realistic synthesized voice.

![intro Andrew Bernas](assets/robots/reading-eye/story.jpg)

My whole inspiration for this project was to help my grandmother who's vision degrades everyday due to age. I then thought of all the others who suffer due to bad vision or reading disabilities which motivated me to pursue this project.

## Video:

[![demo-video Andrew Bernas](assets/robots/reading-eye/demo-video.jpg)](https://www.youtube.com/watch?v=ZVquCjLMWuA)

## Brief Summary

This device can successfully translate any given physical text into spoken words. It first takes a picture of a page when the user presses a button. This picture will be transformed to remove camera lens distortions, camera angle distortions, and any shadows on the page. The page will essentially look like a black and white scanned copy. With this image, the device will feed the data into a Convolutional Neural Network (CNN) and Recurrent Neural Network (RNN) to extract any relevant information to finally output the recognized text. This text will be fed into text to speech algorithm to save the text as a human like speech audio file to be played through the audio jack.

## Description

The device uses a NVIDIA Jetson Nano for computing the algorithms required for text recognition and text-to-speech. It comes with a 128-core Maxwell GPU, Quad-core ARM A57 @ 1.43 GHz CPU, and 4 GB of LPDDR4 RAM. It uses a 32GB SDHC U1 card for storage and is powered via a 10,000mAh 5v 3A battery via its USB port. The battery is rechargeable by simply connecting it to a 5v wall power supply. An 8MP camera module with an IMX219 image sensor and a 175-degree field of view lens used to take pictures of the given text and is connected to the Jetson Nano’s CSi connector using a 457mm ribbon cable. A Noctua NF-A4x20 5v Fan is used to cool down the Jetson Nano when under heavy loads. A Wi-Fi USB adapter is plugged into the Jetson Nano to connect to the internet when available. The audio jack, which plays the synthesized speech is hooked up to the back of the device to plug in headphones or a speaker to. Finally, there is a blue LED button used to activate the text recognition sequence and a toggle switch used to turn the device on and off.  

The first step the device takes is to take a picture of the piece of text below the camera. This is activated through the button at the top and depending on how many times you press it in succession, it will either recognize handwritten or printed text. This image is then fed into several algorithms in order to clean up any defects caused by the camera or lighting. 

The first algorithm removes lens distortions which causes the edges of the image to appear curved and have a fisheye effect. This distortion will cause the text to bend.

![Fig. 4 Andrew Bernas](assets/tutorials/reading-eye-for-the-blind/page1.jpg)

To compensate for this the device uses OpenCV’s camera distortion algorithms. The first equation solves the radial distortions and the second solves tangential distortion which is caused when the camera lens is not parallel to the image sensor.

![Fig. 5 Andrew Bernas](assets/robots/reading-eye/fig5.png)

![Fig. 6 Andrew Bernas](assets/robots/reading-eye/fig6.png)

In total the algorithm uses 5 parameters known as distortion coefficients: 

![Fig. 7 Andrew Bernas](assets/robots/reading-eye/fig7.png)

which are dependent on the type of lens and image sensor you have. The undistorted image can be seen below. 

![Fig. 8 Andrew Bernas](assets/tutorials/reading-eye-for-the-blind/page2.jpg)

The second algorithm is to normalize the input image to only get the important information. In this case, it’s the page. No matter the size of the page, this algorithm will transform it into image that appears to be scanned from a document scanner.

![Fig. 9 Andrew Bernas](assets/robots/reading-eye/fig9.jpeg)

The first step is passing an edge detection algorithm so it can detect the predominant contour in the image. Using this information, it will segment it using a four-point perspective transformation.

![Fig. 10 Andrew Bernas](assets/robots/reading-eye/fig10.png)

The final step in cleaning up the image and omitting any unimportant information is the binarization algorithm. This will essentially turn the grayscale image into a binary image where the colors are either black or white and nothing in between. This allows the text recognition algorithm to be more efficient. There are many techniques of binarization, but this device uses Adaptive Document Binarization. The image also undergoes illumination compensation for light normalization or remove any shadows on the page.

![Fig. 11 Andrew Bernas](assets/robots/reading-eye/fig11.png)

After normalizing the page, the device is ready to run the printed or handwritten text recognition process. This process could either be run in the cloud or on the edge device. The device determines this by first checking if it is connected to the internet by simply pinging to 8.8.8.8. If it’s successful, it will perform online text recognition and if not, offline text recognition. The user then has to tell the device to detect handwritten or printed text. If pressed once, it will perform printed text recognition and if twice, then handwritten text recognition. 

If it’s online text recognition, it will connect to Google Cloud OCR text recognition and Text To Speech (TTS) to convert the normalized page into recognized text and then into a human like synthesized voice. This will work for both printed and handwritten text and can be programmed to recognize and speak different languages. The device also replaces special characters such as “&” with HTML Ampersand Character Codes to prevent the API from confusing text with SSML commands. It’s important to note that Google’s TTS has a limit of 5,000 characters per request. To minimize errors, the device splits up the recognized text and generates separate speech files to play consecutively. 

If it’s offline printed text recognition, it will use the Tesseract OCR engine to convert the normalized page into text. The device will take this text and feed it into the pyttsx3 engine to synthesize the recognized text into human speech. These engines/algorithms are relatively lightweight and only need to use the CPU to compute.

If it’s offline handwritten text recognition, it will need to segment the text into lines using a statistical approach by analyzing the chunks of text and pixels to recognize text lines on the normalized page. 

![Fig. 12 Andrew Bernas](assets/tutorials/reading-eye-for-the-blind/line-segmentation.jpg)

The lines will then be saved as individual images for text recognition. These images will then undergo deslanting, which essentially removes the slant in cursive writing to help improve accuracy of the devices text predictions.

![Fig. 13 Andrew Bernas](assets/tutorials/reading-eye-for-the-blind/deslanting.jpg)

The device’s Convolutional Recurrent Neural Network (CRNN) for handwritten text recognition is trained on the IAM Public Database which comes with 9,000 pre-labeled text lines from 500 different writers. Below is an example in the dataset. 

![Fig. 14 Andrew Bernas](assets/tutorials/reading-eye-for-the-blind/database-example.jpg)

With the help of TensorFlow 2.0 and Google Cloud Notebook Colab, deep learning is used to train the CRNN using a Tesla K80 GPU, Xeon CPU, and 13 GB of RAM. 

First, the input image is fed through the Convolutional Neural Network (CNN) layers which will extract the relevant features from the image. Each layer consists of three operations: Convolution Operation, Non-Linear RELU Function, and Pooling. The Convolution Operation applies a filter kernel with size 5x5 in the first 2 layers and size 3x3 in the last three. Next, the Non-Linear RELU activation function is used and then the pooling layer will summarize the image regions and outputs a feature map of size 32x256.

Next, the output feature map from the CNN layers will be fed into the Recurrent Neural Network (RNN) which will propagate relevant information through longer distances. It does this through the implementation of Long Short-Term Memory (LSTM), which provides more robust training than vanilla RNNs. The output sequence matrix has a size of 32x80. The reason for this is because the IAM data set has 79 characters but an additional “blank” character is needed for the CTC operation. Thus, 80 entries for each 32 time-steps. 

Finally, the Connectionist Temporal Classification (CTC) will calculate loss value and decodes the RNN output sequence into the final text. 

This workflow is repeated for each text line image after segmentation. The output would be the final recognized text which is fed into the pyttsx3 engine to synthesize the recognized text into human speech.

![Fig. 14 Andrew Bernas](assets/tutorials/reading-eye-for-the-blind/crnn.jpg)