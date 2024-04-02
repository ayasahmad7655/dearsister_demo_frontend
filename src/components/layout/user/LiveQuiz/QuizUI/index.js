import React, { useState, useEffect } from "react";
import "./style.css";
import jsPDF from "jspdf"; // Correct import using a named import
import axios from "axios";

import { useParams, useNavigate } from "react-router-dom";

function App() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30); // Adjust timer duration here
  const [isFinished, setIsFinished] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const { index } = useParams();
  const statues = false;

  useEffect(() => {
    const fetchQuestions = async () => {
      // ... your fetchQuestions logic (unchanged)
      // console.log("PARAMS", index);
      const url = `https://dearsister-demo-backend.onrender.com/livequiz/${index}`;

      const fetchOptions = {
        method: "GET",
        credentials: "include", // Include cookies in the request
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await fetch(url, fetchOptions); // Await the response

      // Check for successful response (status code 200-299)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const responseData = await response.json(); // Parse JSON response data

      // console.log(responseData);
      const fetchedQuestions = responseData.questions;
      console.log("FETCHQUESTION", fetchedQuestions);
      setQuestions(
        fetchedQuestions.map((questionData) => ({
          question: questionData.question,
          options: questionData.options,
          answer: questionData.correctAnswer,
        }))
      );
    };

    // setQuestions(fetchedQuestions);

    fetchQuestions(); // Call fetchQuestions immediately
  }, []);
  useEffect(() => {
    // console.log("Questions (after update)", quest);
    const timer = setInterval(
      () => {
        if (timeLeft > 0 && !isFinished) {
          setTimeLeft(timeLeft - 1);
        } else if (timeLeft === 0 && !isFinished) {
          handleNextQuestion(true); // Move to next question if time runs out
        }

        if (isFinished) {
          const timeoutId = setTimeout(() => {
            // window.location.href = "/user"; // Redirect to /user after 30 seconds
          }, 30000);

          return () => clearTimeout(timeoutId); // Cleanup effect
        }
      },
      1000,
      [isFinished]
    );

    return () => clearInterval(timer);
  }, [timeLeft, isFinished]);

  const handleOptionClick = (index) => {
    setSelectedAnswer(index);
  };
  async function resultSubmission() {
    const cookies = document.cookie
      .split(";")
      .find((c) => c.startsWith("jwt="));
    const cookie = JSON.stringify(cookies);
    // console.log("suuuu", cookie);
    const url = "https://dearsister-demo-backend.onrender.com/sumbitanswer"; // Replace with your actual URL
    // console.log("Sumbition");
    // console.log("Corrext Answer", correctAnswers);
    // console.log("Total Questions", questions.length);
    const totallength = questions.length;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json", // Indicate JSON data
      },
      body: JSON.stringify({
        // Convert data to JSON string
        correctAnswers,
        totallength,
        index,
        cookie,
        // email,
      }),
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error(`Error submitting results: ${response.status}`);
    }

    // Handle successful submission (optional)
    // console.log("Results submitted successfully!");
  }

  const handleNextQuestion = (isTimeout = false) => {
    if (isTimeout || selectedAnswer !== null) {
      const isCorrect = selectedAnswer === questions[currentQuestion].answer;
      setCorrectAnswers(isCorrect ? correctAnswers + 1 : correctAnswers);
      setCurrentQuestion((prev) =>
        prev === questions.length - 1 ? prev : prev + 1
      );
      // Add question, answer, and chosen option to userAnswers
      const chosenOption = setUserAnswers((prevAnswers) => [
        ...prevAnswers,
        {
          question: questions[currentQuestion].question,
          answer: questions[currentQuestion].answer, // Add chosen option or null if not selected
          choosen: selectedAnswer,
        },
      ]);

      setSelectedAnswer(null);
      setTimeLeft(30); // Reset timer for next question
    }
    if (currentQuestion === questions.length - 1) {
      setIsFinished(true);
      resultSubmission();
    }
  };
  const saveResultsToPDF = async () => {
    const doc = new jsPDF(); // Correct constructor usage
    const font = "../../../../../Fonts/HindiText.ttf"; // Path to your font file
    const fontName = "HindiFont";
    const hindifont = "../../../../../Fonts/hindiFont.txt";
    // Fetch the Base64 encoded font data from the file
    fetch(hindifont)
      .then((response) => response.text())
      .then((fontBytes) => {
        // Use fontBytes with jsPDF
        const font = "path/to/hindiFont.ttf"; // Path to your font file
        const fontName = "HindiFont";

        doc.addFileToVFS(font, fontBytes); // Embed font using Base64 encoded data
        doc.addFont(fontName, "HindiFont", "normal");
        doc.setFont(fontName);
      })
      .catch((error) => console.error("Error fetching font data:", error));

    // console.log("font list", doc.getFontList());
    const title = "Quiz Results";
    const fontSize = 12;
    // console.log(doc);

    doc.text(title, doc.internal.pageSize.getWidth() / 2, 10, "center");

    let y = 15;
    // Add summary (optional)
    doc.text(
      `Total Questions:-  ${
        questions.length
      }  || Correct Answers:-  ${correctAnswers} || Incorrect Answers:-  ${
        questions.length - correctAnswers
      }`,
      fontSize,
      y + 5
    );

    y += 8;

    for (let i = 0; i < userAnswers.length; i++) {
      const answer = userAnswers[i];
      const question = questions[i]; // Get the original question object

      doc.text(`Question ${i + 1} )${question.question}`, fontSize, y + 5);
      y += 5; // Adjust spacing

      // Loop through options and highlight chosen one
      for (let j = 0; j < question.options.length; j++) {
        // y = 0;
        const stat = true;
        // if(answer.choosen==null)
        const isChosen = j === answer.choosen; // Check if this option was chosen
        const optionText = question.options[j];
        doc.text(
          ` ${j + 1})${optionText}`,
          // fontSize + (isChosen ? 6 : 0),
          fontSize,
          y + 5
        ); // Bold chosen option

        if (isChosen) {
          doc.text(
            ` Choosen Options:- ${answer.choosen + 1} `,
            fontSize,
            y + 12
          );
        }
        y += 5; // Adjust spacing
      }
      doc.text(`  Correct Options:- ${answer.answer + 1}`, fontSize, y + 12);
      // st
      y += 13; // Add spacing between questions
    }

    // Save the PDF
    doc.save("quiz_results.pdf"); // Replace 'quiz_results.pdf' with your desired filename
  };

  return (
    <div className="Quiz_UI">
      <h1 style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}></h1>
      {questions.length === 0 ? (
        // Display a loading indicator while fetching questions
        <div className="loading">Loading...</div>
      ) : isFinished ? (
        <div className="quiz-card">
          {/* <h2>
            You answered {correctAnswers} out of {questions.length} questions
            correctly.
          </h2>
          <button onClick={() => window.location.reload()}>Restart Quiz</button> */}
          <h2>Your Results:</h2>
          <ul>
            <li>Correct Answers: {correctAnswers}</li>
            <li>Incorrect Answers: {questions.length - correctAnswers}</li>
            <li>Total Attempts: {questions.length}</li>
          </ul>
          {/* {isFinished && resultSubmission()} */}

          <button
            onClick={() => {
              window.location.href = "/user";
            }}
          >
            Home
          </button>
          {isFinished && (
            <></>
            // <button onClick={saveResultsToPDF}>Download Results PDF</button>
          )}
        </div>
      ) : (
        <div className="quiz-card">
          <h2>
            Question {currentQuestion + 1} of {questions.length}
          </h2>
          <h3>{questions[currentQuestion].question}</h3>
          <ul>
            {questions[currentQuestion].options.map((option, index) => (
              <li key={index}>
                <input
                  type="radio"
                  id={`option-${index}`}
                  name="answer"
                  value={index}
                  checked={selectedAnswer === index}
                  onChange={() => handleOptionClick(index)}
                />
                <label htmlFor={`option-${index}`}>{option}</label>
              </li>
            ))}
          </ul>
          <button
            disabled={selectedAnswer === null}
            onClick={handleNextQuestion}
          >
            {timeLeft > 0
              ? `Next Question (Time Left: ${timeLeft}s)`
              : "Submit Answer"}
          </button>
          {/* <div className="timer">{timeLeft}s</div> */}
        </div>
      )}
      {}
    </div>
  );
}

export default App;
