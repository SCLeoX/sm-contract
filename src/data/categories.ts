import { HardcorenessMetrics } from './Enums';

export enum QuestionType {
  MULTIPLE_CHOICE,
  FILL_BLANK,
}

interface IQuestionBase {
  /**
   * The ID of this question. It should be unique within the category. This
   * number should be always the same in order to ensure backward compatibility.
   * ID starts at 0.
   */
  readonly questionId: number;
  /**
   * The title of this question. It should be a reference to a lang file field.
   */
  readonly title: string;
  /**
   * The descrption of this question. It should be a reference to a lang file
   * field.
   */
  readonly description?: string;
  /**
   * The warning to be displayed under this question. Optional. It should be a
   * reference to a lang file field.
   */
  readonly warning?: string;
  /**
   * How "hardcore" this kind of "play" is.
   */
  readonly hardcoreness: HardcorenessMetrics;
  /**
   * Whether the question is specific to both role in the play.
   */
  readonly bianswer: boolean;
  /**
   * When this question should be displayed. Optional.
   *
   * For example, the following value:
   * {
   *   '0.3': [ 0, 1 ],
   * }
   * means display this question only if question 3 in category 0 is answered
   * with choice 0 (the first choice) or choice 1 (the second choice).
   *  - If this question and the target question are both bianswer, only the
   *    respective role is influenced.
   *  - If the target question is bianswer while this question is not, the
   *    dependency is considered as fulfilled as long as either role in the
   *    target question fulfills the requirement.
   *
   * Additionally, using '0.3.S' will limit the target question to the S side of
   * the target question.
   *
   * Using 'S:0.3' will cause the result only limiting this question's S side.
   */
  readonly dependencies?: { [query: string]: Array<number | null> };
  /**
   * Whether this question is uncomparable.
   */
  readonly uncomparable?: true;
}

export interface IMultipleChoiceQuestion extends IQuestionBase {
  readonly type: QuestionType;
  /**
   * The answer choices of this question.
   */
  readonly choices: Array<string>;
}

export interface IFillBlankQuestion extends IQuestionBase {
  readonly type: QuestionType.FILL_BLANK;
  readonly label: string;
}

export type IQuestion = IMultipleChoiceQuestion | IFillBlankQuestion;

export interface ICategory {
  /**
   * The ID of this category. This number should be always the same in order to
   * ensure backward compatibility.
   * ID starts at 0.
   */
  readonly categoryId: number;
  /**
   * The name of this category. It should be a reference to a lang file field.
   */
  readonly name: string;
  /**
   * The description of this category. Optional. It should be a reference to a
   * lang file field.
   */
  readonly description?: string;
  /**
   * The warning to be displayed under this category. Optional. It should be a
   * reference to a lang file field.
   */
  readonly warning?: string;
  /**
   * Questions within this category. The index of the question determines the
   * order of the questions.
   */
  readonly questions: Array<IQuestion>;
}

import { category0 } from './category0';
import { category1 } from './category1';
import { category2 } from './category2';
import { category3 } from './category3';
import { category4 } from './category4';
import { category5 } from './category5';
import { category6 } from './category6';
import { category7 } from './category7';

export const categories: Array<ICategory> = [
  category0,
  category1,
  category2,
  category3,
  category4,
  category5,
  category6,
  category7,
];

export const categoryById: {
  [ categoryId: number ]: ICategory,
} = {};

export const questionByIds: {
  [ categoryId: number ]: {
    [ questionId: number ]: IQuestion,
  },
} = {};

for (const category of categories) {
  categoryById[category.categoryId] = category;
  questionByIds[category.categoryId] = {};
  const questionById = questionByIds[category.categoryId];
  for (const question of category.questions) {
    questionById[question.questionId] = question;
  }
}
