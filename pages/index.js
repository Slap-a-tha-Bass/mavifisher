import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useReducer } from "react";

export default function Home() {
  const [on, toggle] = useReducer((s) => !s, false);

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
        <p>Copyright © 2022</p>
      </footer>
    </div>
  );
}
