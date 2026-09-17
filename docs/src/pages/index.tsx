import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <img
            className={styles.heroLogo}
            src="img/aayushicode_icon.png"
            alt="Aayushi Code logo"
            width={140}
            height={140}
          />
          <Heading as="h1" className="hero__title">
            {siteConfig.title}
          </Heading>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link className="button button--primary button--lg" to="/download">
              Download
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro"
            >
              Read the docs
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="The fast, native code editor"
      description={siteConfig.tagline}
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <section className={styles.ctaSection}>
          <div className="container">
            <Heading as="h2">Get started in a minute</Heading>
            <p>
              Grab the build for your platform and start editing. No account,
              no setup required.
            </p>
            <Link className="button button--primary button--lg" to="/download">
              Pick your platform
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}