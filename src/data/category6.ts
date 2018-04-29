import { ICategory } from './categories';
import { HardcorenessMetrics, QuestionType } from './Enums';
const MULTIPLE_CHOICE = QuestionType.MULTIPLE_CHOICE;
const FILL_BLANK = QuestionType.FILL_BLANK;

export const category6: ICategory = {
  categoryId: 6,
  name: '@{lab.sm.data.c6.name}',
  description: '@{lab.sm.data.c6.description}',
  questions: [{
    questionId: 0,
    type: MULTIPLE_CHOICE,
    title: '@{lab.sm.data.c6.q0.title}',
    description: '@{lab.sm.data.c6.q0.description}',
    hardcoreness: HardcorenessMetrics.EXTREME,
    bianswer: true,
    choices: [
      '@{lab.sm.data.c6.q0.a0}',
      '@{lab.sm.data.c6.q0.a1}',
      '@{lab.sm.data.c6.q0.a2}',
      '@{lab.sm.data.c6.q0.a3}',
    ],
  }, {
    questionId: 1,
    type: MULTIPLE_CHOICE,
    title: '@{lab.sm.data.c6.q1.title}',
    hardcoreness: HardcorenessMetrics.EXTREME,
    bianswer: true,
    choices: [
      '@{lab.sm.data.c6.q1.a0}',
      '@{lab.sm.data.c6.q1.a1}',
      '@{lab.sm.data.c6.q1.a2}',
      '@{lab.sm.data.c6.q1.a3}',
    ],
    dependencies: {
      '6.0': [ 0, 1, 2, 3 ],
    },
  }, {
    questionId: 2,
    type: MULTIPLE_CHOICE,
    title: '@{lab.sm.data.c6.q2.title}',
    hardcoreness: HardcorenessMetrics.EXTREME,
    bianswer: true,
    choices: [
      '@{lab.sm.data.c6.q2.a0}',
      '@{lab.sm.data.c6.q2.a1}',
      '@{lab.sm.data.c6.q2.a2}',
      '@{lab.sm.data.c6.q2.a3}',
    ],
    dependencies: {
      '6.0': [ 0, 1, 2, 3 ],
    },
  }],
};
