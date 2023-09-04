import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mavi Fisher</title>
        <meta name="description" content="Welcome to Mavi Fisher" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Mavi&apos;s Site!
        </h1>
      </main>

      <footer className={styles.footer}>
        <p>Copyright © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
