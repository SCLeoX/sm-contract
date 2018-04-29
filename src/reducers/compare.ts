import {
  ACTION_CLEAR_COMPARE,
  ACTION_SET_COMPARE_FORM,
  ACTION_START_COMPARE,
  IActionClearCompare,
  IActionSetCompareForm,
  IActionStartCompare,
} from '../actions/compare';
import update from '../external/immutabilityHelper';
import { IAnswersState } from './answers';

export interface ICompareState {
  form: {
    s: string,
    m: string,
  };
  comparing: null | {
    s: IAnswersState,
    m: IAnswersState,
  };
}
export function compare(
  state: ICompareState = {
    form: {
      s: '',
      m: '',
    },
    comparing: null,
  },
  action: IActionSetCompareForm | IActionStartCompare | IActionClearCompare,
) {
  switch (action.type) {
    case ACTION_SET_COMPARE_FORM:
      return update(state, {
        form: {
          [ action.role ]: {
            $set: action.value,
          },
        },
      });
    case ACTION_START_COMPARE:
      return update(state, {
        comparing: {
          $set: {
            s: action.s,
            m: action.m,
          },
        },
      });
    case ACTION_CLEAR_COMPARE:
      return update(state, {
        comparing: {
          $set: null,
        },
      });
    default:
      return state;
  }
}
