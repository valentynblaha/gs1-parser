import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import CodeBlock from '@theme/CodeBlock';

import styles from './index.module.css';

const example = `import { GS1Parser } from '@valentynb/gs1-parser';

const parser = new GS1Parser();
const result = parser.decode(']C101040123456789011715012910ABC123');

console.log(result.denormalized);
console.log(result.data);`;

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/intro">
            Get Started
          </Link>
          <Link className="button button--outline button--secondary button--lg" to="/api">
            API Reference
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <HomepageHeader />
      <main className="container margin-vert--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <CodeBlock language="bash">npm install @valentynb/gs1-parser</CodeBlock>
            <CodeBlock language="typescript">{example}</CodeBlock>
          </div>
        </div>
      </main>
    </Layout>
  );
}
