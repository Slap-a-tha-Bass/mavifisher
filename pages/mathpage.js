import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

export default function MathPage() {
  const [state, setState] = useState({
    operator: null,
    num1: null,
    num2: null,
    userAnswer: "",
    isAnswered: false,
    correctAnswer: null, // Added correct answer to state
    score: 0, // Added score to state
    currentQuestion: 1, // Added current question to state
  });

  const generateProblem = (operation) => {
    let n1 = Math.floor(Math.random() * 100);
    let n2 = Math.floor(Math.random() * 100);

    if (operation === "division") {
      n2 = Math.floor(Math.random() * 12) + 1; // Ensures n2 is between 1 and 12, inclusive
      n1 = n2 * (Math.floor(Math.random() * 12) + 1); // Ensures result is a whole number, and the multiplier is between 1 and 12
    } else {
      n1 = Math.floor(Math.random() * 100);
      n2 = Math.floor(Math.random() * 100);
    }
    if (operation === "subtraction" && n1 < n2) {
      [n1, n2] = [n2, n1];
    }
    // if operation is multiplication, ensure n1 and n2 are not greater than 12
    if (operation === "multiplication") {
      n1 = Math.floor(Math.random() * 12);
      n2 = Math.floor(Math.random() * 12);
    }
    setState((state) => ({
      ...state,
      num1: n1,
      num2: n2,
      operator: operation,
    }));
  };

  const calculateAnswer = () => {
    let calculatedAnswer;
    setState((prevState) => {
      switch (prevState.operator) {
        case "addition":
          calculatedAnswer = prevState.num1 + prevState.num2;
          break;
        case "subtraction":
          calculatedAnswer = prevState.num1 - prevState.num2;
          break;
        case "multiplication":
          calculatedAnswer = prevState.num1 * prevState.num2;
          break;
        case "division":
          calculatedAnswer = prevState.num1 / prevState.num2;
          break;
        default:
          break;
      }
      return { ...prevState, correctAnswer: calculatedAnswer };
    });
  };

  const checkAnswer = (e) => {
    e.preventDefault();
    if (parseInt(state.userAnswer, 10) === state.correctAnswer) {
      showAlert("You rock!", "success");
      setState({
        ...state,
        score: state.score + 10, // each question is worth 10 points
        isAnswered: true,
        currentQuestion: state.currentQuestion + 1,
      });
    } else {
      showAlert("Oof, so close!", "error");
      setState({
        ...state,
        isAnswered: true,
        currentQuestion: state.currentQuestion + 1,
      });
    }
    clearFields(e);
  };

  const showAlert = (title, icon) => {
    Swal.fire({
      title,
      icon,
      showCloseButton: false,
      showConfirmButton: false,
      timer: 1000,
      background: "#9000f7",
      color: "#fff",
    });
  };

  const handleOperation = (operation) => {
    console.log("Handling operation: ", operation);
    setState((prevState) => {
      console.log("Previous state:", prevState);
      return { ...prevState, operator: operation };
    });
    generateProblem(operation);
    calculateAnswer();
  };

  const clearFields = (e) => {
    e.preventDefault();
    setState((prevState) => ({
      ...prevState,
      userAnswer: "",
      isAnswered: false,
    }));
    generateProblem(state.operator);
    calculateAnswer();
  };
  const resetGame = () => {
    setState({
      operator: null,
      num1: null,
      num2: null,
      userAnswer: "",
      isAnswered: false,
      currentQuestion: 1,
      score: 0,
    });
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {!state.operator && (
          <div>
            <h1 className={styles.title}>Mavi&apos;s Math!</h1>
            <button onClick={() => handleOperation("addition")}>
              Addition!
            </button>
            <button onClick={() => handleOperation("subtraction")}>
              Subtraction!
            </button>
            <button onClick={() => handleOperation("multiplication")}>
              Multiplication!
            </button>
            <button onClick={() => handleOperation("division")}>
              Division!
            </button>
          </div>
        )}
        {state.currentQuestion <= 10 ? (
          <div className={styles.grid}>
            {state.operator && (
              <form>
                <div className={styles.card}>
                  <div className={styles.mathBox}>
                    <h1>{state.num1}</h1>
                    <h1>
                      <span>
                        {" "}
                        {state.operator === "addition"
                          ? "+"
                          : state.operator === "subtraction"
                          ? "-"
                          : state.operator === "multiplication"
                          ? "×"
                          : "/"}
                      </span>
                      {state.num2}
                    </h1>
                  </div>
                  <input
                    className={styles.input}
                    value={state.userAnswer}
                    onChange={(e) =>
                      setState({ ...state, userAnswer: e.target.value })
                    }
                    type="number"
                    autoFocus
                  />
                </div>
                {!state.isAnswered && (
                  <button onClick={(e) => checkAnswer(e)}>Submit</button>
                )}
              </form>
            )}
            <p className={styles.textCenter}>Score: {state.score}</p>
          </div>
        ) : (
          <div className={styles.grid}>
            {state.currentQuestion > 10 && (
              <div>
                <h1>
                  {state.score > 80
                    ? "Great Job!"
                    : "You can do better next time!"}
                </h1>
                <p>Score: {state.score}</p>
                <button onClick={resetGame}>Play Again</button>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
