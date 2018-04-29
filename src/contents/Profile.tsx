import { accessAnswerById, accessAnswerByIndex } from '../AccessAnswer';
import { MCAnswer } from '../actions/answers';
import { Card } from '../components/Card';
import { FillBlankAnswer } from '../components/FillBlankAnswer';
import { MultipleChoiceAnswer } from '../components/MultipleChoiceAnswer';
import { SimpleFormat } from '../components/SimpleFormat';
import {
  categories,
  ICategory,
  IFillBlankQuestion,
  IQuestion,
} from '../data/categories';
import { HardcorenessMetrics, QuestionType } from '../data/Enums';
import * as React from '../external/react';
import { Collapse } from '../external/reactCollapse';
import { connect } from '../external/reactRedux';
import { IAnswersState } from '../reducers/answers';
import { IRootState } from '../RootState';

interface IHardcorenessMeterProps {
  readonly level: HardcorenessMetrics;
}
const HardcorenessMeter = ({ level }: IHardcorenessMeterProps) => (
  level === HardcorenessMetrics.UNAVAILABLE
    ? null
    : <span
      className='hardcoreness-meter'
      style={{
        color: level === HardcorenessMetrics.UNDETERMINED
          ? '#aaa'
          : level === HardcorenessMetrics.MILD
            ? 'green'
            : level === HardcorenessMetrics.MEDIUM
              ? 'goldenrod'
              : 'red',
      }}
    >
      ({ level === HardcorenessMetrics.UNDETERMINED
        ? '@{lab.sm.profile.hardcoreness.undet}'
        : level === HardcorenessMetrics.MILD
          ? '@{lab.sm.profile.hardcoreness.mild}'
          : level === HardcorenessMetrics.MEDIUM
            ? '@{lab.sm.profile.hardcoreness.mid}'
            : '@{lab.sm.profile.hardcoreness.ext}' })
    </span>
);

