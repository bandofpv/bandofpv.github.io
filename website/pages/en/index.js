/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const ProjectTitle = () => (
      <h1 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h1>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
            <Button href={docUrl('in-progress/lockheed-vega.html')}>Projects</Button>
            <Button href={docUrl('tutorials/reading-eye-for-the-blind.html')}>Tutorials</Button>
            <Button href="https://www.youtube.com/channel/UCYIknwUG33u7_Se2__GrHrg">Youtube</Button>
            <Button href="https://github.com/bandofpv">GitHub</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <Container
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const Features = () => (
      <Block layout="twoColumn">
        {[
          {
            image: `${baseUrl}img/in-progress.png`,
            imageAlign: 'bottom',
            title: `[In Progress](${baseUrl}docs/in-progress/lockheed-vega.html)`,
	    imageLink: `${baseUrl}docs/in-progress/lockheed-vega.html`,
          },
          {
            image: `${baseUrl}img/robot.png`,
            imageAlign: 'bottom',
            title: `[Robots](${baseUrl}docs/robots/recycle-sorting-robot.html)`,
	    imageLink: `${baseUrl}docs/robots/recycle-sorting-robot.html`,
          },
	  {
            image: `${baseUrl}img/drone.png`,
            imageAlign: 'bottom',
            title: `[Drones](${baseUrl}docs/drones/qav-r.html)`,
	    imageLink: `${baseUrl}docs/drones/qav-r.html`,
          },
	  {
            image: `${baseUrl}img/rc-airplane.png`,
            imageAlign: 'bottom',
            title: `[RC Airplanes](${baseUrl}docs/rc-airplanes/explorer.html)`,
	    imageLink: `${baseUrl}docs/rc-airplanes/explorer.html`,
          },
        ]}
      </Block>
    );

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Features />
        </div>
      </div>
    );
  }
}

module.exports = Index;
