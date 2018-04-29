import { IAnswersState } from '../reducers/answers';

export const ACTION_SET_ANSWER = 'A_SET_ANSWER';
export const ACTION_REPLACE_ANSWERS = 'A_REPLACE_ANSWERS';
export type MCAnswer = number | null | [number | null, number | null];
export type FBAnswer = string | [string, string];
export type Answer = MCAnswer | FBAnswer;
export interface IActionSetAnswer {
  type: typeof ACTION_SET_ANSWER;
  categoryId: number;
  questionId: number;
  answer: Answer;
}
export interface IActionReplaceAnswers {
  type: typeof ACTION_REPLACE_ANSWERS;
  answers: IAnswersState;
}
export function createSetAnswerAction(
  categoryId: number,
  questionId: number,
  answer: Answer,
): IActionSetAnswer {
  return {
    type: ACTION_SET_ANSWER,
    categoryId,
    questionId,
    answer,
  };
}
export function createReplaceAnswersAction(
  answers: IAnswersState,
): IActionReplaceAnswers {
  return {
    type: ACTION_REPLACE_ANSWERS,
    answers,
  };
}
