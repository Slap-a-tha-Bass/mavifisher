import Link from "next/link";
import styles from "../../styles/Home.module.css";

export default function Homework() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div  className={styles.assignments}>
          <h1>Current Assignment</h1>
          <ul className={styles.homework}>
            <li>
              <Link href="/homework/homework-1">Homework 1</Link>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
