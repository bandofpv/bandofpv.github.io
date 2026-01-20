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
      description="Portfolio website for Andrew Bernas, a Robotics & Control Engineering student specializing in UAVs and autonomous systems.">
      <Head>
        <meta property="og:image" content="https://www.andrewbernas.com/img/profile.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org/',
            '@type': 'Person', 
            name: 'Andrew Bernas',
            url: 'https://www.andrewbernas.com/',
            sameAs: [ 
              "https://www.linkedin.com/in/andrewbernas",
              "https://github.com/bandofpv",
              "http://www.youtube.com/@BandoFPV",
              "https://www.hackster.io/bandofpv"
            ],
            description: 'Portfolio website for Andrew Bernas, a Robotics & Control Engineering student specializing in UAVs and autonomous systems.', 
            image: 'https://www.andrewbernas.com/img/profile.jpg',
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            'itemListElement': [
              {
                '@type': 'SiteNavigationElement',
                'position': 1,
                'name': 'Projects',
                'description': 'Robots, drones, computer vision, and more.',
                'url': 'https://www.andrewbernas.com/docs/projects'
              },
              {
                '@type': 'SiteNavigationElement',
                'position': 2,
                'name': 'Tutorials',
                'description': 'Step-by-step guides for robotics, hardware, and software.',
                'url': 'https://www.andrewbernas.com/docs/tutorials'
              },
              {
                '@type': 'SiteNavigationElement',
                'position': 3,
                'name': 'Research',
                'description': 'Publications on perception-driven autonomy for UAVs.',
                'url': 'https://www.andrewbernas.com/research'
              }
            ]
          })}
        </script>
      </Head>
      
      <main className="container margin-vert--lg">
        {/* Bio Section */}
        <div className="row margin-bottom--lg profile-row">
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
                <p>Robots, drones, computer vision, and more.</p>
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
