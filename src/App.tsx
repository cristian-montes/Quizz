import React, { useState } from 'react';
import QuestionCard from './components/QuestionCard';
import {QuestionState ,Difficulty, fetchQuizQuestions } from './utils/API';

const TOTA_QUESTIONS = 10;

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

function App() {
const [loading, setLoading] = useState(false);
const [ questions, setQuestions] = useState<QuestionState[]>([]);
const [ number, setNumber] = useState(0);
const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([])
const [score, setScore] = useState(0);
const [gameOver, setGameOver] = useState(true);


console.log(questions)
  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(TOTA_QUESTIONS, Difficulty.EASY);
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);

    setLoading(false);


  }



  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if(!gameOver){
      //user answer
      const answer =  e.currentTarget.value;
      //checl answer against correct answer
      const correct = questions[number].correct_answer === answer;
      //add score if answer is correct
      if(correct) setScore(prev => prev + 1);
      //save answer in the array for user answers
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      }
      setUserAnswers((prev) => [...prev, answerObject])
    }
  }

  const nextQuestion = () => {
    // Move on to the next question if not the last question
    const nextQuestion = number + 1;

    if(nextQuestion === TOTA_QUESTIONS){
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }

  }

  return (
    <div className='Ap'>
      <h1> REACT QUIZ</h1>
      { gameOver || userAnswers.length === TOTA_QUESTIONS 
        ? 
      ( <button className='start' onClick={startTrivia}> Start</button>)
        : 
        null
      }
      {!gameOver ? <p className='score'>Score:</p> : null}
      {loading && <p>Loading Questions ...</p>}
      {!loading && !gameOver && (
        <QuestionCard  
          questionNr={number + 1}
          totalQuestions={TOTA_QUESTIONS}
          question = {questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          callback={checkAnswer}
        /> 
      )}
      {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTA_QUESTIONS - 1 ?
      (<button className='next' onClick={nextQuestion}> Next Question </button>) : null}
    </div>
  );
}

export default App;
