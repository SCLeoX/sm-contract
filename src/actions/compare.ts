import { IAnswersState } from '../reducers/answers';

export const ACTION_SET_COMPARE_FORM = 'C_SET_COMPARE_FORM';
export const ACTION_START_COMPARE = 'C_START_COMPARE';
export const ACTION_CLEAR_COMPARE = 'C_CLEAR_COMPARE';
export interface IActionSetCompareForm {
  type: typeof ACTION_SET_COMPARE_FORM;
  role: 's' | 'm';
  value: string;
}
export interface IActionStartCompare {
  type: typeof ACTION_START_COMPARE;
  s: IAnswersState;
  m: IAnswersState;
}
export interface IActionClearCompare {
  type: typeof ACTION_CLEAR_COMPARE;
}
export function createSetCompareFormAction(
  role: 's' | 'm',
  value: string,
): IActionSetCompareForm {
  return {
    type: ACTION_SET_COMPARE_FORM,
    role,
    value,
  };
}
export function createStartCompareAction(
  s: IAnswersState,
  m: IAnswersState,
): IActionStartCompare {
  return {
    type: ACTION_START_COMPARE,
    s,
    m,
  };
}
export function createClearCompareAction(): IActionClearCompare {
  return {
    type: ACTION_CLEAR_COMPARE,
  };
}
