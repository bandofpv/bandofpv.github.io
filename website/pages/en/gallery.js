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
          <h1>About Me</h1>
          <MarkdownBlock>
            [![airframe](img/about-me.png)](img/about-me.png)

            [![airframe](img/rc-airplane.png)](img/rc-airplane.png)

            [![airframe](img/favicon.ico)](favicon.ico)

          </MarkdownBlock>
      </div>
    </div>
  );
}

module.exports = About;
