/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function About(props) {
  const {config: siteConfig, language = ''} = props;
  const {baseUrl, docsUrl} = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
  const langPart = `${language ? `${language}/` : ''}`;
  const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

  const aboutMe = [
    {
      content: 'Andrew loves to build anything he thinks of. It could be drones whizzing through the air or a recycle sorting robot that uses object detection and machine learning to distinguish between different recycle materials. Andrew is also an Eagle Scout from Troop 57 where he earned up to 55 merit badges. He continues to be active in the outdoors, whether it’s casual hikes or annual backpacking trips with his scouts or family. Andrew also has many other hobbies. These include being an advanced open water certified diver and competing for his school’s varsity tennis team. During the school year, he continues to serve his community by being an active board member in his school’s Youth Community Service - Interact Club.',
    },
    {
	image: `${baseUrl}img/about-me.png`,
	imageAlign: 'right',
    }
  ];

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="post">
          <header className="postHeader">
            <h1>Who is Andrew Bernas?</h1>
          </header>        
          <GridBlock contents={aboutMe} layout="twoColumn" />
	  <h1>Gear:</h1>
	  <h3>Radio Transmitters:</h3>
	  <ul type="circle">
	    <li><a href="https://www.getfpv.com/index.php/frsky-taranis-x9d-plus-2-4ghz-accst-radio-mode-2.html?ccartCamp=65956434.3&recoSrc=6m-dl-hybrid-alpha-abt:570,3m-dl-hybrid-alpha-avt:570,6m-dl-samesess-alpha-fbicp:570,3m-dl-samesess-alpha-fvicp:570">FrSky Taranis X9D Plus 2.4GHz ACCST Radio (Mode 2)</a></li>
	    <li><a href= "https://www.getfpv.com/frsky-m9-hall-sensor-gimbal-for-taranis-x9d-x9d-plus.html">FrSky M9 Hall Sensor Gimbal For Taranis X9D & X9D Plus</a></li>
	    <li><a href="https://www.horizonhobby.com/dx6i-6-channel-dsmx-reg%3B-transmitter-spmr6630">DX6i 6-Channel DSMX® (Mode 2)</a></li>
	  </ul>
	  <h3>FPV Goggles:</h3>
	  <ul type="circle">
	    <li><a href="https://www.getfpv.com/fatshark-dominator-v3-fpv-goggles.html">Fat Shark Dominator V3 FPV Goggles</a></li>
	    <li><a href="https://www.getfpv.com/laforge-v4-fat-shark-receiver-module.html">LaForge V4 Fat Shark Receiver Module</a></li>
	    <li><a href="https://www.getfpv.com/tbs-triumph-5-8ghz-rhcp-fpv-antenna-set-sma.html">TBS Triumph 5.8GHz RHCP FPV Antenna Set (SMA)</a></li>
	    <li><a href="https://www.getfpv.com/tattu-2500mah-2s1p-fatshark-goggles-lipo-battery-pack-dc3-5mm-plug.html">Tattu 2500mAh 2S1P Fatshark Goggles Lipo Battery Pack (DC3.5mm plug)</a></li>
	    <li><a href="https://www.getfpv.com/mr-steele-earbud.html">Mr. Steele Earbud</a></li>
	 </ul>
        </div>
      </Container>
    </div>
  );
}

module.exports = About;
