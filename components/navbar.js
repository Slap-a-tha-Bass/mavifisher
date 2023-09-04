import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <nav className={styles.nav1}>
        <div>
          <Link href="/">
            <a>Home</a>
          </Link>
        </div>
      </nav>
      <nav className={styles.nav2}>
        <div>
          <Link href="/mathpage">
            <a>Math</a>
          </Link>
        </div>
      </nav>
      <nav className={styles.nav3}>
        <div>
          <Link href="/homework">
            <a>Homework</a>
          </Link>
        </div>
      </nav>
    </div>
  );
}
