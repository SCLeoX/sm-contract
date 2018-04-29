import { IAnswersState } from './reducers/answers';
import { ICompareState } from './reducers/compare';
import { ICurrentViewState } from './reducers/currentView';

export interface IRootState {
  readonly answers: IAnswersState;
  readonly compare: ICompareState;
  readonly currentView: ICurrentViewState;
}
