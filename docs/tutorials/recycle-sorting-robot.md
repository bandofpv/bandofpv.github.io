---
id: recycle-sorting-robot
title: Recycle Sorting Robot With Google Coral
sidebar_label: Recycle Sorting Robot With Google Coral
---

June 2019 - July 2019

[Hackster.io Tutorial](https://www.hackster.io/bandofpv/recycle-sorting-robot-with-google-coral-b52a92)

## Story:

Did you know that the average contamination rate in communities and businesses range up to 25%? That means one out of every four pieces of recycling you throw away doesn’t get recycled. This is caused due to human error in recycling centers. Traditionally, workers will sort through trash into different bins depending on the material. Humans are bound to make errors and end up not sorting the trash properly, leading to contamination. As pollution and climate change become even more significant in today’s society, recycling takes a huge part in protecting our planet. By using robots to sort through trash, contamination rates will decrease drastically, not to mention a lot cheaper and more sustainable. To solve this, I created a recycle sorting robot that uses machine learning to sort between different recycle materials.

![story](assets/tutorials/recycle-sorting-robot/story.jpg)

## Demo Video:

[![demo](assets/tutorials/reading-eye-for-the-blind/demo.jpg)](https://www.youtube.com/watch?v=dlkS8SC_BcU)

## Code:

Please clone my GitHub [repository](https://github.com/bandofpv/Trash_Sorting_Robot) to follow along with this tutorial.

## Hardware components:

[Raspberry Pi RPI 4 4GB](https://www.hackster.io/products/buy/66729?s=BAhJIhMzMDkzNjEsUHJvamVjdAY6BkVG%0A) x1

[Google Coral USB Accelerator](https://www.hackster.io/products/buy/66740?s=BAhJIhMzMDkzNjEsUHJvamVjdAY6BkVG%0A) ×1	

[Arduino Uno R3](https://www.hackster.io/products/buy/66728?s=BAhJIhMzMDkzNjEsUHJvamVjdAY6BkVG%0A) ×1	

[Raspberry Pi Camera Module V2](https://www.hackster.io/products/buy/66739?s=BAhJIhMzMDkzNjEsUHJvamVjdAY6BkVG%0A) ×1

[5V 2A DC Wall Power Supply](https://www.hackster.io/products/buy/66730?s=BAhJIhMzMDkzNjEsUHJvamVjdAY6BkVG%0A) ×1

[DC 12V Power Supply](https://www.hackster.io/products/buy/66746?s=BAhJIhMzMDkzNjEsUHJvamVjdAY6BkVG%0A) ×1

[SG90 9g Micro Servos 4pcs.](https://www.hackster.io/products/buy/66731?s=BAhJIhMzMDkzNjEsUHJvamVjdAY6BkVG%0A)  ×1	

[M3 x 0.5mm Stainless Steel Self-Lock Nylon Hex Lock Nut 100pcs.](https://www.hackster.io/products/buy/66733?s=BAhJIhMzMDkzNjEsUHJvamVjdAY6BkVG%0A) ×1

[M3x20 Button Head Titanium Screws 10pcs.](https://www.hackster.io/products/buy/66736?s=BAhJIhMzMDkzNjEsUHJvamVjdAY6BkVG%0A) ×1	

[MG996R Metal Gear Torque Analog Servo Motor 4cs.](https://www.hackster.io/products/buy/66735?s=BAhJIhMzMDkzNjEsUHJvamVjdAY6BkVG%0A) ×1	

[Samsung 32GB Select Memory Card](https://www.hackster.io/products/buy/66738?s=BAhJIhMzMDkzNjEsUHJvamVjdAY6BkVG%0A) ×1

[Adafruit Flex Cable for Raspberry Pi Camera - 1 meter](https://www.hackster.io/products/buy/66741?s=BAhJIhMzMDkzNjEsUHJvamVjdAY6BkVG%0A) ×1
	
[M2 Male Female Brass Spacer Standoff Screw Nut Assortment Kit](https://www.hackster.io/products/buy/66742?s=BAhJIhMzMDkzNjEsUHJvamVjdAY6BkVG%0A) ×1

[60mm 12V Fan](https://www.hackster.io/products/buy/66743?s=BAhJIhMzMDkzNjEsUHJvamVjdAY6BkVG%0A) ×1	

[6.69"x 5.12" x 2.95" Project Box](https://www.hackster.io/products/buy/66745?s=BAhJIhMzMDkzNjEsUHJvamVjdAY6BkVG%0A) ×1	


## 3D Files:

[Gripper](https://hacksterio.s3.amazonaws.com/uploads/attachments/1041948/gripper_YuCH4I8eHE.STL)

[Grip Link](https://hacksterio.s3.amazonaws.com/uploads/attachments/1041946/grip_link_MY3KNbqjIe.STL)

[Gripper Base](https://hacksterio.s3.amazonaws.com/uploads/attachments/1041947/gripper_base_HEB0qlzgc8.STL)

[Gear 1](https://hacksterio.s3.amazonaws.com/uploads/attachments/1041942/gear_01_zjRwdtekXi.STL)

[Gear 2](https://hacksterio.s3.amazonaws.com/uploads/attachments/1041944/gear_02_xUpxMSdjJl.STL)

[Waist](https://hacksterio.s3.amazonaws.com/uploads/attachments/1041955/waist_ekOk4GnHFc.STL)

[Arm 1](https://hacksterio.s3.amazonaws.com/uploads/attachments/1041935/arm_01_VX0u0eXCiP.STL)

[Arm 1](https://hacksterio.s3.amazonaws.com/uploads/attachments/1041936/arm_02_kJH30OMcWB.STL)

[Arm 3](https://hacksterio.s3.amazonaws.com/uploads/attachments/1041937/arm_03_d3oVRlk7qT.STL)

[Base](https://hacksterio.s3.amazonaws.com/uploads/attachments/1041939/base_jjW668gqgL.STL)


## Step 1, Getting the Data:

To train the object detection model that can detect and recognize different recycling materials, I used the [trashnet](https://github.com/garythung/trashnet) dataset which includes 2527 images:

+ 501 glass
+ 594 paper
+ 403 cardboard
+ 482 plastic
+ 410 metal
+ 137 trash

Here is an example image:

![step1](assets/tutorials/recycle-sorting-robot/step1.jpg)

This dataset is very small to train an object detection model. There are only about 100 images of trash that are too little to train an accurate model, so I decided to leave it out.

You can use this google drive [folder](https://drive.google.com/drive/folders/0B3P9oO5A3RvSUW9qTG11Ul83TEE) to download the dataset. Make sure to download the dataset-resized.zip file. It contains the set of images that are already resized to a smaller size to allow for faster training. If you would like to resize the raw images to your own liking, feel free to download the dataset-original.zip file.

## Step 2, Labeling the Images:

Next, we need to label several images of different recycling materials so we can train the object detection model. To do this, I used [labelImg](https://github.com/tzutalin/labelImg), free software that allows you to label object bounding boxes in images.

Label each image with the proper label. [This](https://youtu.be/p0nR2YsCY_U) tutorial shows you how. Make sure to make each bounding box as close to the border of each object to ensure the detection model is as accurate as possible. Save all the .xml files into a folder.

Here is how to label your images:

![step2](assets/tutorials/recycle-sorting-robot/step2.jpg)

This is a very tedious & mind-numbing experience. Thankfully for you, I already labeled all the images for you! You can find it [here](https://github.com/bandofpv/Trash_Sorting_Robot/tree/master/Tensorflow/Images).

## Step 3, Training:

In terms of training, I decided to use [transfer learning](https://en.wikipedia.org/wiki/Transfer_learning) using Tensorflow. This allows us to train a decently accurate model without a large amount of data.

There are a couple of ways we can do this. We can do it on our local desktop machine on the cloud. Training on our local machine will take a super long time depending on how powerful your computer is and if you have a powerful GPU. This is probably the easiest way in my opinion, but again with the downside of speed.

There are some key things to note about transfer learning. You need to make sure that the pre-trained model you use for training is compatible with the Coral Edge TPU. You can find compatible models [here](https://coral.ai/models/). I used the MobileNet SSD v2 (COCO) model. Feel free to experiment with others too.

To train on your local machine, I would recommend following [Google's](https://coral.ai/docs/edgetpu/retrain-detection/) tutorial or [EdjeElectronics](https://github.com/EdjeElectronics/TensorFlow-Object-Detection-API-Tutorial-Train-Multiple-Objects-Windows-10) tutorial if running on Windows 10. Personally, I have tested EdjeElectroncs tutorial and reached success on my desktop. I can not confirm if Google's tutorial will work, but I would be surprised if it doesn't.

To train in the cloud, you can use AWS or GCP. I found [this](https://medium.com/tensorflow/training-and-serving-a-realtime-mobile-object-detector-in-30-minutes-with-cloud-tpus-b78971cf1193) tutorial that you can try. It uses Google's cloud TPU's that can train your object detection model super fast. Feel free to use AWS as well.

Whether you train on your local machine or in the cloud, you should end up with a trained tensorflow model.

## Step 4, Compiling the Trained Model:
 
In order for your trained model to work with the Coral Edge TPU, you need to compile it.

Here is a diagram for the workflow:

![step4](assets/tutorials/recycle-sorting-robot/step4.jpg)

After training, you need to save it as a frozen graph (.pb file). Then, you need to convert it into a Tensorflow Lite model. Note how it says "Post-training quantization". If you used the compatible pre-trained models when using transfer learning, you don't need to do this. Take a look at the full documentation on compatibility [here](https://coral.ai/docs/edgetpu/models-intro/).

With the Tensorflow Lite model, you need to compile it to an Edge TPU model. See details on how to do this [here](https://coral.ai/docs/edgetpu/models-intro/#compiling).

## Step 5, Deploy the Model:

The next step is to set up the Raspberry Pi (RPI) and Edge TPU to run the trained object detection model.

First, set up the RPI using [this](https://projects.raspberrypi.org/en/projects/raspberry-pi-setting-up/2) tutorial.

Next, set up the Edge TPU following [this](https://coral.ai/docs/accelerator/get-started/) tutorial.

Finally, connect the RPI camera module to the raspberry pi.

You are now ready to test your object detection model!

If you cloned my [repository](https://github.com/bandofpv/Trash_Sorting_Robot) already, you will want to navigate to the RPI directory and run the [test_detection.py](https://github.com/bandofpv/Trash_Sorting_Robot/blob/master/RPI/test_detection.py) file:

```console
python test_detection.py --model recycle_ssd_mobilenet_v2_quantized_300x300_coco_2019_01_03/detect_edgetpu.tflite --labels recycle_ssd_mobilenet_v2_quantized_300x300_coco_2019_01_03/labels.txt
```

A small window should pop up and if you put a plastic water bottle or other recycle material, it should detect it like this:

![step5](assets/tutorials/recycle-sorting-robot/step5.jpg)

Press the letter "q" on your keyboard to end the program.

## Step 6, Build the Robotic Arm:

The robotic arm is a 3D printed arm I found [here](https://howtomechatronics.com/tutorials/arduino/diy-arduino-robot-arm-with-smartphone-control/). Just follow the tutorial on setting it up.

This is how my arm turned out:

![step6](assets/tutorials/recycle-sorting-robot/step6.jpg)

Make sure you connect the servo pins to the according to Arduino I/O pins in my code. Connect the servos from bottom to top of the arm in this order: 3, 11, 10, 9, 6, 5. Not connecting it in this order will cause the arm to move the wrong servo!

Test to see it working by navigating to the Arduino directory and running the [basicMovement.ino](https://github.com/bandofpv/Trash_Sorting_Robot/blob/master/Arduino/basicMovement/basicMovement.ino) file. This will simply grab an object that you place in front of the arm and drop it behind.

## Step 7, Connecting the RPI and Robotic arm:

We first need to mount the camera module to the bottom of the claw:

![step7](assets/tutorials/recycle-sorting-robot/step7.jpg)

Try to align the camera as straight as possible to minimize errors in grabbing the recognized recycle material. You will need to use the long camera module ribbon cable as seen in the materials list.

Next, you need to upload the [roboticArm.ino](https://github.com/bandofpv/Trash_Sorting_Robot/blob/master/Arduino/roboticArm/roboticArm.ino) file to the Arduino board.

Finally, we just have to connect a USB cable between the RPI's USB port and the Arduino's USB port. This will allow them to communicate via serial. Follow this [tutorial](https://www.sunfounder.com/blog/rpi-ard/) on how to set this up.

## Step 8, Final Touches:

This step is completely optional but I like to put all my components into a nice little project box.

Here is how it looks:

![step8-1](assets/tutorials/recycle-sorting-robot/step8-1.jpg)

![step8-2](assets/tutorials/recycle-sorting-robot/step8-2.jpg)

You can find the project box on the materials list. I just drilled some holes and used brass standoffs to mount the electronics. I also mounted 4 cooling fans to keep a constant airflow through the RPI and TPU when hot.

## Step 9, Running:

You are now ready to power on both the robotic arm and RPI! On the RPI, you can simply run the [recycle_detection.py](https://github.com/bandofpv/Trash_Sorting_Robot/blob/master/RPI/recycle_detection.py) file. This will open a window and the robotic arm will start running just like in the demo video! Press the letter "q" on your keyboard to end the program.

Feel free to play around with the code and have fun!

## Future Work:

I hope to use R.O.S. to control the robotic arm with more precise movements. This will enable more accurate picking up of objects.






