import React, { useState } from "react";
import styles from "../CSS Modules/UnansweredQues.module.css";
import { db } from "../firebase";

function UnansweredQues(props) {
  const [answer, setAnswer] = useState("");
  const user = localStorage.getItem("loggedInUser");
  let ques = props.question.question;
  let random = Math.floor(Math.random() * 1000);
  async function handleAnswer() {
    try {
      await db.collection("questions").add({
        ques,
        answer,
        answered: true,
        user,
        id: random,
        likes: 0,
      });
      setAnswer("");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className={styles.parent}>
      <h1>{ques}</h1>
      <textarea value={answer} onChange={(e) => setAnswer(e.target.value)} />
      <button onClick={handleAnswer}>Answer</button>
    </div>
  );
}

export default UnansweredQues;
