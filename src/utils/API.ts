export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard",
}

export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty) =>{
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty${difficulty}&type=multiple`;
    const data = await (await fetch(endpoint)).json();
    console.log('ara', data)
}


// enums or Enumerations are a new data type supported in TypeScript. It is used to define the set of named constants... a collection of related values. enums make it easy to change values in the future, dot not allocate memory.