import {
  ACTION_LOWER_COVER,
  ACTION_SET_CONTENT,
  IActionLowerCover,
  IActionSetContent,
} from '../actions/currentView';
import { ContentType } from '../contents/ContentType';
import update from '../external/immutabilityHelper';

export interface ICurrentViewState {
  cover: boolean;
  content: ContentType;
}
export function currentView(
  state: ICurrentViewState = {
    cover: true,
    content: ContentType.PROFILE,
  },
  action: IActionLowerCover | IActionSetContent,
): ICurrentViewState {
  switch (action.type) {
    case ACTION_LOWER_COVER:
      return update(state, { cover: { $set: true } });
    case ACTION_SET_CONTENT:
      return {
        cover: false,
        content: action.content,
      };
    default:
      return state;
  }
}
