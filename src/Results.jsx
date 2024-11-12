import React from "react";
import { useNavigate } from "react-router-dom";

function Results({ score, totalQuestions, onRestart }) {
  const navigate = useNavigate();

  const handleRestart = () => {
    onRestart();
    navigate("/");
  };

  return (
    <div className="result-container">
      <h2 className="score">Your Score: {score} / {totalQuestions}</h2>
      <p className="acknowledgement">Thanks for taking the quiz!</p>
      <button className="restart-btn" onClick={handleRestart}>Restart The Quiz</button>
    </div>
  );
}

export default Results;
