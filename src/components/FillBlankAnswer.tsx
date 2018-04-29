import { accessAnswerByIndex } from '../AccessAnswer';
import { createSetAnswerAction, FBAnswer } from '../actions/answers';
import { ICategory, IFillBlankQuestion } from '../data/categories';
import * as React from '../external/react';
import { connect } from '../external/reactRedux';
import { IRootState } from '../RootState';
import { InputField } from './InputField';

interface IFillBlankAnswerOwnProps {
  readonly categoryIndex: number;
  readonly category: ICategory;
  readonly questionIndex: number;
  readonly question: IFillBlankQuestion;
  readonly bianswer: boolean;
  readonly showS: boolean;
  readonly showM: boolean;
}
interface IFillBlankAnswerProps extends IFillBlankAnswerOwnProps {
  readonly currentAnswer: FBAnswer;
  readonly setAnswer: typeof createSetAnswerAction;
}
class FillBlankAnswerUW extends React.PureComponent<
  IFillBlankAnswerProps
> {
  private setAnswer = (answer: FBAnswer) => {
    this.props.setAnswer(
      this.props.category.categoryId,
      this.props.question.questionId,
      answer,
    );
  }
  private readonly onChange0 = (newValue: string) => {
    if (this.props.bianswer) {
      this.setAnswer([
        newValue,
        this.props.currentAnswer[1],
      ]);
    } else {
      this.setAnswer(newValue);
    }
  }
  private readonly onChange1 = (newValue: string) => {
    this.setAnswer([
      this.props.currentAnswer[0],
      newValue,
    ]);
  }
  public render() {
    const showCol0 = !this.props.bianswer || this.props.showS;
    const showCol1 = this.props.bianswer && this.props.showM;
    return (
      <div>
        { showCol0 && <InputField
          label={ this.props.bianswer
            ? `@{lab.sm.fbq.asS,${ this.props.question.label }}`
            : this.props.question.label
          }
          value={
            Array.isArray(this.props.currentAnswer)
              ? this.props.currentAnswer[0]
              : this.props.currentAnswer
          }
          onChange={ this.onChange0 }
        /> }
        { showCol1 && <InputField
          label={ `@{lab.sm.fbq.asM,${ this.props.question.label }}` }
          value={ this.props.currentAnswer[1] }
          onChange={ this.onChange1 }
        /> }
      </div>
    );
  }
}

export const FillBlankAnswer = connect((
  state: IRootState,
  ownProps: IFillBlankAnswerOwnProps,
) => ({
  currentAnswer: accessAnswerByIndex(
    state.answers,
    ownProps.categoryIndex,
    ownProps.questionIndex,
  ),
}), {
  setAnswer: createSetAnswerAction,
})(FillBlankAnswerUW);
