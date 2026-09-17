import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Icon, { type IconName } from '../Icon';

type FeatureItem = {
  title: string;
  icon: IconName;
  description: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Native and fast',
    icon: 'zap',
    description:
      'Written in Rust and rendered on the GPU. No Electron, no webviews — it opens instantly and stays responsive on very large codebases.',
  },
  {
    title: 'Familiar by design',
    icon: 'compass',
    description:
      'The UI and default keybindings are tuned so you feel at home right away, without relearning your editor.',
  },
  {
    title: 'Zero account, zero telemetry',
    icon: 'lock',
    description:
      'Nothing to sign in to and nothing phoning home. Aayushi Code never sends your data anywhere.',
  },
  {
    title: 'Multi-language support',
    icon: 'globe',
    description:
      'Built-in grammars, tree-sitter syntax trees, and language servers via LSP for the languages you work in.',
  },
  {
    title: 'Integrated tools',
    icon: 'toolbox',
    description:
      'Terminal, task runner, debugging with DAP, and a file explorer are built in — no plugin spasms required.',
  },
  {
    title: 'Extensible',
    icon: 'puzzle',
    description:
      'Extend the editor with language and theme extensions that slot straight into your workflow.',
  },
];

function Feature({ title, icon, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <div className="feature-icon">
          <Icon name={icon} size={24} label={title} />
        </div>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}