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
      content: 'Andrew loves to build anything he thinks of. It could be drones whizzing through the air or a recycle sorting robot that uses object detection and machine learning to distinguish between different recycle materials. Andrew is also an Eagle Scout from Troop 57 where he earned up to 55 merit badges. He continues to be active in the outdoors, whether it’s casual hikes or annual backpacking trips with his scouts or family. Andrew also has many other hobbies. These include being an advanced open water certified diver and competing for his school’s varsity tennis team. During the school year, he continues to serve his community by being an active board member in his school’s Youth Community Service - Interact Club. ',
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
            <h1>About Me</h1>
          </header>        
          <GridBlock contents={aboutMe} layout="twoColumn" />
        </div>
      </Container>
    </div>
  );
}

module.exports = About;
