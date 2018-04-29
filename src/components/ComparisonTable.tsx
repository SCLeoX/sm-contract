import { accessAnswerById } from '../AccessAnswer';
import {
  getBianswerQuestionDisplayInfo,
  getNonBianswerQuestionDisplayInfo,
} from '../contents/Profile';
import {
  categories,
  ICategory,
  IQuestion,
  QuestionType,
} from '../data/categories';
import * as React from '../external/react';
import { IAnswersState } from '../reducers/answers';
import { LinkButton } from './LinkButton';

interface IComparisonTableProps {
  readonly s: IAnswersState;
  readonly m: IAnswersState;
}
interface IComparisonTableState {
  readonly showAll: boolean;
}
export class ComparisonTable extends React.PureComponent<
  IComparisonTableProps,
  IComparisonTableState
> {
  public state = {
    showAll: false,
  };
  private onClickSwitchShowMode = () => {
    this.setState(state => ({
      showAll: !state.showAll,
    }));
  }
  private convertAnswerToSchrodinger(
    question: IQuestion,
    answerRaw: any,
  ): string | null {
    if (answerRaw === null || answerRaw === '') {
      return null;
    } else if (question.type === QuestionType.MULTIPLE_CHOICE) {
      return question.choices[answerRaw];
    } else {
      return answerRaw;
    }
  }
  private convertSchrodingerToElement(schrodinger: string | null | undefined) {
    if (schrodinger) {
      return <td>{ schrodinger }</td>;
    } else if (schrodinger === null) {
      return <td className='empty'>{ '< @{lab.sm.compare.table.empty} >' }</td>;
    } else {
      return (
        <td className='unavailable'>
          { '< @{lab.sm.compare.table.unavailable} >' }
        </td>
      );
    }
  }
  private renderRows(): Array<React.ReactNode> {
    const sAnswers = this.props.s;
    const mAnswers = this.props.m;
    const results: Array<React.ReactNode> = [];
    const showAll = this.state.showAll;
    for (const category of categories) {
      const cid = category.categoryId;
      for (const question of category.questions) {
        const qid = question.questionId;

        let sAnswerRaw: string | number | null = null;
        let mAnswerRaw: string | number | null = null;

        // null = empty
        // undefined = unavailable
        let sAnswer: string | null | undefined;
        let mAnswer: string | null | undefined;

        // This part of the code tried to extract the answers of both role.
        // I know it is terrible. I failed the desgin. I am sorry.
        if (question.bianswer) {
          const { showS } = getBianswerQuestionDisplayInfo(sAnswers, question);
          if (!showS) {
            sAnswer = undefined;
          } else {
            sAnswer = this.convertAnswerToSchrodinger(
              question,
              sAnswerRaw = ((accessAnswerById(sAnswers, cid, qid) as any)[0]),
            );
          }
          const { showM } = getBianswerQuestionDisplayInfo(mAnswers, question);
          if (!showM) {
            mAnswer = undefined;
          } else {
            mAnswer = this.convertAnswerToSchrodinger(
              question,
              mAnswerRaw = ((accessAnswerById(mAnswers, cid, qid) as any)[1]),
            );
          }
        } else {
          const showS = getNonBianswerQuestionDisplayInfo(sAnswers, question);
          if (!showS) {
            sAnswer = undefined;
          } else {
            sAnswer = this.convertAnswerToSchrodinger(
              question,
              sAnswerRaw = (accessAnswerById(sAnswers, cid, qid) as any),
            );
          }
          const showM = getNonBianswerQuestionDisplayInfo(mAnswers, question);
          if (!showM) {
            mAnswer = undefined;
          } else {
            mAnswer = this.convertAnswerToSchrodinger(
              question,
              mAnswerRaw = (accessAnswerById(mAnswers, cid, qid) as any),
            );
          }
        }

        const shouldHideIfNotShowAll = (question.uncomparable
          ? sAnswer === undefined && mAnswer === undefined
          : sAnswer === undefined || mAnswer === undefined
        );

        if (!showAll && shouldHideIfNotShowAll) {
          continue;
        }

        const sTd = this.convertSchrodingerToElement(sAnswer);
        const mTd = this.convertSchrodingerToElement(mAnswer);

        let color = shouldHideIfNotShowAll ? '#eee' : 'white';

        if ( // The question is comparable and answered
          (!question.uncomparable) &&
          (sAnswer) &&
          (mAnswer)
        ) {
          const sDist = 3 - (sAnswerRaw as number);
          const mDist = 3 - (mAnswerRaw as number);
          color = `rgb(255,255,${255 - sDist * mDist * 10})`;
        }

        results.push(
          <tr key={ cid + ',' + qid } style={{
            backgroundColor: color,
          }}>
            <td>{ question.title }</td>
            { sTd }
            { mTd }
          </tr>,
        );
      }
    }
    return results;
  }
  public render() {
    return (
      <React.Fragment>
        <LinkButton
          children={
            this.state.showAll
              ? '@{lab.sm.compare.table.switchToShowAvailable}'
              : '@{lab.sm.compare.table.switchToShowAll}'
          }
          onClick={ this.onClickSwitchShowMode }
        />
        <table>
          <thead>
            <tr>
              <th>{ '@{lab.sm.compare.table.item}' }</th>
              <th>{ '@{lab.sm.compare.table.sChoice}' }</th>
              <th>{ '@{lab.sm.compare.table.mChoice}' }</th>
            </tr>
          </thead>
          <tbody>
            { this.renderRows() }
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}
