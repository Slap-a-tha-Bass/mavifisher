import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/mathpage">
        <a>Math</a>
      </Link>
    </nav>
  );
}
