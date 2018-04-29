import {
  ACTION_REPLACE_ANSWERS,
  ACTION_SET_ANSWER,
  Answer,
  IActionReplaceAnswers,
  IActionSetAnswer,
} from '../actions/answers';
import update from '../external/immutabilityHelper';

export interface ICategoryState {
  [ questionId: number ]: Answer;
}
export interface IAnswersState {
  [ categoryId: number ]: ICategoryState;
}

function category(
  state: ICategoryState = {},
  action: IActionSetAnswer,
): ICategoryState {
  return update(state, {
    [action.questionId]: {
      $set: action.answer,
    },
  });
}

export function answers(
  state: IAnswersState = {},
  action: IActionSetAnswer | IActionReplaceAnswers,
): IAnswersState {
  switch (action.type) {
    case ACTION_SET_ANSWER:
      return update(state, {
        [action.categoryId]: {
          $set: category(
            state[action.categoryId],
            action,
          ),
        },
      });
    case ACTION_REPLACE_ANSWERS:
      return action.answers;
    default:
      return state;
  }
}
