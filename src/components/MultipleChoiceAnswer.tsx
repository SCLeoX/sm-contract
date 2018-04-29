import { accessAnswerByIndex } from '../AccessAnswer';
import { createSetAnswerAction, IActionSetAnswer, MCAnswer } from '../actions/answers';
import { categories, ICategory, IMultipleChoiceQuestion } from '../data/categories';
import * as React from '../external/react';
import { connect } from '../external/reactRedux';
import { IRootState } from '../RootState';

interface IOneChoiceProps {
  readonly selected: boolean;
}
const OneChoice = ({ selected }: IOneChoiceProps) => (
  <i className='material-icons'>
    { selected
      ? 'radio_button_checked'
      : 'radio_button_unchecked' }
  </i>
);
interface IMultipleChoiceAnswerOwnProps {
  readonly categoryIndex: number;
  readonly category: ICategory;
  readonly questionIndex: number;
  readonly question: IMultipleChoiceQuestion;
  readonly bianswer: boolean;
  readonly showS: boolean;
  readonly showM: boolean;
}
interface IMultipleChoiceAnswerProps extends IMultipleChoiceAnswerOwnProps {
  readonly currentAnswer: MCAnswer;
  readonly setAnswer: typeof createSetAnswerAction;
}
class MultipleChoiceAnswerUW extends React.PureComponent<
  IMultipleChoiceAnswerProps
> {
  private onClick: React.MouseEventHandler<any> = event => {
    const target = event.target as any;
    const td = target.closest('td') as HTMLTableDataCellElement;
    if (td === null) {
      return;
    }
    let type = td.dataset.type;
    if (type === undefined) {
      return;
    }
    if (
      (this.props.bianswer) &&
      (this.props.showS !== this.props.showM) &&
      (type === 'all')
    ) {
      type = this.props.showS ? 'col0' : 'col1';
    }
    const choiceIndex = +((
      td.closest('tr') as HTMLTableRowElement
    ).dataset.index as string);
    let answer: MCAnswer;
    if (this.props.bianswer) {
      const beforeAnswer = this.props.currentAnswer as [
        number | null,
        number | null
      ];
      if (type === 'all') {
        if (
          choiceIndex === beforeAnswer[0] && choiceIndex === beforeAnswer[1]
        ) {
          answer = [ null, null ];
        } else {
          answer = [ choiceIndex, choiceIndex ];
        }
      } else if (type === 'col0') {
        answer = [
          choiceIndex === beforeAnswer[0] ? null : choiceIndex,
          beforeAnswer[1],
        ];
      } else {
        answer = [
          beforeAnswer[0],
          choiceIndex === beforeAnswer[1] ? null : choiceIndex,
        ];
      }
    } else {
      const beforeAnswer = this.props.currentAnswer as number | null;
      if (beforeAnswer === choiceIndex) {
        answer = null;
      } else {
        answer = choiceIndex;
      }
    }
    this.props.setAnswer(
      this.props.category.categoryId,
      this.props.question.questionId,
      answer,
    );
  }
  public render() {
    const choices = this.props.question.choices;
    const showCol0 = !this.props.bianswer || this.props.showS;
    const showCol1 = this.props.bianswer && this.props.showM;
    return (
      <table onClick={ this.onClick }>
        <thead>
          <tr>
            <th>{ '@{lab.sm.mcq.items}' }</th>
            { showCol0 && <th>
              { this.props.bianswer
                ? '@{lab.sm.mcq.asS}'
                : '' }
            </th> }
            { showCol1 && <th>{ '@{lab.sm.mcq.asM}' }</th> }
          </tr>
        </thead>
        <tbody>
          { choices.map((choice, choiceIndex) => (
            <tr data-index={ String(choiceIndex) } key={ choiceIndex }>
              <td data-type='all'>{ choice }</td>
              { showCol0 && <td data-type='col0'>
                <OneChoice selected={
                  Array.isArray(this.props.currentAnswer)
                    ? this.props.currentAnswer[0] === choiceIndex
                    : this.props.currentAnswer === choiceIndex
                }/>
              </td> }
              { showCol1 && <td data-type='col1'>
                <OneChoice selected={
                  Array.isArray(this.props.currentAnswer) &&
                    (this.props.currentAnswer[1] === choiceIndex)
                }/>
              </td> }
            </tr>
          )) }
        </tbody>
      </table>
    );
  }
}

export const MultipleChoiceAnswer = connect((
  state: IRootState,
  ownProps: IMultipleChoiceAnswerOwnProps,
) => ({
  currentAnswer: accessAnswerByIndex(
    state.answers,
    ownProps.categoryIndex,
    ownProps.questionIndex,
  ),
}), {
  setAnswer: createSetAnswerAction,
})(MultipleChoiceAnswerUW);
