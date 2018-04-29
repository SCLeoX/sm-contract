import { Answer, FBAnswer, MCAnswer } from './actions/answers';
import {
  categories,
  IQuestion,
  questionByIds,
} from './data/categories';
import { QuestionType } from './data/Enums';
import { IAnswersState } from './reducers/answers';

const blankBianswerMC: MCAnswer = [null, null];
const blankBianswerFB: FBAnswer = ['', ''];

const getBlankAnswer = (question: IQuestion): Answer => question.bianswer
  ? question.type === QuestionType.MULTIPLE_CHOICE
    ? blankBianswerMC
    : blankBianswerFB
  : question.type === QuestionType.MULTIPLE_CHOICE
    ? null
    : '';

export function accessAnswerByIndex(
  answers: IAnswersState,
  categoryIndex: number,
  questionIndex: number,
): Answer {
  const category = categories[categoryIndex];
  const categoryId = category.categoryId;
  const answersCategory = answers[categoryId];
  const question = category.questions[questionIndex];
  const questionId = question.questionId;
  if (answersCategory === undefined) {
    return getBlankAnswer(question);
  }
  const answer = answersCategory[questionId];
  if (answer === undefined) {
    return getBlankAnswer(question);
  }
  return answer;
}

export function accessAnswerById(
  answers: IAnswersState,
  categoryId: number,
  questionId: number,
): Answer {
  const question = questionByIds[categoryId][questionId];
  const answersCategory = answers[categoryId];
  if (answersCategory === undefined) {
    return getBlankAnswer(question);
  }
  const answer = answersCategory[questionId];
  if (answer === undefined) {
    return getBlankAnswer(question);
  }
  return answer;
}
