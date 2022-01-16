import React from "react";
import { AnswerObject } from "../App";
import {Wrapper, ButtonWrapper} from './QuestionCard.styles'

type Props = {
    question: string;
    answers: string[]; //array of strings
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined; // --> change it later to the array of answers
    questionNr: any;
    totalQuestions: number;
}

const QuestionCard:  React.FC<Props> = ({
    question, 
    answers, 
    callback, 
    userAnswer, 
    questionNr,
    totalQuestions
}) => {
    return(
        <Wrapper>
            <div>
                <p className="number"> Question: {questionNr}/{totalQuestions}</p>
                <p  dangerouslySetInnerHTML={{__html: question}} />
            </div>
            <div>
                {answers.map((answer) => (
                    <ButtonWrapper 
                        correct={userAnswer?.correctAnswer === answer} 
                        userClicked={userAnswer?.answer === answer}
                        key={answer}
                    >
                        <button disabled={!!userAnswer} value ={answer} onClick={callback} >
                        <span dangerouslySetInnerHTML={{__html: answer}} />
                        </button>
                    </ButtonWrapper >
                ))}
            </div>
        </Wrapper>

    )
}

export default QuestionCard;




// dangerouslySetInnerHTM --- to set HTML programmatically or from an extrenal source you would have to use it, instead og traditionally innerHTML. 