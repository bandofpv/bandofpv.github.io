---
id: vacuum-robot
title: Autonomous Vacuum Robot
sidebar_label: Autonomous Vacuum Robot
---

June 2017 - July 2017

**[Notebook](assets/robots/vacuum-robot/notebook.pdf)**

**[GitHub Repository](https://github.com/bandofpv/Vacuum_Robot)**

## Introduction

I have built a vacuum robot. This is a fun DIY project to work on during the summer. It’s an autonomous robot that will avoid walls and drop-offs. The robot will also help you understand how the arduino works. This is a super useful robot if you don’t like vacuuming the floor. Just lay it down and let it clean!

![vacuum robot](assets/robots/vacuum-robot/vacuum-robot-picture.jpg)

## Final Milestone

### Video

[![final milestone video](assets/robots/vacuum-robot/vacuum-robot-final-milestone-video.png)](https://www.youtube.com/watch?v=D1FHCfAPJcg)

### Documentation

I completed my final milestone for my vacuum robot. In the end, it vacuums the house for you! besides sucking up dirt and hair, it can avoid walls, stairs, and chairs. It has a 30 minute battery life and will let you know when the battery is low and needs a recharge. Some of the new features that were not shown in the video was the bluetooth capability. I added a little bluetooth module so I can wirelessly control the robot using my phone or computer. For the phone, I created a simple app that can move the robot forwards, right, left, and backwards. It also added a  voice recognition capability so you can tell it to clean and move around. Finally, there is the cleaning button where you can start and stop the robot from cleaning your house. To control it from your computer, you can just use the arrow keys and press “c” on the keyboard to start cleaning! One challenge that I faced would be connecting the bluetooth to my phone or computer. I never used bluetooth low energy before and never created code for a bluetooth module. With a little research, I was able to get it up and running.

### Pictures

![vacuum app](assets/robots/vacuum-robot/vacuum-robot-final-milestone-picture-1.png)

![vacuum robot final milestone inside view](assets/robots/vacuum-robot/vacuum-robot-final-milestone-picture-2.jpg)

![vacuum robot final milestone schematic](assets/robots/vacuum-robot/vacuum-robot-final-milestone-picture-3.jpg)

## Third Milestone

### Video

[![third milestone video](assets/robots/vacuum-robot/vacuum-robot-third-milestone-video.png)](https://www.youtube.com/watch?v=ThmuH1fsDFk)

### Documentation

Today I finished my third milestone. I am finally done with my autonomous vacuum robot. I did some small modifications to the hardware, such as some new status lights and a switch. The new status lights allow the user to know what the robot is doing. For example if the LED (Light Emitting Diode) is blinking when you turn it on, then you will know that the robot will need to calibrate for 5 seconds. The IR (Infrared) sensors need time to get a clear reading when powering it up. Then, the light will stay on letting you know that the battery is full and will start vacuuming the house. If the battery dies, then the LED will start blinking again as the buzzer goes off. My switch is just a normal switch to open and close the circuit, turning the robot on and off. I also added and programed the bumper. The bumper consists of two push buttons so if either button gets hit, then it will move away. I finally added a battery alarm, so if the voltage divider doesn’t work, then the buzzer will also let you know that the battery is dead. I finally made changes to the code. I made my own function for the ground sensors and the LEDs. I made a function allowing me to blink an LED and change the brightness using PWM (Pulse Width Modulation). I used two for loops in the function that will keep looping until the time is over. So for one second it will turn on, and the other second it will turn off. For the ground sensors, I made a function that will take readings from the ground sensors. And if the sensors detect a cliff, then it will turn back. Because the ground sensors are so close to the ground and is so sensitive that it won’t get an accurate reading.  My new function will take one reading from the IR sensor, then will wait for 50 milliseconds, and will repeat that process until it gets a total of 4 readings. Then my function will return either ground or cliff using bitwise OR. So if one of the readings is a 1(ground) then the whole function will return ground. It will only return cliff if all of the readings are a 0(cliff). That is all the modifications I made to vacuum robot. I had so much trouble creating the function for the ground sensors and was very frustrated because I had figure it out before my parent night presentation. I also had trouble fitting all the parts in the robot because the chassis is small.

### Pictures

![vacuum robot third  milestone inside view](assets/robots/vacuum-robot/vacuum-robot-third-milestone-picture-1.jpg)

![vacuum robot third  milestone schematic](assets/robots/vacuum-robot/vacuum-robot-third-milestone-picture-2.jpg)

## Second Milestone

### Video

### Documentation

### Pictures

![vacuum robot second  milestone inside view](assets/robots/vacuum-robot/vacuum-robot-second-milestone-picture-1.jpg)

![vacuum robot second  milestone schematic](assets/robots/vacuum-robot/vacuum-robot-second-milestone-picture-2.jpg)