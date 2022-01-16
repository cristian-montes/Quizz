import React from "react";

type Props = {
    question: string;
    answers: string[]; //array of strings
    callback: any;
    userAnswer: any; // --> change it later to the array of answers
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
        <>
            <div>
                <p className="number"> Question: {questionNr}/{totalQuestions}</p>
                <p  dangerouslySetInnerHTML={{__html: question}} />
            </div>
            <div>
                {answers.map((answer) => (
                    <div key={answer}>
                        <button disabled={userAnswer} value ={answer} onClick={callback} >
                        <span dangerouslySetInnerHTML={{__html: answer}} />
                        </button>
                    </div>
                ))}
            </div>
        </>

    )
}

export default QuestionCard;




// dangerouslySetInnerHTM --- to set HTML programmatically or from an extrenal source you would have to use it, instead og traditionally innerHTML. 