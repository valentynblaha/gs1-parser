import { useRef, useState, type FormEvent, type ReactNode } from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import { GS1Parser, type DecodeResult } from "@valentynb/gs1-parser";

import styles from "./demo.module.css";

const GS = String.fromCodePoint(29);

const parser = new GS1Parser({
  lotMaxLength: 20,
});

type Output = { result: DecodeResult } | { error: string };

export default function Demo(): ReactNode {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState<Output | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  function insertGs() {
    const field = inputRef.current;
    const cursorPos = field?.selectionStart ?? input.length;
    setInput(input.slice(0, cursorPos) + GS + input.slice(cursorPos));
    requestAnimationFrame(() => {
      field?.focus();
      field?.setSelectionRange(cursorPos + 1, cursorPos + 1);
    });
  }

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    const gs1Input = input.trim();

    if (!gs1Input) {
      setOutput({ error: "Please enter a GS1 code" });
      return;
    }

    try {
      const result = parser.decode(gs1Input);
      setOutput({ result });
      console.log("Decoded GS1 Data:", result);
    } catch (error) {
      setOutput({ error: (error as Error).message || "Failed to parse GS1 code" });
      console.error("Error decoding GS1 code:", error);
    }
  }

  const entries = output && "result" in output ? Object.entries(output.result.data) : null;

  return (
    <Layout title="Demo" description="Parse and decode GS1 barcode data in your browser">
      <main className={clsx("container", styles.container)}>
        <section className={styles.card}>
          <Heading as="h1">GS1 Code Parser</Heading>
          <p className={styles.subtitle}>Parse and decode GS1 barcode data with ease</p>

          <form onSubmit={handleSubmit}>
            <label className={styles.label} htmlFor="gs1-input">
              Enter GS1 Code
            </label>
            <div className={styles.inputWrapper}>
              <input
                ref={inputRef}
                id="gs1-input"
                type="text"
                className={styles.input}
                placeholder="Paste or type your GS1 code here..."
                autoComplete="off"
                value={input}
                onChange={e => setInput(e.target.value)}
              />
              <button
                type="button"
                className="button button--secondary"
                title="Insert GS character (ASCII 29)"
                onClick={insertGs}
              >
                Insert GS
              </button>
            </div>

            <button type="submit" className="button button--primary button--lg button--block">
              Parse Code
            </button>
          </form>

          {output && (
            <div className={clsx(styles.output, "error" in output && styles.error)}>
              <div className={styles.outputLabel}>Denormalized Output</div>
              <div className={styles.outputContent}>
                {"error" in output ? `Error: ${output.error}` : output.result.denormalized}
              </div>
            </div>
          )}
        </section>

        {entries && (
          <section className={styles.card}>
            <Heading as="h2">Parsed Data</Heading>
            <div className={styles.tableWrapper}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Key</th>
                    <th>AI</th>
                    <th>Title</th>
                    <th>Data</th>
                  </tr>
                </thead>
                <tbody>
                  {entries.length > 0 ? (
                    entries.map(([key, value]) => (
                      <tr key={key}>
                        <td>
                          <strong>{key}</strong>
                        </td>
                        <td>{value.ai}</td>
                        <td>{value.dataTitle}</td>
                        <td>{String(value.data)}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={4} className={styles.emptyState}>
                        No data fields found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
