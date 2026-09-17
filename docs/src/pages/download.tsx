import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './download.module.css';
import Icon, { type IconName } from '../components/Icon';

const REPO = 'https://github.com/aayushpokhrel49/aayushii-code';
const LATEST = `${REPO}/releases/latest/download`;

type Download = {
  os: string;
  arch: string;
  href: string;
  icon: IconName;
  note?: string;
};

const Downloads: Download[] = [
  {
    os: 'macOS',
    arch: 'Apple Silicon',
    href: `${LATEST}/AayushiCode-aarch64.dmg`,
    icon: 'apple',
  },
  {
    os: 'macOS',
    arch: 'Intel',
    href: `${LATEST}/AayushiCode-x86_64.dmg`,
    icon: 'apple',
  },
  {
    os: 'Linux',
    arch: 'x86_64',
    href: `${LATEST}/aayushicode-linux-x86_64.tar.gz`,
    icon: 'linux',
  },
  {
    os: 'Linux',
    arch: 'aarch64',
    href: `${LATEST}/aayushicode-linux-aarch64.tar.gz`,
    icon: 'linux',
  },
  {
    os: 'Windows',
    arch: 'x86_64',
    href: `${LATEST}/AayushiCode-x86_64.exe`,
    icon: 'windows',
  },
];

export default function Download(): JSX.Element {
  return (
    <Layout
      title="Download"
      description="Download Aayushi Code for macOS, Linux, or Windows."
    >
      <main className="container" style={{ padding: '3rem 0 5rem' }}>
        <div className={styles.header}>
          <Heading as="h1">Download Aayushi Code</Heading>
          <p className={styles.subtitle}>
            Grab the latest stable release for your platform. All versions are
            also published on the{' '}
            <Link href={`${REPO}/releases`}>releases page</Link>.
          </p>
        </div>

        <ul className="downloads__grid">
          {Downloads.map((d) => (
            <li key={`${d.os}-${d.arch}`} className="download-card">
              <div className={styles.cardIcon}>
                <Icon name={d.icon} size={36} label={d.os} />
              </div>
              <p className="download-card__os">{d.os}</p>
              <p className="download-card__arch">{d.arch}</p>
              <Link className="button button--primary button--sm" href={d.href}>
                Download
              </Link>
              {d.note && <small className={styles.note}>{d.note}</small>}
            </li>
          ))}
        </ul>

        <div className={styles.packageSection}>
          <Heading as="h2">Package Manager Instructions</Heading>

          <div className={styles.packageCard}>
            <Heading as="h3">Arch Linux</Heading>
            <p>
              Arch and its derivatives can install the prebuilt{' '}
              <code>.pkg.tar.zst</code> from the{' '}
              <Link href={`${REPO}/releases`}>releases page</Link>:
            </p>
            <pre className={styles.codeBlock}>
              <code>sudo pacman -U ./aayushicode-&lt;version&gt;-1-&lt;arch&gt;.pkg.tar.zst</code>
            </pre>
          </div>

          <div className={styles.packageCard}>
            <Heading as="h3">Debian / Ubuntu</Heading>
            <p>
              A <code>.deb</code> is published to the{' '}
              <Link href={`${REPO}/releases`}>releases page</Link> for
              Debian/Ubuntu-based distributions:
            </p>
            <pre className={styles.codeBlock}>
              <code>sudo apt install ./aayushicode_*.deb</code>
            </pre>
          </div>
        </div>

        <div className={styles.notesSection}>
          <Heading as="h2">Installation Notes</Heading>
          <div className={styles.notesGrid}>
            <div className={styles.noteCard}>
              <strong>macOS:</strong> The app is not signed with an Apple
              Developer certificate yet, so you may need the one-time
              quarantine step described in{' '}
              <Link href="/docs/installation">Installation</Link>.
            </div>
            <div className={styles.noteCard}>
              <strong>Windows:</strong> SmartScreen may warn you because the
              installer is not code-signed. Click <em>More info</em>, then{' '}
              <em>Run anyway</em>.
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}