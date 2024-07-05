import clsx from 'clsx';
import Heading from '@theme/Heading';
import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';
import styles from './styles.module.css';

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="text--center">
              <ThemedImage className={styles.Svg}
                alt="Docusaurus themed image"
                sources={{
                  light: useBaseUrl('/img/undraw_project_light.svg'),
                  dark: useBaseUrl('/img/undraw_project_dark.svg'),
                }}
              />
            </div>
            <div className="text--center padding-horiz--md">
              <Heading as="h2">Projects</Heading>
              <p>Documentation for robots, drones, rc airplanes, and more!</p>
            </div>
          </div>
          <div className="col">
            <div className="text--center">
              <img className={styles.profile} src="/img/profile.jpg" alt="Andrew Bernas"/>
            </div>
          </div>
          <div className="col">
            <div className="text--center">
              <ThemedImage className={styles.Svg}
                alt="Docusaurus themed image"
                sources={{
                  light: useBaseUrl('/img/undraw_tutorial_light.svg'),
                  dark: useBaseUrl('/img/undraw_tutorial_dark.svg'),
                }}
              />
            </div>
            <div className="text--center padding-horiz--md">
              <Heading as="h2">Tutorials</Heading>
              <p>Step by step instructions to replicate many of my projects!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
