---
id: reading-eye-for-the-blind
title: Reading Eye For The Blind With NVIDIA Jetson Nano
sidebar_label: Reading Eye For The Blind With NVIDIA Jetson Nano
---

December 2019 - February 2020

## Story

The World Health Organization (WHO) estimates that there are 285 million people that are visually impaired. Specifically in the United States, there are 1.3 million who are legally blind and only 10 percent of them can actually read braille and only 10 percent of the blind children are learning it. This is due to how expensive books are to read in braille. It costs up to $15,000 just to convert five chapters of a science book! Due to the price, very few blind people are able to learn through books. People who are reading impaired or suffer vision loss also struggle to read. While many can use audio-books, they are still limited on what they can read based on audio books' availability and costs. Books are the cheapest way to learn and 285 million people are unable to take advantage of this resource we greatly take for granted. The Reading Eye device would allow more freedom in terms of book choice, without having to make investments towards buying several audio-books. It is able to detect printed and handwritten text and speak it in a realistic synthesized voice.

![story](assets/tutorials/reading-eye-for-the-blind/story.jpg)

My whole inspiration for this project was to help my grandmother who's vision degrades everyday due to age. I then thought of all the others who suffer due to bad vision or reading disabilities which motivated me to pursue this project.

### Demo Video:

[![demo-video](assets/tutorials/reading-eye-for-the-blind/demo-video.jpg)](https://www.youtube.com/watch?v=ZVquCjLMWuA)

### Code:

+ **[Reading_Eye_For_The_Blind GitHub Repository](https://github.com/bandofpv/Reading_Eye_For_The_Blind)**
+ **[Handwritten_Text GitHub Repository](https://github.com/bandofpv/Handwritten_Text)**

**Note:** When I refer to "your computer" I am referring to a Ubuntu 18.04 LTS machine. When I refer to "your Jetson Nano" I am referring to your Jetson Nano. While this tutorial can all be done using a Jetson Nano, I would not recommend it because it is slow during heavy processing compared to a traditional desktop machine.

### Step 1, Setting Up Your Computer:

As stated above, I recommend a clean install of Ubuntu 18.04 LTS. Instructions on installing Ubuntu can be found [here](https://www.youtube.com/watch?v=u5QyjHIYwTQ). After installing Ubuntu, run this:

```console
$ sudo apt-get update
$ sudo apt-get upgrade
$ sudo apt-get install python3.6-dev python3-pip git
```

### Step 2, Training the Handwritten Text Recognition Model:

We first need to train a model that can recognize handwritten text. We will be using Tensorflow 2.0 and Google Colab for training. In terms of data, we will use the [IAM Database](http://www.fki.inf.unibe.ch/databases/iam-handwriting-database). This data set comes with more than 9,000 pre-labeled text lines from 500 different writers.

Here is an example from the database:

![database-example](assets/tutorials/reading-eye-for-the-blind/database-example.jpg)

To access to the database you gave to register [here](http://www.fki.inf.unibe.ch/DBs/iamDB/iLogin/index.php). We can now download all necessary files.

First clone the [Training GitHub Repository](https://github.com/bandofpv/Handwritten_Text) in your home folder of your computer:

```console
$ cd ~
$ git clone https://github.com/bandofpv/Handwritten_Text.git
```

Next, we need to setup a virtual environment and install the required python modules:

```console
$ sudo pip3 install virtualenv virtualenvwrapper
$ echo -e "n# virtualenv and virtualenvwrapper" >> ~/.bashrc
$ echo "export WORKON_HOME=$HOME/.virtualenvs" >> ~/.bashrc
$ echo "export VIRTUALENVWRAPPER_PYTHON=/usr/bin/python3" >> ~/.bashrc
$ echo "source /usr/local/bin/virtualenvwrapper.sh" >> ~/.bashrc
$ source ~/.bashrc
$ mkvirtualenv hand -p python3
$ cd ~/Handwritten_Text
$ pip3 install -r requirements.txt
```

Next, we can download the database (**Note:** replace *your-username* with your username and replace *your-password* with your password from registering):

```console
$ cd ~/Handwritten_Text/raw
$ USER_NAME=your-username
$ PASSWORD=your-password
$ wget --user $USER_NAME --password $PASSWORD -r -np -nH --cut-dirs=3 -A txt,png -P iam http://www.fki.inf.unibe.ch/DBs/iamDB/data/
$ cd ~/Handwritten_Text/raw/iam/
$ wget http://www.fki.inf.unibe.ch/DBs/iamDB/tasks/largeWriterIndependentTextLineRecognitionTask.zip
$ unzip -d largeWriterIndependentTextLineRecognitionTask largeWriterIndependentTextLineRecognitionTask.zip
$ rm largeWriterIndependentTextLineRecognitionTask.zip robots.txt
```

This is a long process so do something fun and look at memes:

![meme1](assets/tutorials/reading-eye-for-the-blind/meme1.jpg)

After downloading the database, we need to transform it into a HDF5 file:

```console
cd ~/Handwritten_Text/src
python3 main.py --source=iam --transform
```

This will create a file named iam.hdf5 in the data directory.

Now, we need to open the [training.ipynb](https://colab.research.google.com/github/bandofpv/Handwritten_Text/blob/master/src/training.ipynb) file on Google Colab:

![training-colab](assets/tutorials/reading-eye-for-the-blind/training-colab.jpg)

Select the **Copy to Drive** tab in the top left corner of the page.

Then, go onto your Google Drive and find the folder named **Colab Notebooks**. Press the **+ New** button on the left and create a new folder named **handwritten-text**. Go into the new folder you created and press the **+ New** button and select the **Folder upload** option. You will need to upload both the src and data folder from our Handwritten_Text directory. You screen should look like this:

![google-drive](assets/tutorials/reading-eye-for-the-blind/google-drive.jpg)

Go back to the [training.ipynb](https://colab.research.google.com/github/bandofpv/Handwritten_Text/blob/master/src/training.ipynb) tab and confirm that you are hooked up to a GPU runtime. To check, find the **Runtime** tab near the top left corner of the page and select **Change runtime type**. Customize the settings too look like this:

![notebook-settings](assets/tutorials/reading-eye-for-the-blind/notebook-settings.jpg)

Google Colab allows us to take advantage of a Tesla K80 GPU, Xeon CPU, and 13GB of RAM all for free and in a notebook style format for training machine learning models.

To prevent Google Colab from disconnecting to the server, press Ctrl+ Shift + I to open inspector view. Select the **Console** tab and enter this:

```console
function ClickConnect(){
console.log("Working"); 
document.querySelector("colab-toolbar-button#connect").click() 
}

setInterval(ClickConnect,60000)
```

Your screen should look like this (**Note:** if you get an error about not able to paste into the console, type "allow pasting" as seen below):

![allow-pasting-colab-console](assets/tutorials/reading-eye-for-the-blind/allow-pasting-colab-console.jpg)

Now let's start training! Simply find the **Runtime** tab near the top left corner of the page and select **Run All**. Follow through each code snippet until you reach step 1.2 where you will have to authorize the notebook to access your Google Drive. Just click the link it provides you and copy & paste the authorization code in the input field.

You can then let it the notebook run until it finishes training.

Take a look at the Predict and Evaluate section too see the results:

![results1](assets/tutorials/reading-eye-for-the-blind/results1.jpg)

![results2](assets/tutorials/reading-eye-for-the-blind/results2.jpg)

Now that we are done training, we can enjoy another meme:

![meme2](assets/tutorials/reading-eye-for-the-blind/meme2.jpg)

###Step 3, Setting Up The Jetson Nano:

First, follow NVIDIA's tutorial, [Getting Started With Jetson Nano](https://developer.nvidia.com/embedded/learn/get-started-jetson-nano-devkit#intro).

After booting up, open a new terminal and download the necessary packages and python modules (**Note:** this will take a LONG time!):

```console
$ sudo apt-get update
$ sudo apt-get upgrade
$ sudo apt-get install python3-pip gcc-8 g++-8 libopencv-dev
$ sudo apt-get install libhdf5-serial-dev hdf5-tools libhdf5-dev zlib1g-dev zip libjpeg8-dev gfortran libopenblas-dev liblapack-dev
$ sudo pip3 install -U pip testresources setuptools cython
$ sudo pip3 install -U numpy==1.16.1 future==0.17.1 mock==3.0.5 h5py==2.9.0 keras_preprocessing==1.0.5 keras_applications==1.0.8 gast==0.2.2 enum34 futures protobuf
$ sudo pip3 install --pre --extra-index-url https://developer.download.nvidia.com/compute/redist/jp/v43 tensorflow-gpu==2.0.0+nv20.1
```

This will install OpenCV 4.0 for computer vision, gcc-8 & g++-8 for C++ compiling, and TensorFlow 2.0 to run our handwritten text recognition model. Those are the main ones, but we will also need to install all the other required dependencies:

```console
$ sudo pip3 uninstall enum34
$ sudo apt-get install python3-matplotlib python3-numpy python3-pil python3-scipy nano
$ sudo apt-get install build-essential cython
$ sudo apt install --reinstall python*-decorator
$ sudo pip3 install -U scikit-image
$ sudo pip3 install -U google-cloud-vision google-cloud-texttospeech imutils pytesseract pyttsx3 natsort playsound 
$ sudo pip3 install -U autopep8==1.4.4 editdistance==0.5.3 flake8==3.7.9 kaldiio==2.15.1
```

We also need to install llvmlite from source in order to install numba (**Note:** This will take an even LONGER time. Treat your self to a nice movie!):

```console
$ wget http://releases.llvm.org/7.0.1/llvm-7.0.1.src.tar.xz
$ tar -xvf llvm-7.0.1.src.tar.xz
$ cd llvm-7.0.1.src
$ mkdir llvm_build_dir
$ cd llvm_build_dir/
$ cmake ../ -DCMAKE_BUILD_TYPE=Release -DLLVM_TARGETS_TO_BUILD="ARM;X86;AArch64"
$ make -j4
$ sudo make install
$ cd bin/
$ echo "export LLVM_CONFIG=\""`pwd`"/llvm-config\"" >> ~/.bashrc
$ echo "alias llvm='"`pwd`"/llvm-lit'" >> ~/.bashrc
$ source ~/.bashrc
$ sudo pip3 install -U llvmlite numba
```

Next, you need to plug in the WiFi USB adapter into any of the USB ports:

![wifi-usb](assets/tutorials/reading-eye-for-the-blind/wifi-usb.jpg)




