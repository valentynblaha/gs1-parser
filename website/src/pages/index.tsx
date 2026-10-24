import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import CodeBlock from "@theme/CodeBlock";

import styles from "./index.module.css";

const example = `import { GS1Parser } from '@valentynb/gs1-parser';

const parser = new GS1Parser();
const result = parser.decode(']C101040123456789011715012910ABC123');

console.log(result.denormalized);
console.log(result.data);`;

const outputDenormalized = `(01)04012345678901(17)150129(10)ABC123`;
const outputData = `{
  "gtin": {
    "ai": "01",
    "dataTitle": "GTIN",
    "data": "04012345678901",
    "dataString": "04012345678901",
    "unit": "",
    "type": "string"
  },
  "expDate": {
    "ai": "17",
    "dataTitle": "USE BY OR EXPIRY",
    "data": "2015-01-28T23:00:00.000Z",
    "dataString": "150129",
    "unit": "",
    "type": "date"
  },
  "batch": {
    "ai": "10",
    "dataTitle": "BATCH/LOT",
    "data": "ABC123",
    "dataString": "ABC123",
    "unit": "",
    "type": "string"
  }
}`;

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
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
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <HomepageHeader />
      <main className="container margin-vert--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <h4>Installation</h4>
            <CodeBlock language="bash">npm install @valentynb/gs1-parser</CodeBlock>
            <h2>Example</h2>
            <h4>Usage</h4>
            <CodeBlock language="typescript">{example}</CodeBlock>
            <h4>Output</h4>
            <CodeBlock language="json">{outputDenormalized}</CodeBlock>
            <CodeBlock language="json">{outputData}</CodeBlock>
          </div>
        </div>
      </main>
    </Layout>
  );
}