interface IQuestionOwnProps {
  readonly categoryIndex: number;
  readonly category: ICategory;
  readonly questionIndex: number;
  readonly question: IQuestion;
}
interface IQuestionProps extends IQuestionOwnProps {
  readonly folded: boolean;
  readonly showS?: boolean;
  readonly showM?: boolean;
}
class QuestionUW extends React.PureComponent<IQuestionProps> {
  private lastShowS: boolean = true;
  private lastShowM: boolean = false;
  public render() {
    if (!this.props.folded) {
      this.lastShowS = this.props.showS === true;
      this.lastShowM = this.props.showM === true;
    }
    const question = this.props.question;
    return (
      <Collapse isOpened={ !this.props.folded }>
        <div className='question'>
          <p className='info'>
            { '@{lab.sm.profile.id}' }
            <b>{ 'C' + this.props.category.categoryId + 'Q' +
              question.questionId }</b>
            <br/>
            { '@{lab.sm.profile.index}' }
            <b>{ 'C' + this.props.categoryIndex + 'Q' +
              this.props.questionIndex }</b>
          </p>
          <h2>
            { question.title }
            <HardcorenessMeter level={ question.hardcoreness }/>
          </h2>
          <div className='clear'/>
          { question.description && <SimpleFormat>
            { question.description }
          </SimpleFormat> }
          { question.warning && <SimpleFormat
            className='warning'
            children={ question.warning }
          />}
          { question.type === QuestionType.MULTIPLE_CHOICE
            ? <MultipleChoiceAnswer
              categoryIndex={ this.props.categoryIndex }
              category={ this.props.category }
              questionIndex={ this.props.questionIndex }
              question={ question }
              bianswer={ question.bianswer }
              showS={ this.lastShowS }
              showM={ this.lastShowM }
            />
            : <FillBlankAnswer
              categoryIndex={ this.props.categoryIndex }
              category={ this.props.category }
              questionIndex={ this.props.questionIndex }
              question={ question as IFillBlankQuestion }
              bianswer={ question.bianswer }
              showS={ this.lastShowS }
              showM={ this.lastShowM }
            /> }
        </div>
      </Collapse>
    );
  }
}
const testFulfillOneThis = (
  answer: MCAnswer,
  requirement: Array<number | null>,
): boolean => {
  if (Array.isArray(answer)) {
    return requirement.includes(answer[0]) || requirement.includes(answer[1]);
  } else {
    return requirement.includes(answer);
  }
};
const testFulfillTwoThis = (
  answer: MCAnswer,
  requirement: Array<number | null>,
): [boolean, boolean] => {
  if (Array.isArray(answer)) {
    return [requirement.includes(answer[0]), requirement.includes(answer[1])];
  } else {
    const fulfill = requirement.includes(answer);
    return [fulfill, fulfill];
  }
};
const resolveAnswer = (
  answers: IAnswersState,
  query: string,
): MCAnswer => {
  const dotSplitted = query.split('.');
  let answer = accessAnswerById(
    answers,
    +dotSplitted[0],
    +dotSplitted[1],
  ) as MCAnswer;
  if (dotSplitted.length === 3) {
    if (!Array.isArray(answer)) {
      throw new Error(`Question schema error: ${query} is not bianswer.`);
    }
    answer = answer[dotSplitted[2] === 'S' ? 0 : 1];
  }
  return answer;
};
enum SMRole {
  S, M, BOTH,
}
export function getBianswerQuestionDisplayInfo(
  answers: IAnswersState,
  question: IQuestion,
): {
  showS: boolean,
  showM: boolean,
} {
  const role = accessAnswerByIndex(answers, 0, 0);
  let showS = role !== 1;
  let showM = role !== 0;
  if (!question.dependencies) {
    return {
      showS,
      showM,
    };
  }
  for (const dep of Object.keys(question.dependencies)) {
    let scope: SMRole;
    let query: string;
    const commaSplitted = dep.split(':');
    if (commaSplitted.length === 2) {
      scope = commaSplitted[0] === 'S'
        ? SMRole.S
        : SMRole.M;
      query = commaSplitted[1];
    } else {
      scope = SMRole.BOTH;
      query = dep;
    }
    const answer = resolveAnswer(answers, query);
    const requirement = question.dependencies[dep];
    if (scope === SMRole.BOTH) {
      const [sFulfilled, mFulfilled] = testFulfillTwoThis(
        answer,
        requirement,
      );
      showS = showS && sFulfilled;
      showM = showM && mFulfilled;
    } else if (scope === SMRole.S) {
      showS = showS && testFulfillOneThis(
        answer,
        requirement,
      );
    } else {
      showM = showM && testFulfillOneThis(
        answer,
        requirement,
      );
    }
    if (!showS && !showM) {
      break;
    }
  }
  return {
    showS,
    showM,
  };
}
export function getNonBianswerQuestionDisplayInfo(
  answers: IAnswersState,
  question: IQuestion,
): boolean {
  if (!question.dependencies) {
    return true;
  }
  for (const dep of Object.keys(question.dependencies)) {
    const answer = resolveAnswer(answers, dep);
    const requirement = question.dependencies[dep];
    if (!testFulfillOneThis(answer, requirement)) {
      return false;
    }
  }
  return true;
}
const Question = connect((
  state: IRootState,
  ownProps: IQuestionOwnProps,
): {
  folded: boolean,
  showS?: boolean,
  showM?: boolean,
} => {
  // The first question of first category always asks about what role you want
  // be.
  const question = ownProps.question;
  if (question.bianswer) {
    const { showS, showM } = getBianswerQuestionDisplayInfo(
      state.answers,
      question,
    );
    return {
      folded: !showS && !showM,
      showS,
      showM,
    };
  } else {
    return {
      folded: !getNonBianswerQuestionDisplayInfo(
        state.answers,
        question,
      ),
    };
  }
})(QuestionUW);

interface ICategoryProps {
  readonly categoryIndex: number;
  readonly category: ICategory;
}
class Category extends React.PureComponent<ICategoryProps> {
  public render() {
    const category = this.props.category;
    return (
      <Card>
        <h4>
          { '@{lab.sm.profile.categoryIndexLabel,' + this.props.categoryIndex + '}' }
        </h4>
        <h1>{ category.name }</h1>
        { category.description && <SimpleFormat>
          { category.description }
        </SimpleFormat> }
        { category.questions.map((
          question: IQuestion,
          questionIndex: number,
        ) => (
          <Question
            key={ questionIndex }
            categoryIndex={ this.props.categoryIndex }
            category={ this.props.category }
            questionIndex={ questionIndex }
            question={ question }
          />
        )) }
      </Card>
    );
  }
}

export class Profile extends React.PureComponent {
  public render() {
    return (
      <div className='content profile'>
        <Card>
          <h1>{ '@{lab.sm.profile.about.title}' }</h1>
          <SimpleFormat>
            { '@{lab.sm.profile.about.desc}' }
          </SimpleFormat>
        </Card>
        { categories.map((
          category: ICategory,
          categoryIndex: number,
        ) => <Category
          key={ categoryIndex }
          categoryIndex={ categoryIndex }
          category={ category }
        />) }
        <Card>
          <h1>{ '@{lab.sm.profile.finish.title}' }</h1>
          <SimpleFormat>
            { '@{lab.sm.profile.finish.desc}' }
          </SimpleFormat>
        </Card>
      </div>
    );
  }
}
