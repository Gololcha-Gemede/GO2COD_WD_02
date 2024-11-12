import React, { useState } from "react";
import Question from "./Question";
import Results from "./Results";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const restartQuiz = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Question
              score={score}
              setScore={setScore}
              currentQuestionIndex={currentQuestionIndex}
              setCurrentQuestionIndex={setCurrentQuestionIndex}
            />
          }
        />
        <Route
          path="/results"
          element={<Results score={score} totalQuestions={5} onRestart={restartQuiz} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
