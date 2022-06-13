import styles from "../styles/Home.module.css";
import { useReducer, useState } from "react";
import Swal from "sweetalert2";

export default function MathPage() {
  const [additionOn, toggle] = useReducer((s) => !s, false);
  const [off, toggleButton] = useReducer((s) => !s, false);
  const [answer, setAnswer] = useState("");
  const [addnum1State, setAddnum1State] = useState("");
  const [addnum2State, setAddnum2State] = useState("");
  const [addAnswerState, setAddAnswerState] = useState("");
  const [subtractionOn, toggleSubtraction] = useReducer((s) => !s, false);
  const [subnum1State, setSubnum1State] = useState("");
  const [subnum2State, setSubnum2State] = useState("");
  const [subAnswerState, setSubAnswerState] = useState("");
  const [multiplicationOn, toggleMultiplication] = useReducer((s) => !s, false);
  const [multnum1State, setMultnum1State] = useState("");
  const [multnum2State, setMultnum2State] = useState("");
  const [multAnswerState, setMultAnswerState] = useState("");
  const [divisionOn, toggleDivision] = useReducer((s) => !s, false);
  const [divnum1State, setDivnum1State] = useState("");
  const [divnum2State, setDivnum2State] = useState("");
  const [divAnswerState, setDivAnswerState] = useState("");

  //* FUNCTIONS FOR GENERATING THE MATH PROBLEMS

  const generateAdditionProblem = () => {
    setAddnum1State(Math.floor(Math.random() * 100));
    setAddnum2State(Math.floor(Math.random() * 100));
  };

  const generateSubtractionProblem = () => {
    setSubnum1State(Math.floor(Math.random() * 100));
    setSubnum2State(Math.floor(Math.random() * 100));
  };
  const generateMultiplicationProblem = () => {
    setMultnum1State(Math.floor(Math.random() * 10));
    setMultnum2State(Math.floor(Math.random() * 10));
  };

  const generateDivisionProblem = () => {
    setDivnum1State(Math.floor(Math.random() * 100));
    setDivnum2State(Math.floor(Math.random() * 100));
  };
  //* FUNCTIONS FOR GENERATING THE MATH PROBLEMS

  //* FUNCTIONS FOR ANSWERING THE MATH PROBLEMS
  const addState = () => {
    setAddAnswerState(addnum1State + addnum2State);
  };
  const subState = () => {
    if (subnum1State > subnum2State) {
      setSubAnswerState(subnum1State - subnum2State);
    } else {
      setSubAnswerState(subnum2State - subnum1State);
    }
  };
  const multState = () => {
    setMultAnswerState(multnum1State * multnum2State);
  };
  const divState = () => {
    setDivAnswerState(divnum1State / divnum2State);
  };
  //* FUNCTIONS FOR ANSWERING THE MATH PROBLEMS

  //* FUNCTIONS FOR CHECKING THE MATH PROBLEMS
  const checkAddAnswer = (e) => {
    e.preventDefault();
    if (addAnswerState === answer) {
      Swal.fire({
        title: "You rock!",
        icon: "success",
        showCloseButton: false,
        showConfirmButton: false,
        timer: 1500,
        background: "#9000f7",
        color: "#fff",
      });
      toggleButton(!off);
    } else {
      Swal.fire({
        title: "Oof, so close!",
        icon: "error",
        showCloseButton: false,
        showConfirmButton: false,
        timer: 1500,
        background: "#9000f7",
        color: "#fff",
      });
    }
  };
  const checkSubAnswer = (e) => {
    e.preventDefault();
    if (subAnswerState === answer) {
      Swal.fire({
        title: "You rock!",
        icon: "success",
        showCloseButton: false,
        showConfirmButton: false,
        timer: 1500,
        background: "#9000f7",
        color: "#fff",
      });
      toggleButton(!off);
    } else {
      Swal.fire({
        title: "Oof, so close!",
        icon: "error",
        showCloseButton: false,
        showConfirmButton: false,
        timer: 1500,
        background: "#9000f7",
        color: "#fff",
      });
    }
  };
  const checkMultAnswer = (e) => {
    e.preventDefault();
    if (multAnswerState === answer) {
      Swal.fire({
        title: "You rock!",
        icon: "success",
        showCloseButton: false,
        showConfirmButton: false,
        timer: 1500,
        background: "#9000f7",
        color: "#fff",
      });
      toggleButton(!off);
    } else {
      Swal.fire({
        title: "Oof, so close!",
        icon: "error",
        showCloseButton: false,
        showConfirmButton: false,
        timer: 1500,
        background: "#9000f7",
        color: "#fff",
      });
    }
  };
  const checkDivAnswer = (e) => {
    e.preventDefault();
    if (divAnswerState === answer) {
      Swal.fire({
        title: "You rock!",
        icon: "success",
        showCloseButton: false,
        showConfirmButton: false,
        timer: 1500,
        background: "#9000f7",
        color: "#fff",
      });
      toggleButton(!off);
    } else {
      Swal.fire({
        title: "Oof, so close!",
        icon: "error",
        showCloseButton: false,
        showConfirmButton: false,
        timer: 1500,
        background: "#9000f7",
        color: "#fff",
      });
    }
  };
  //* FUNCTIONS FOR CHECKING THE MATH PROBLEMS

  //* FUNCTIONS FOR TOGGLING THE MATH PROBLEMS
  const handleAdditionPage = () => {
    toggle(!additionOn);
    generateAdditionProblem();
  };
  const handleSubtractionPage = () => {
    toggleSubtraction(!subtractionOn);
    generateSubtractionProblem();
  };
  const handleMultiplicationPage = () => {
    toggleMultiplication(!multiplicationOn);
    generateMultiplicationProblem();
  };
  const handleDivisionPage = () => {
    toggleDivision(!divisionOn);
    generateDivisionProblem();
  };
  //* FUNCTIONS FOR TOGGLING THE MATH PROBLEMS

  //* FUNCTIONS FOR CLEARING THE MATH PROBLEMS
  const clearAddFields = (e) => {
    e.preventDefault();
    generateAdditionProblem();
    setAnswer("");
    toggleButton(!off);
  };
  const clearSubFields = (e) => {
    e.preventDefault();
    generateSubtractionProblem();
    setAnswer("");
    toggleButton(!off);
  };
  const clearMultFields = (e) => {
    e.preventDefault();
    generateMultiplicationProblem();
    setAnswer("");
    toggleButton(!off);
  };
  const clearDivFields = (e) => {
    e.preventDefault();
    generateDivisionProblem();
    setAnswer("");
    toggleButton(!off);
  };
  //* FUNCTIONS FOR CLEARING THE MATH PROBLEMS

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {!additionOn && !subtractionOn && !multiplicationOn && !divisionOn && (
          <div>
            <h1 className={styles.title}>Mavi&apos;s Math!</h1>
            <button onClick={handleAdditionPage}>Addition!</button>
            <button onClick={handleSubtractionPage}>Subtraction!</button>
            <button onClick={handleMultiplicationPage}>Multiplication!</button>
            <button onClick={handleDivisionPage}>Division!</button>
          </div>
        )}
        {additionOn && (
          <div className={styles.grid}>
            <form>
              <div className={styles.card}>
                <div className={styles.mathBox}>
                  <h1>{addnum1State}</h1>
                  <h1>+{addnum2State}</h1>
                </div>
                <input
                  className={styles.input}
                  value={answer}
                  onChange={(e) => {
                    setAnswer(Number(e.target.value));
                    addState();
                  }}
                  type="number"
                />
              </div>
              {!off && <button onClick={checkAddAnswer}>Submit</button>}
              {off && <button onClick={clearAddFields}>Next &rarr;</button>}
            </form>
          </div>
        )}
        {subtractionOn && (
          <div className={styles.grid}>
            <form>
              <div className={styles.card}>
                {subnum1State > subnum2State ? (
                  <div className={styles.mathBox}>
                    <h1>{subnum1State}</h1>
                    <h1>-{subnum2State}</h1>
                  </div>
                ) : (
                  <div className={styles.mathBox}>
                    <h1>{subnum2State}</h1>
                    <h1>-{subnum1State}</h1>
                  </div>
                )}
                <input
                  className={styles.input}
                  value={answer}
                  onChange={(e) => {
                    setAnswer(Number(e.target.value));
                    subState();
                  }}
                  type="number"
                />
              </div>
              {!off && <button onClick={checkSubAnswer}>Submit</button>}
              {off && <button onClick={clearSubFields}>Next &rarr;</button>}
            </form>
          </div>
        )}
        {multiplicationOn && (
          <div className={styles.grid}>
            <form>
              <div className={styles.card}>
                <div className={styles.mathBox}>
                  <h1>{multnum1State}</h1>
                  <h1>x{multnum2State}</h1>
                </div>
                <input
                  className={styles.input}
                  value={answer}
                  onChange={(e) => {
                    setAnswer(Number(e.target.value));
                    multState();
                  }}
                  type="number"
                />
              </div>
              {!off && <button onClick={checkMultAnswer}>Submit</button>}
              {off && <button onClick={clearMultFields}>Next &rarr;</button>}
            </form>
          </div>
        )}
        {divisionOn && (
          <div className={styles.grid}>
            <form>
              <div className={styles.card}>
                <div className={styles.mathBox}>
                  <h1>{divnum1State}</h1>
                  <h1>/{divnum2State}</h1>
                </div>
                <input
                  className={styles.input}
                  value={answer}
                  onChange={(e) => {
                    setAnswer(Number(e.target.value));
                    divState();
                  }}
                  type="number"
                />
              </div>
              {!off && <button onClick={checkDivAnswer}>Submit</button>}
              {off && <button onClick={clearDivFields}>Next &rarr;</button>}
            </form>
          </div>
        )}
      </main>
    </div>
  );
}
