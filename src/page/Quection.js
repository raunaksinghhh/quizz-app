import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Quection() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  // Fetch questions on component mount
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const result = await axios.get(
          "https://dummyapicsi.onrender.com/api/questions"
        );
        setQuestions(result.data);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchQuestions();
  }, []); // Empty dependency array to run the effect only once

  // Handlers for navigation
  const NextPressed = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null); // Clear the selected option for the next question
    }
  };

  const PreviousPressed = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedOption(null); // Clear the selected option for the previous question
    }
  };

  // Handler for option selection
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // Display content for the current question
  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="quection">
      <h1>Quiz App</h1>
      {questions.length > 0 ? (
        <>
          <h2>{currentQuestion?.question || "Question not found"}</h2>
          <div>
            {currentQuestion?.options?.map((option, index) => (
              <div key={index}>
                <label>
                  <input
                    type="radio"
                    name="option"
                    value={option}
                    checked={selectedOption === option}
                    onChange={handleOptionChange}
                  />
                  {option}
                </label>
              </div>
            ))}
          </div>
          <button onClick={PreviousPressed} disabled={currentQuestionIndex === 0}>
            Previous
          </button>
          <button
            onClick={NextPressed}
            disabled={currentQuestionIndex === questions.length - 1}
          >
            Next
          </button>
        </>
      ) : (
        <p>Loading questions...</p>
      )}
    </div>
  );
}

export default Quection;