import React from "react";
import { useNavigate } from "react-router-dom";

function Question({ score, setScore, currentQuestionIndex, setCurrentQuestionIndex }) {
  const navigate = useNavigate();

  const questions = [
    { question: "What is 15 + 10?", options: [42, 23, 14, 25], correctAnswer: 25 },
    { question: "What is the largest Planet?", options: ["Mars", "Mercury", "Jupiter", "Saturn"], correctAnswer: "Jupiter" },
    { question: "Who won Ballond'Or 2024?", options: ["Erling Haaland", "Rodri Hernandez", "Vinicius Junior", "Kylian Mbappe"], correctAnswer: "Rodri Hernandez" },
    { question: "Which country has the largest population in Africa?", options: ["Nigeria", "Egypt", "China", "Ethiopia"], correctAnswer: "Nigeria" },
    { question: "Which language is different?", options: ["Tigrigna", "Arabic", "Amharic", "Oromiffa"], correctAnswer: "Arabic" }
  ];

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  const handleAnswer = (answer) => {
    if (answer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
    if (!isLastQuestion) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleSubmit = () => {
    navigate("/results");
  };

  return (
    <>
    <h1 className="welcome-message">Welcome to my Quiz App</h1>
    <h2 className="instruction">Instruction: Click on the Answer of your Choice</h2>
    <div className="question-container">
      
      <h2 className="question"><span className="question-number">{currentQuestionIndex+1}.</span>{currentQuestion.question}</h2>
      <ol className="options">
      {currentQuestion.options.map((option, index) => (
        <li>
          <p key={index} onClick={() => handleAnswer(option)}>
          {option}
        </p>
        </li>
      ))}
      </ol>
      {isLastQuestion && (
        <button className="submit-btn" onClick={handleSubmit} style={{ display: "block", marginTop: "20px" }}>
          Submit
        </button>
      )}
    </div>
    </>
  );
}

export default Question;
