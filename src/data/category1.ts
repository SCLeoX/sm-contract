import { ICategory } from './categories';
import { HardcorenessMetrics, QuestionType } from './Enums';
const MULTIPLE_CHOICE = QuestionType.MULTIPLE_CHOICE;
const FILL_BLANK = QuestionType.FILL_BLANK;

export const category1: ICategory = {
  categoryId: 1,
  name: '@{lab.sm.data.c1.name}',
  description: '@{lab.sm.data.c1.description}',
  questions: [{
    questionId: 0,
    type: MULTIPLE_CHOICE,
    title: '@{lab.sm.data.c1.q0.title}',
    description: '@{lab.sm.data.c1.q0.description}',
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
    title: '@{lab.sm.data.c1.q1.title}',
    description: '@{lab.sm.data.c1.q1.description}',
    hardcoreness: HardcorenessMetrics.MILD,
    bianswer: true,
    choices: [
      '@{lab.sm.data.shared.ua0}',
      '@{lab.sm.data.shared.ua1}',
      '@{lab.sm.data.shared.ua2}',
      '@{lab.sm.data.shared.ua3}',
    ],
    dependencies: {
      '1.0': [ 0, 1, 2 ],
    },
  }, {
    questionId: 2,
    type: MULTIPLE_CHOICE,
    title: '@{lab.sm.data.c1.q2.title}',
    description: '@{lab.sm.data.c1.q2.description}',
    warning: '@{lab.sm.data.c1.q2.warning}',
    hardcoreness: HardcorenessMetrics.UNAVAILABLE,
    bianswer: true,
    choices: [
      '@{lab.sm.data.shared.ua0}',
      '@{lab.sm.data.shared.ua1}',
      '@{lab.sm.data.shared.ua2}',
      '@{lab.sm.data.shared.ua3}',
    ],
    dependencies: {
      '1.0': [ 0, 1, 2 ],
    },
  }, {
    questionId: 3,
    type: MULTIPLE_CHOICE,
    title: '@{lab.sm.data.c1.q3.title}',
    description: '@{lab.sm.data.c1.q3.description}',
    hardcoreness: HardcorenessMetrics.MILD,
    bianswer: true,
    choices: [
      '@{lab.sm.data.shared.ua0}',
      '@{lab.sm.data.shared.ua1}',
      '@{lab.sm.data.shared.ua2}',
      '@{lab.sm.data.shared.ua3}',
    ],
    dependencies: {
      '1.0': [ 0, 1, 2 ],
      '1.2': [ 0, 1, 2 ],
    },
  }, {
    questionId: 4,
    type: MULTIPLE_CHOICE,
    title: '@{lab.sm.data.c1.q4.title}',
    description: '@{lab.sm.data.c1.q4.description}',
    hardcoreness: HardcorenessMetrics.MILD,
    bianswer: true,
    choices: [
      '@{lab.sm.data.shared.ua0}',
      '@{lab.sm.data.shared.ua1}',
      '@{lab.sm.data.shared.ua2}',
      '@{lab.sm.data.shared.ua3}',
    ],
    dependencies: {
      '1.0': [ 0, 1, 2 ],
      '1.2': [ 0, 1, 2 ],
    },
  }, {
    questionId: 5,
    type: MULTIPLE_CHOICE,
    title: '@{lab.sm.data.c1.q5.title}',
    description: '@{lab.sm.data.c1.q5.description}',
    hardcoreness: HardcorenessMetrics.MILD,
    bianswer: true,
    choices: [
      '@{lab.sm.data.shared.ua0}',
      '@{lab.sm.data.shared.ua1}',
      '@{lab.sm.data.shared.ua2}',
      '@{lab.sm.data.shared.ua3}',
    ],
    dependencies: {
      '1.0': [ 0, 1, 2 ],
      '1.2': [ 0, 1, 2 ],
    },
  }, {
    questionId: 6,
    type: MULTIPLE_CHOICE,
    title: '@{lab.sm.data.c1.q6.title}',
    description: '@{lab.sm.data.c1.q6.description}',
    hardcoreness: HardcorenessMetrics.MILD,
    bianswer: true,
    choices: [
      '@{lab.sm.data.shared.ua0}',
      '@{lab.sm.data.shared.ua1}',
      '@{lab.sm.data.shared.ua2}',
      '@{lab.sm.data.shared.ua3}',
    ],
    dependencies: {
      '1.0': [ 0, 1, 2 ],
      '1.2': [ 0, 1, 2 ],
    },
  }, {
    questionId: 7,
    type: MULTIPLE_CHOICE,
    title: '@{lab.sm.data.c1.q7.title}',
    description: '@{lab.sm.data.c1.q7.description}',
    warning: '@{lab.sm.data.c1.q7.warning}',
    hardcoreness: HardcorenessMetrics.MILD,
    bianswer: true,
    choices: [
      '@{lab.sm.data.shared.ua0}',
      '@{lab.sm.data.shared.ua1}',
      '@{lab.sm.data.shared.ua2}',
      '@{lab.sm.data.shared.ua3}',
    ],
    dependencies: {
      '1.0': [ 0, 1, 2 ],
      '1.2': [ 0, 1, 2 ],
    },
  }, {
    questionId: 8,
    type: MULTIPLE_CHOICE,
    title: '@{lab.sm.data.c1.q8.title}',
    description: '@{lab.sm.data.c1.q8.description}',
    hardcoreness: HardcorenessMetrics.MILD,
    bianswer: true,
    choices: [
      '@{lab.sm.data.shared.ua0}',
      '@{lab.sm.data.shared.ua1}',
      '@{lab.sm.data.shared.ua2}',
      '@{lab.sm.data.shared.ua3}',
    ],
    dependencies: {
      '1.0': [ 0, 1, 2 ],
      '1.2': [ 0, 1, 2 ],
    },
  }, {
    questionId: 9,
    type: MULTIPLE_CHOICE,
    title: '@{lab.sm.data.c1.q9.title}',
    description: '@{lab.sm.data.c1.q9.description}',
    warning: '@{lab.sm.data.c1.q9.warning}',
    hardcoreness: HardcorenessMetrics.MEDIUM,
    bianswer: true,
    choices: [
      '@{lab.sm.data.shared.ua0}',
      '@{lab.sm.data.shared.ua1}',
      '@{lab.sm.data.shared.ua2}',
      '@{lab.sm.data.shared.ua3}',
    ],
    dependencies: {
      '1.0': [ 0, 1, 2 ],
      '1.2': [ 0, 1, 2 ],
    },
  }, {
    questionId: 10,
    type: MULTIPLE_CHOICE,
    title: '@{lab.sm.data.c1.q10.title}',
    hardcoreness: HardcorenessMetrics.MILD,
    bianswer: true,
    choices: [
      '@{lab.sm.data.shared.ua0}',
      '@{lab.sm.data.shared.ua1}',
      '@{lab.sm.data.shared.ua2}',
      '@{lab.sm.data.shared.ua3}',
    ],
    dependencies: {
      '1.0': [ 0, 1, 2 ],
    },
  }, {
    questionId: 11,
    type: MULTIPLE_CHOICE,
    title: '@{lab.sm.data.c1.q11.title}',
    hardcoreness: HardcorenessMetrics.MILD,
    bianswer: true,
    choices: [
      '@{lab.sm.data.shared.ua0}',
      '@{lab.sm.data.shared.ua1}',
      '@{lab.sm.data.shared.ua2}',
      '@{lab.sm.data.shared.ua3}',
    ],
    dependencies: {
      '1.0': [ 0, 1, 2 ],
    },
  }, {
    questionId: 12,
    type: MULTIPLE_CHOICE,
    title: '@{lab.sm.data.c1.q12.title}',
    description: '@{lab.sm.data.c1.q12.description}',
    hardcoreness: HardcorenessMetrics.MILD,
    bianswer: true,
    choices: [
      '@{lab.sm.data.shared.ua0}',
      '@{lab.sm.data.shared.ua1}',
      '@{lab.sm.data.shared.ua2}',
      '@{lab.sm.data.shared.ua3}',
    ],
    dependencies: {
      '1.0': [ 0, 1, 2 ],
    },
  }, {
    questionId: 13,
    type: MULTIPLE_CHOICE,
    title: '@{lab.sm.data.c1.q13.title}',
    description: '@{lab.sm.data.c1.q13.description}',
    hardcoreness: HardcorenessMetrics.MILD,
    bianswer: true,
    choices: [
      '@{lab.sm.data.shared.ua0}',
      '@{lab.sm.data.shared.ua1}',
      '@{lab.sm.data.shared.ua2}',
      '@{lab.sm.data.shared.ua3}',
    ],
    dependencies: {
      '1.0': [ 0, 1, 2 ],
    },
  }, {
    questionId: 14,
    type: MULTIPLE_CHOICE,
    title: '@{lab.sm.data.c1.q14.title}',
    description: '@{lab.sm.data.c1.q14.description}',
    hardcoreness: HardcorenessMetrics.MEDIUM,
    bianswer: true,
    choices: [
      '@{lab.sm.data.shared.ua0}',
      '@{lab.sm.data.shared.ua1}',
      '@{lab.sm.data.shared.ua2}',
      '@{lab.sm.data.shared.ua3}',
    ],
    dependencies: {
      '1.0': [ 0, 1, 2 ],
    },
  }],
};
