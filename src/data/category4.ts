import { ICategory } from './categories';
import { HardcorenessMetrics, QuestionType } from './Enums';
const MULTIPLE_CHOICE = QuestionType.MULTIPLE_CHOICE;
const FILL_BLANK = QuestionType.FILL_BLANK;

export const category4: ICategory = {
  categoryId: 4,
  name: '@{lab.sm.data.c4.name}',
  description: '@{lab.sm.data.c4.description}',
  questions: [{
    questionId: 0,
    type: MULTIPLE_CHOICE,
    title: '@{lab.sm.data.c4.q0.title}',
    description: '@{lab.sm.data.c4.q0.description}',
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
    title: '@{lab.sm.data.c4.q1.title}',
    description: '@{lab.sm.data.c4.q1.description}',
    hardcoreness: HardcorenessMetrics.MILD,
    bianswer: true,
    choices: [
      '@{lab.sm.data.shared.ua0}',
      '@{lab.sm.data.shared.ua1}',
      '@{lab.sm.data.shared.ua2}',
      '@{lab.sm.data.shared.ua3}',
    ],
    dependencies: {
      '4.0': [ 0, 1, 2 ],
    },
  }, {
    questionId: 2,
    type: MULTIPLE_CHOICE,
    title: '@{lab.sm.data.c4.q2.title}',
    description: '@{lab.sm.data.c4.q2.description}',
    hardcoreness: HardcorenessMetrics.MEDIUM,
    bianswer: true,
    choices: [
      '@{lab.sm.data.shared.ua0}',
      '@{lab.sm.data.shared.ua1}',
      '@{lab.sm.data.shared.ua2}',
      '@{lab.sm.data.shared.ua3}',
    ],
    dependencies: {
      '4.0': [ 0, 1, 2 ],
    },
  }, {
    questionId: 3,
    type: MULTIPLE_CHOICE,
    title: '@{lab.sm.data.c4.q3.title}',
    description: '@{lab.sm.data.c4.q3.description}',
    hardcoreness: HardcorenessMetrics.UNAVAILABLE,
    bianswer: true,
    choices: [
      '@{lab.sm.data.shared.ua0}',
      '@{lab.sm.data.shared.ua1}',
      '@{lab.sm.data.shared.ua2}',
      '@{lab.sm.data.shared.ua3}',
    ],
    dependencies: {
      '4.0': [ 0, 1, 2 ],
    },
  }, {
    questionId: 4,
    type: MULTIPLE_CHOICE,
    title: '@{lab.sm.data.c4.q4.title}',
    description: '@{lab.sm.data.c4.q4.description}',
    hardcoreness: HardcorenessMetrics.MILD,
    bianswer: true,
    choices: [
      '@{lab.sm.data.shared.ua0}',
      '@{lab.sm.data.shared.ua1}',
      '@{lab.sm.data.shared.ua2}',
      '@{lab.sm.data.shared.ua3}',
    ],
    dependencies: {
      '4.0': [ 0, 1, 2 ],
      '4.3': [ 0, 1, 2 ],
    },
  }, {
    questionId: 5,
    type: MULTIPLE_CHOICE,
    title: '@{lab.sm.data.c4.q5.title}',
    description: '@{lab.sm.data.c4.q5.description}',
    hardcoreness: HardcorenessMetrics.MILD,
    bianswer: true,
    choices: [
      '@{lab.sm.data.shared.ua0}',
      '@{lab.sm.data.shared.ua1}',
      '@{lab.sm.data.shared.ua2}',
      '@{lab.sm.data.shared.ua3}',
    ],
    dependencies: {
      '4.0': [ 0, 1, 2 ],
      '4.3': [ 0, 1, 2 ],
    },
  }, {
    questionId: 6,
    type: MULTIPLE_CHOICE,
    title: '@{lab.sm.data.c4.q6.title}',
    description: '@{lab.sm.data.c4.q6.description}',
    warning: '@{lab.sm.data.c4.q6.warning}',
    hardcoreness: HardcorenessMetrics.EXTREME,
    bianswer: true,
    choices: [
      '@{lab.sm.data.shared.ua0}',
      '@{lab.sm.data.shared.ua1}',
      '@{lab.sm.data.shared.ua2}',
      '@{lab.sm.data.shared.ua3}',
    ],
    dependencies: {
      '4.0': [ 0, 1, 2 ],
      '4.3': [ 0, 1, 2 ],
    },
  }, {
    questionId: 7,
    type: MULTIPLE_CHOICE,
    title: '@{lab.sm.data.c4.q7.title}',
    description: '@{lab.sm.data.c4.q7.description}',
    warning: '@{lab.sm.data.c4.q7.warning}',
    hardcoreness: HardcorenessMetrics.MEDIUM,
    bianswer: true,
    choices: [
      '@{lab.sm.data.shared.ua0}',
      '@{lab.sm.data.shared.ua1}',
      '@{lab.sm.data.shared.ua2}',
      '@{lab.sm.data.shared.ua3}',
    ],
    dependencies: {
      '4.0': [ 0, 1, 2 ],
    },
  }, {
    questionId: 8,
    type: MULTIPLE_CHOICE,
    title: '@{lab.sm.data.c4.q8.title}',
    description: '@{lab.sm.data.c4.q8.description}',
    warning: '@{lab.sm.data.c4.q8.warning}',
    hardcoreness: HardcorenessMetrics.EXTREME,
    bianswer: true,
    choices: [
      '@{lab.sm.data.shared.ua0}',
      '@{lab.sm.data.shared.ua1}',
      '@{lab.sm.data.shared.ua2}',
      '@{lab.sm.data.shared.ua3}',
    ],
    dependencies: {
      '4.0': [ 0, 1, 2 ],
    },
  }, {
    questionId: 9,
    type: MULTIPLE_CHOICE,
    title: '@{lab.sm.data.c4.q9.title}',
    description: '@{lab.sm.data.c4.q9.description}',
    hardcoreness: HardcorenessMetrics.EXTREME,
    bianswer: true,
    choices: [
      '@{lab.sm.data.shared.ua0}',
      '@{lab.sm.data.shared.ua1}',
      '@{lab.sm.data.shared.ua2}',
      '@{lab.sm.data.shared.ua3}',
    ],
    dependencies: {
      '4.0': [ 0, 1, 2 ],
      '4.8': [ 0, 1, 2 ],
    },
  }, {
    questionId: 10,
    type: MULTIPLE_CHOICE,
    title: '@{lab.sm.data.c4.q10.title}',
    description: '@{lab.sm.data.c4.q10.description}',
    hardcoreness: HardcorenessMetrics.EXTREME,
    bianswer: true,
    choices: [
      '@{lab.sm.data.shared.ua0}',
      '@{lab.sm.data.shared.ua1}',
      '@{lab.sm.data.shared.ua2}',
      '@{lab.sm.data.shared.ua3}',
    ],
    dependencies: {
      '4.0': [ 0, 1, 2 ],
      '4.8': [ 0, 1, 2 ],
      'M:0.4': [ 0 ],
    },
  }, {
    questionId: 11,
    type: MULTIPLE_CHOICE,
    title: '@{lab.sm.data.c4.q11.title}',
    description: '@{lab.sm.data.c4.q11.description}',
    hardcoreness: HardcorenessMetrics.EXTREME,
    bianswer: true,
    choices: [
      '@{lab.sm.data.shared.ua0}',
      '@{lab.sm.data.shared.ua1}',
      '@{lab.sm.data.shared.ua2}',
      '@{lab.sm.data.shared.ua3}',
    ],
    dependencies: {
      '4.0': [ 0, 1, 2 ],
      '4.8': [ 0, 1, 2 ],
      'M:0.4': [ 0 ],
    },
  }],
};
