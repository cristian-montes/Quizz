import React, { useState } from 'react';
import QuestionCard from './components/QuestionCard';
import {QuestionState ,Difficulty, fetchQuizQuestions } from './utils/API';

const TOTA_QUESTIONS = 10;

type AnswerObject = {
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
    
  }

  const nextQuestion = () => {
    
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
