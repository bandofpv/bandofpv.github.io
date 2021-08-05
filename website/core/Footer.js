/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Projects</h5>
            <a href={this.docUrl('in-progress/sar-drone.html')}>
              In Progress
            </a>
            <a href={this.docUrl('incomplete-prototypes/lockheed-vega.html')}>
              Incomplete Prototypes
            </a>
            <a href={this.docUrl('robots/recycle-sorting-robot.html')}>
              Robots
            </a>
            <a href={this.docUrl('drones/qav-r.html')}>
              Drones
            </a>
            <a href={this.docUrl('rc-airplanes/explorer.html')}>
              RC Airplanes
            </a>
            <a href={this.docUrl('conservation-service-projects/fish-and-wildlife-management.html')}>
              Conservation Service Projects
            </a>
          </div>
          <div>
            <h5>More</h5>
            <a href={this.docUrl('tutorials/sar-drone.html')}>
               Tutorials
            </a>
            <a href={this.pageUrl('gallery.html')}>
               Photography
            </a>
          </div>
          <div>
            <h5>Profile</h5>
            <a href={this.pageUrl('about-me.html')}>
               About Me
            </a>
            <a
              href="https://docs.google.com/document/d/1LFxUAfSPOlgA_n8IyqA-czno1DAukBsEL19MBdMJNjs/edit?usp=sharing"
              target="_blank"
              rel="noreferrer noopener">
              Resume
            </a>
            <a
              href="https://www.youtube.com/channel/UCYIknwUG33u7_Se2__GrHrg"
              target="_blank"
              rel="noreferrer noopener">
              Youtube
            </a>
            <a
	          href="https://github.com/bandofpv"
	          target="_blank"
	          rel="noreferrer noopener">
	          GitHub
	        </a>

            {this.props.config.twitterUsername && (
              <div className="social">
                <a
                  href={`https://twitter.com/${
                    this.props.config.twitterUsername
                  }`}
                  className="twitter-follow-button">
                  Follow @{this.props.config.twitterUsername}
                </a>
              </div>
            )}
            {this.props.config.facebookAppId && (
              <div className="social">
                <div
                  className="fb-like"
                  data-href={this.props.config.url}
                  data-colorscheme="dark"
                  data-layout="standard"
                  data-share="true"
                  data-width="225"
                  data-show-faces="false"
                />
              </div>
            )}
          </div>
        </section>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
