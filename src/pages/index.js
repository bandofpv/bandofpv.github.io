import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Head from '@docusaurus/Head';
import styles from './index.module.css';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Portfolio Website"
      description="Portfolio website for Andrew Bernas. Includes documentation for several robotics projects and tutorials.">
      <Head>
        <meta property="og:image" content="https://bandofpv.github.io/img/profile.jpg" />
        <meta property="image" content="https://bandofpv.github.io/img/profile.jpg" />
        <meta property="og:logo" content="https://bandofpv.github.io/img/profile.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org/',
            '@type': 'Organization',
            name: 'Andrew Bernas',
            url: 'https://www.andrewbernas.com/',
            description: 'Portfolio website for Andrew Bernas. Includes documentation for several robotics projects and tutorials.',
            logo: 'https://bandofpv.github.io/img/profile.jpg',
            image: 'https://bandofpv.github.io/img/profile.jpg',
          })}
        </script>
      </Head>
      
      <main className="container margin-vert--xl">
        {/* Bio Section */}
        <div className="row margin-bottom--lg">
          <div className="col col--3">
            <div className="avatar avatar--vertical">
              <img
                className="avatar__photo avatar__photo--xl profile-image"
                src="img/profile.jpg"
                alt="Andrew Bernas"
              />
            </div>
          </div>
          <div className="col col--9 bio-text-col">
            <Heading as="h1" className="bio-header-title">{siteConfig.title}</Heading>
            {siteConfig.tagline && <p className="hero__subtitle">{siteConfig.tagline}</p>}
            <div>
              <p>
                I am a Weapons, Robotics, & Control Engineering student at the United States Naval Academy with a passion for building autonomous systems that work in the real world. My research focuses on perception-driven autonomy for uncrewed aerial vehicles (UAVs), aiming to enable robust, scalable operation in challenging, GPS-denied environments.  This site collects documentation for my projects, hands-on tutorials, and details on my research publications.
              </p>
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className="row">
          <div className="col col--4 margin-bottom--md">
            <div className="card shadow--md" style={{height: '100%'}}>
              <div className="card__header">
                <Heading as="h3">Projects</Heading>
              </div>
              <div className="card__body">
                <p>Documentation for various projects.</p>
              </div>
              <div className="card__footer">
                <Link className="button button--primary button--block" to="/docs/projects">
                  View Projects
                </Link>
              </div>
            </div>
          </div>
          <div className="col col--4 margin-bottom--md">
            <div className="card shadow--md" style={{height: '100%'}}>
              <div className="card__header">
                <Heading as="h3">Tutorials</Heading>
              </div>
              <div className="card__body">
                <p>Step-by-step guides and tutorials.</p>
              </div>
              <div className="card__footer">
                <Link className="button button--primary button--block" to="/docs/tutorials">
                  View Tutorials
                </Link>
              </div>
            </div>
          </div>
          <div className="col col--4 margin-bottom--md">
            <div className="card shadow--md" style={{height: '100%'}}>
              <div className="card__header">
                <Heading as="h3">Research</Heading>
              </div>
              <div className="card__body">
                <p>Academic research and publications.</p>
              </div>
              <div className="card__footer">
                <Link className="button button--primary button--block" to="/research">
                  View Research
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
