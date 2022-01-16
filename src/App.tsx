import React, { useState } from 'react';
import QuestionCard from './components/QuestionCard';
import {QuestionState ,Difficulty, fetchQuizQuestions } from './utils/API';

const TOTA_QUESTIONS = 10;

type AswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

function App() {
const [loading, setLoading] = useState(false);
const [ questions, setQuestions] = useState<QuestionState[]>([]);
const [ number, setNumber] = useState(0);
const [userAnswers, setUserAnswers] = useState([])
const [score, setScore] = useState(0);
const [gameOver, setGameOver] = useState(true);


 console.log(fetchQuizQuestions(TOTA_QUESTIONS, Difficulty.EASY))

  const startTrivia = async () => {
    
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {
    
  }

  return (
    <div className='Ap'>
      <h1> REACT QUIZ</h1>
      <button className='start' onClick={startTrivia}> Start</button>
      <p className='score'>Score:</p>
      {/* <QuestionCard 
        questionNr={number + 1}
        totalQuestions={TOTA_QUESTIONS}
        question = {questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}

      /> */}
      <button className='next' onClick={nextQuestion}> Next Question </button>
    </div>
  );
}

export default App;
