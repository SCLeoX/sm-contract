import { ICategory } from './categories';
import { HardcorenessMetrics, QuestionType } from './Enums';
const MULTIPLE_CHOICE = QuestionType.MULTIPLE_CHOICE;
const FILL_BLANK = QuestionType.FILL_BLANK;

export const category7: ICategory = {
  categoryId: 7,
  name: '@{lab.sm.data.c7.name}',
  description: '@{lab.sm.data.c7.description}',
  questions: [{
    questionId: 0,
    type: MULTIPLE_CHOICE,
    title: '@{lab.sm.data.c7.q0.title}',
    description: '@{lab.sm.data.c7.q0.description}',
    hardcoreness: HardcorenessMetrics.MILD,
    bianswer: true,
    choices: [
      '@{lab.sm.data.shared.ua0}',
      '@{lab.sm.data.shared.ua1}',
      '@{lab.sm.data.shared.ua2}',
      '@{lab.sm.data.shared.ua3}',
    ],
  }, {
    questionId: 1,
    type: MULTIPLE_CHOICE,
    title: '@{lab.sm.data.c7.q1.title}',
    description: '@{lab.sm.data.c7.q1.description}',
    hardcoreness: HardcorenessMetrics.MILD,
    bianswer: true,
    choices: [
      '@{lab.sm.data.shared.ua0}',
      '@{lab.sm.data.shared.ua1}',
      '@{lab.sm.data.shared.ua2}',
      '@{lab.sm.data.shared.ua3}',
    ],
  }, {
    questionId: 2,
    type: MULTIPLE_CHOICE,
    title: '@{lab.sm.data.c7.q2.title}',
    description: '@{lab.sm.data.c7.q2.description}',
    warning: '@{lab.sm.data.c7.q2.warning}',
    hardcoreness: HardcorenessMetrics.MEDIUM,
    bianswer: true,
    choices: [
      '@{lab.sm.data.shared.ua0}',
      '@{lab.sm.data.shared.ua1}',
      '@{lab.sm.data.shared.ua2}',
      '@{lab.sm.data.shared.ua3}',
    ],
  }, {
    questionId: 3,
    type: MULTIPLE_CHOICE,
    title: '@{lab.sm.data.c7.q3.title}',
    description: '@{lab.sm.data.c7.q3.description}',
    warning: '@{lab.sm.data.c7.q3.warning}',
    hardcoreness: HardcorenessMetrics.EXTREME,
    bianswer: true,
    choices: [
      '@{lab.sm.data.shared.ua0}',
      '@{lab.sm.data.shared.ua1}',
      '@{lab.sm.data.shared.ua2}',
      '@{lab.sm.data.shared.ua3}',
    ],
  }],
};
