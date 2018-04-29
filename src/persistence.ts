import { Answer } from './actions/answers';
import { deflate, inflate } from './external/pako';
import { IAnswersState } from './reducers/answers';

export function encode(input: IAnswersState): string {
  const outputArray: Array<Array<Answer>> = [];
  for (const categoryId of Object.keys(input)) {
    const categoryAnswers = input[+categoryId];
    outputArray[+categoryId] = [];
    const categoryOutput = outputArray[+categoryId];
    for (const questionId of Object.keys(categoryAnswers)) {
      categoryOutput[+questionId] = categoryAnswers[+questionId];
    }
  }
  return window.btoa(deflate(
    JSON.stringify(outputArray),
    { to: 'string' },
  ));
}

export function decode(input: string): IAnswersState {
  const inputArray: Array<Array<Answer>> = JSON.parse(inflate(
    window.atob(input),
    { to: 'string' },
  ));
  if (!Array.isArray(inputArray)) {
    throw new Error('Array expected.');
  }
  const answersState: IAnswersState = {};
  for (let categoryId = 0; categoryId < inputArray.length; categoryId++) {
    const categoryArray = inputArray[categoryId];
    if (categoryArray === null) {
      continue;
    }
    if (!Array.isArray(categoryArray)) {
      throw new Error('Array expected.');
    }
    answersState[categoryId] = {};
    const categoryState = answersState[categoryId];
    for (let questionId = 0; questionId < categoryArray.length; questionId++) {
      const answer = categoryArray[questionId];
      if (answer === null) {
        continue;
      }
      categoryState[questionId] = answer;
    }
  }
  return answersState;
}
