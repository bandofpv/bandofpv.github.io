/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock;

function About(props) {
  const {config: siteConfig, language = ''} = props;
  const {baseUrl, docsUrl} = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
  const langPart = `${language ? `${language}/` : ''}`;
  const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

  return (
    <div className="docMainWrapper wrapper">
      <div className="post">

          <h1>Photography Gallery</h1>

          <MarkdownBlock>

            [![Silver_Surfer](img/gallery/Silver_Surfer_AB.jpg)](img/gallery/large/Silver_Surfer_AB.jpg)

            [![Rocky_Road](img/gallery/Rocky_Road_AB.jpg)](img/gallery/large/Rocky_Road_AB.jpg)

            [![Path_not_Taken](img/gallery/Path_not_Taken.jpg)](img/gallery/large/Path_not_Taken.jpg)

            [![Mirror_Lake_AB](img/gallery/Mirror_Lake_AB.jpg)](img/gallery/large/Mirror_Lake_AB.jpg)

            [![Blue_AB](img/gallery/Blue_AB.jpg)](img/gallery/large/Blue_AB.jpg)

            [![Confetti_AB](img/gallery/Confetti_AB.jpg)](img/gallery/large/Confetti_AB.jpg)

            [![Swoosh](img/gallery/Swoosh.jpg)](img/gallery/large/Swoosh.jpg)

            [![Cloud_of_Fish](img/gallery/Cloud_of_Fish.jpg)](img/gallery/large/Cloud_of_Fish.jpg)

            [![Tropical_Waters](img/gallery/Tropical_Waters.jpg)](img/gallery/large/Tropical_Waters.jpg)

            [![Pacific_Peace_AB](img/gallery/Pacific_Peace_AB.jpg)](img/gallery/large/Pacific_Peace_AB.jpg)

            [![Walk_of_Gratitude_AB](img/gallery/Walk_of_Gratitude_AB.jpg)](img/gallery/large/Walk_of_Gratitude_AB.jpg)

            [![Capture_the_Blast_AB](img/gallery/Capture_the_Blast_AB.jpg)](img/gallery/large/Capture_the_Blast_AB.jpg)

            [![Cruisin_AB](img/gallery/Cruisin_AB.jpg)](img/gallery/large/Cruisin_AB.jpg)

            [![Tunnel_Vision_AB](img/gallery/Tunnel_Vision_AB.jpg)](img/gallery/large/Tunnel_Vision_AB.jpg)

            [![Night_Light_AB](img/gallery/Night_Light_AB.jpg)](img/gallery/large/Night_Light_AB.jpg)

            [![2](img/gallery/2.jpg)](img/gallery/large/2.jpg)

            [![4](img/gallery/4.jpg)](img/gallery/large/4.jpg)

            [![Image15](img/gallery/Image15.jpg)](img/gallery/large/Image15.jpg)

            [![Image3](img/gallery/Image3.jpg)](img/gallery/large/Image3.jpg)

            [![Image9](img/gallery/Image9.jpg)](img/gallery/large/Image9.jpg)

            [![Image11](img/gallery/Image11.jpg)](img/gallery/large/Image11.jpg)

            [![Image18](img/gallery/Image18.jpg)](img/gallery/large/Image18.jpg)

            [![fire](img/gallery/fire.jpg)](img/gallery/large/fire.jpg)

            [![night](img/gallery/night.jpg)](img/gallery/large/night.jpg)

            [![sunset](img/gallery/sunset.jpg)](img/gallery/large/sunset.jpg)

            [![Jet_Bound_AB](img/gallery/Jet_Bound_AB.jpg)](img/gallery/large/Jet_Bound_AB.jpg)

            [![Jakarta_Market_AB](img/gallery/Jakarta_Market_AB.jpg)](img/gallery/large/Jakarta_Market_AB.jpg)

          </MarkdownBlock>
      </div>
    </div>
  );
}

module.exports = About;
