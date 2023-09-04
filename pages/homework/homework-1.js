import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import styles from "../../styles/Home.module.css";

export default function Homework_1() {
  const homeworkQuestions = [
    { num1: 39, num2: 28, operator: "subtraction" },
    { num1: 71, num2: 64, operator: "subtraction" },
    { num1: 19, num2: 8, operator: "subtraction" },
    { num1: 47, num2: 29, operator: "subtraction" },
    { num1: 96, num2: 28, operator: "subtraction" },
    { num1: 58, num2: 29, operator: "subtraction" },
    { num1: 85, num2: 32, operator: "subtraction" },
    { num1: 91, num2: 19, operator: "subtraction" },
    { num1: 57, num2: 14, operator: "subtraction" },
    { num1: 54, num2: 17, operator: "subtraction" },
    { num1: 47, num2: 23, operator: "subtraction" },
    { num1: 55, num2: 34, operator: "subtraction" },
    { num1: 50, num2: 29, operator: "subtraction" },
    { num1: 42, num2: 27, operator: "subtraction" },
    { num1: 3, num2: 4, operator: "subtraction" },
  ];

  const [state, setState] = useState({
    userAnswer: "",
    isAnswered: false,
    correctAnswer: null,
    currentHomeworkIndex: 0,
    currentHomeworkQuestion: homeworkQuestions[0],
    score: 0,
    isQuizFinished: false,
  });

  const checkAnswer = (e) => {
    e.preventDefault();
    const { num1, num2, operator } = state.currentHomeworkQuestion;

    // Dynamically calculate the correct answer based on the operator
    let correctAnswer;
    switch (operator) {
      case "addition":
        correctAnswer = num1 + num2;
        break;
      case "subtraction":
        correctAnswer = num1 - num2;
        break;
      case "multiplication":
        correctAnswer = num1 * num2;
        break;
      case "division":
        correctAnswer = num1 / num2;
        break;
      default:
        break;
    }

    const scoreIncrement = 100 / homeworkQuestions.length; // Calculate the score increment based on the total number of questions
    const newScore = Math.round(state.score + scoreIncrement); // Add the calculated increment to the existing score and round it

    if (parseInt(state.userAnswer) === correctAnswer) {
      showAlert("You rock!", "success");
      setState({
        ...state,
        score: newScore, // Set the new rounded score
        isAnswered: true,
      });
    } else {
      showAlert("Oof, so close!", "error");
      setState({
        ...state,
        isAnswered: true,
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
  const clearFields = (e) => {
    e.preventDefault();
    const nextIndex = state.currentHomeworkIndex + 1;

    if (nextIndex < homeworkQuestions.length) {
      setState((prevState) => ({
        ...prevState,
        currentHomeworkIndex: nextIndex,
        currentHomeworkQuestion: homeworkQuestions[nextIndex],
        isAnswered: false,
        userAnswer: "",
      }));
    } else {
      setState((prevState) => ({
        ...prevState,
        isQuizFinished: true,
      }));
    }
  };
  const resetGame = () => {
    setState({
      ...state,
      currentHomeworkIndex: 0,
      currentHomeworkQuestion: homeworkQuestions[0],
      isAnswered: false,
      userAnswer: "",
      score: 0,
    });
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {!state.isQuizFinished ? (
          <div className={styles.grid}>
            <form>
              <p>#{state.currentHomeworkIndex + 1}</p>
              <div className={styles.card}>
                <div className={styles.mathBox}>
                  <h1>{state.currentHomeworkQuestion.num1}</h1>
                  <h1>
                    <span>
                      {state.currentHomeworkQuestion.operator === "addition"
                        ? "+"
                        : state.currentHomeworkQuestion.operator ===
                          "subtraction"
                        ? "-"
                        : state.currentHomeworkQuestion.operator ===
                          "multiplication"
                        ? "x"
                        : "/"}
                    </span>
                    {state.currentHomeworkQuestion.num2}
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
              <button className={styles.button} onClick={checkAnswer}>
                Submit
              </button>
            <p>Score: {state.score}</p>
            </form>
          </div>
        ) : (
          <div className={styles.grid}>
            {state.isQuizFinished && (
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
