import styles from "../styles/Home.module.css";
import { useReducer } from "react";

export default function MathComponent() {
  const [on, toggle] = useReducer((s) => !s, false);

  const handleStart = () => {
    toggle(!on);
    console.log(on);
  };
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {!on && (
          <div>
            <h1 className={styles.title}>Mavi&apos;s Math!</h1>
            <button onClick={handleStart}>Get Started!</button>
          </div>
        )}
      </main>
    </div>
  );
}
