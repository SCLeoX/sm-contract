import { ICategory } from './categories';
import { HardcorenessMetrics, QuestionType } from './Enums';
const MULTIPLE_CHOICE = QuestionType.MULTIPLE_CHOICE;
const FILL_BLANK = QuestionType.FILL_BLANK;

export const category2: ICategory = {
  categoryId: 2,
  name: '@{lab.sm.data.c2.name}',
  description: '@{lab.sm.data.c2.description}',
  questions: [{
    questionId: 0,
    type: MULTIPLE_CHOICE,
    title: '@{lab.sm.data.c2.q0.title}',
    description: '@{lab.sm.data.c2.q0.description}',
    warning: '@{lab.sm.data.c2.q0.warning}',
    hardcoreness: HardcorenessMetrics.UNAVAILABLE,
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
    title: '@{lab.sm.data.c2.q1.title}',
    description: '@{lab.sm.data.c2.q1.description}',
    hardcoreness: HardcorenessMetrics.MILD,
    bianswer: true,
    choices: [
      '@{lab.sm.data.shared.ua0}',
      '@{lab.sm.data.shared.ua1}',
      '@{lab.sm.data.shared.ua2}',
      '@{lab.sm.data.shared.ua3}',
    ],
    dependencies: {
      '2.0': [ 0, 1, 2 ],
    },
  }, {
    questionId: 2,
    type: MULTIPLE_CHOICE,
    title: '@{lab.sm.data.c2.q2.title}',
    description: '@{lab.sm.data.c2.q2.description}',
    hardcoreness: HardcorenessMetrics.MILD,
    bianswer: true,
    choices: [
      '@{lab.sm.data.shared.ua0}',
      '@{lab.sm.data.shared.ua1}',
      '@{lab.sm.data.shared.ua2}',
      '@{lab.sm.data.shared.ua3}',
    ],
    dependencies: {
      '2.0': [ 0, 1, 2 ],
    },
  }, {
    questionId: 3,
    type: MULTIPLE_CHOICE,
    title: '@{lab.sm.data.c2.q3.title}',
    description: '@{lab.sm.data.c2.q3.description}',
    hardcoreness: HardcorenessMetrics.MILD,
    bianswer: true,
    choices: [
      '@{lab.sm.data.shared.ua0}',
      '@{lab.sm.data.shared.ua1}',
      '@{lab.sm.data.shared.ua2}',
      '@{lab.sm.data.shared.ua3}',
    ],
    dependencies: {
      '2.0': [ 0, 1, 2 ],
    },
  }, {
    questionId: 4,
    type: MULTIPLE_CHOICE,
    title: '@{lab.sm.data.c2.q4.title}',
    description: '@{lab.sm.data.c2.q4.description}',
    hardcoreness: HardcorenessMetrics.MILD,
    bianswer: true,
    choices: [
      '@{lab.sm.data.shared.ua0}',
      '@{lab.sm.data.shared.ua1}',
      '@{lab.sm.data.shared.ua2}',
      '@{lab.sm.data.shared.ua3}',
    ],
    dependencies: {
      '2.0': [ 0, 1, 2 ],
    },
  }, {
    questionId: 5,
    type: MULTIPLE_CHOICE,
    title: '@{lab.sm.data.c2.q5.title}',
    description: '@{lab.sm.data.c2.q5.description}',
    hardcoreness: HardcorenessMetrics.MILD,
    bianswer: true,
    choices: [
      '@{lab.sm.data.shared.ua0}',
      '@{lab.sm.data.shared.ua1}',
      '@{lab.sm.data.shared.ua2}',
      '@{lab.sm.data.shared.ua3}',
    ],
    dependencies: {
      '2.0': [ 0, 1, 2 ],
    },
  }, {
    questionId: 6,
    type: MULTIPLE_CHOICE,
    title: '@{lab.sm.data.c2.q6.title}',
    description: '@{lab.sm.data.c2.q6.description}',
    hardcoreness: HardcorenessMetrics.MILD,
    bianswer: true,
    choices: [
      '@{lab.sm.data.shared.ua0}',
      '@{lab.sm.data.shared.ua1}',
      '@{lab.sm.data.shared.ua2}',
      '@{lab.sm.data.shared.ua3}',
    ],
    dependencies: {
      '2.0': [ 0, 1, 2 ],
    },
  }, {
    questionId: 7,
    type: MULTIPLE_CHOICE,
    title: '@{lab.sm.data.c2.q7.title}',
    description: '@{lab.sm.data.c2.q7.description}',
    hardcoreness: HardcorenessMetrics.MILD,
    bianswer: true,
    choices: [
      '@{lab.sm.data.shared.ua0}',
      '@{lab.sm.data.shared.ua1}',
      '@{lab.sm.data.shared.ua2}',
      '@{lab.sm.data.shared.ua3}',
    ],
    dependencies: {
      '2.0': [ 0, 1, 2 ],
    },
  }, {
    questionId: 8,
    type: MULTIPLE_CHOICE,
    title: '@{lab.sm.data.c2.q8.title}',
    description: '@{lab.sm.data.c2.q8.description}',
    hardcoreness: HardcorenessMetrics.MILD,
    bianswer: true,
    choices: [
      '@{lab.sm.data.shared.ua0}',
      '@{lab.sm.data.shared.ua1}',
      '@{lab.sm.data.shared.ua2}',
      '@{lab.sm.data.shared.ua3}',
    ],
    dependencies: {
      '2.0': [ 0, 1, 2 ],
    },
  }],
};
