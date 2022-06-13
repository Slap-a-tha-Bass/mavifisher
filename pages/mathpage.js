import styles from "../styles/Home.module.css";
import { useReducer } from "react";

export default function MathPage() {
  const [on, toggle] = useReducer((s) => !s, false);

  //   create a function that generates a random math addition problem
  const generateAdditionProblem = () => {
    const addnum1 = Math.floor(Math.random() * 100);
    const addnum2 = Math.floor(Math.random() * 100);
    const addanswer = addnum1 + addnum2;
    return { addnum1, addnum2, addanswer };
  };
  const { addnum1, addnum2, addanswer } = generateAdditionProblem();
  console.log(addnum1, addnum2, addanswer);
  //   create a function that generates a random math subtraction problem
//   const generateSubtractionProblem = () => {
//     const num1 = Math.floor(Math.random() * 100);
//     const num2 = Math.floor(Math.random() * 100);
//     const answer = num1 - num2;
//     return { subtractnum1, subtractnum2, subtractanswer };
//   };
//   const { subtractnum1, subtractnum2, subtractanswer } =
//     generateSubtractionProblem();

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
