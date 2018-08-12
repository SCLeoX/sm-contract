import { ContentType } from '../contents/ContentType';

export const ACTION_LOWER_COVER = 'CV_LOWER_COVER';
export const ACTION_SET_CONTENT = 'CV_SET_CONTENT';
export interface IActionLowerCover {
  type: typeof ACTION_LOWER_COVER;
}
export interface IActionSetContent {
  type: typeof ACTION_SET_CONTENT;
  content: ContentType;
}
export function createLowerCoverAction(): IActionLowerCover {
  return {
    type: ACTION_LOWER_COVER,
  };
}
export function createSetContentAction(
  content: ContentType,
): IActionSetContent {
  return {
    type: ACTION_SET_CONTENT,
    content,
  };
}
