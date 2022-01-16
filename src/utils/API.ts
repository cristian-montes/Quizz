import { shuffelArray } from "./utils";

export type Question ={
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
}

export type QuestionState = Question & { answers: string[]} // this a unique custom type to put the two correct and incorrect answers

export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard",
}

export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty) =>{
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty${difficulty}&type=multiple`;
    const data = await (await fetch(endpoint)).json();
    return data.results.map((question: Question)=>(
        {
            ...question,
            answers: shuffelArray([...question.incorrect_answers, question.correct_answer])
        }
    ))
}


// enums or Enumerations are a new data type supported in TypeScript. It is used to define the set of named constants... a collection of related values. enums make it easy to change values in the future, dot not allocate memory.