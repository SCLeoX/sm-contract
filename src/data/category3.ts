import { ICategory } from './categories';
import { HardcorenessMetrics, QuestionType } from './Enums';
const MULTIPLE_CHOICE = QuestionType.MULTIPLE_CHOICE;
const FILL_BLANK = QuestionType.FILL_BLANK;

export const category3: ICategory = {
  categoryId: 3,
  name: '@{lab.sm.data.c3.name}',
  description: '@{lab.sm.data.c3.description}',
  questions: [{
    questionId: 0,
    type: MULTIPLE_CHOICE,
    title: '@{lab.sm.data.c3.q0.title}',
    description: '@{lab.sm.data.c3.q0.description}',
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
    title: '@{lab.sm.data.c3.q1.title}',
    description: '@{lab.sm.data.c3.q1.description}',
    hardcoreness: HardcorenessMetrics.MILD,
    bianswer: true,
    choices: [
      '@{lab.sm.data.shared.ua0}',
      '@{lab.sm.data.shared.ua1}',
      '@{lab.sm.data.shared.ua2}',
      '@{lab.sm.data.shared.ua3}',
    ],
    dependencies: {
      '3.0': [ 0, 1, 2 ],
    },
  }, {
    questionId: 2,
    type: MULTIPLE_CHOICE,
    title: '@{lab.sm.data.c3.q2.title}',
    description: '@{lab.sm.data.c3.q2.description}',
    hardcoreness: HardcorenessMetrics.MILD,
    bianswer: true,
    choices: [
      '@{lab.sm.data.shared.ua0}',
      '@{lab.sm.data.shared.ua1}',
      '@{lab.sm.data.shared.ua2}',
      '@{lab.sm.data.shared.ua3}',
    ],
    dependencies: {
      '3.0': [ 0, 1, 2 ],
    },
  }, {
    questionId: 3,
    type: MULTIPLE_CHOICE,
    title: '@{lab.sm.data.c3.q3.title}',
    description: '@{lab.sm.data.c3.q3.description}',
    hardcoreness: HardcorenessMetrics.MILD,
    bianswer: true,
    choices: [
      '@{lab.sm.data.shared.ua0}',
      '@{lab.sm.data.shared.ua1}',
      '@{lab.sm.data.shared.ua2}',
      '@{lab.sm.data.shared.ua3}',
    ],
    dependencies: {
      '3.0': [ 0, 1, 2 ],
      '3.2': [ 0, 1, 2 ],
      'M:0.4': [ 0 ],
    },
  }, {
    questionId: 4,
    type: MULTIPLE_CHOICE,
    title: '@{lab.sm.data.c3.q4.title}',
    description: '@{lab.sm.data.c3.q4.description}',
    hardcoreness: HardcorenessMetrics.MILD,
    bianswer: false,
    choices: [
      '@{lab.sm.data.c3.q4.a0}',
      '@{lab.sm.data.c3.q4.a1}',
      '@{lab.sm.data.c3.q4.a2}',
      '@{lab.sm.data.c3.q4.a3}',
      '@{lab.sm.data.c3.q4.a4}',
      '@{lab.sm.data.c3.q4.a5}',
    ],
    uncomparable: true,
    dependencies: {
      '3.0': [ 0, 1, 2 ],
      '3.2': [ 0, 1, 2 ],
      '3.3.M': [ 0, 1, 2 ],
      '0.4': [ 0 ],
    },
  }, {
    questionId: 5,
    type: MULTIPLE_CHOICE,
    title: '@{lab.sm.data.c3.q5.title}',
    description: '@{lab.sm.data.c3.q5.description}',
    hardcoreness: HardcorenessMetrics.MILD,
    bianswer: true,
    choices: [
      '@{lab.sm.data.shared.ua0}',
      '@{lab.sm.data.shared.ua1}',
      '@{lab.sm.data.shared.ua2}',
      '@{lab.sm.data.shared.ua3}',
    ],
    dependencies: {
      '3.0': [ 0, 1, 2 ],
      '3.2': [ 0, 1, 2 ],
      'M:0.4': [ 0 ],
    },
  }, {
    questionId: 6,
    type: MULTIPLE_CHOICE,
    title: '@{lab.sm.data.c3.q6.title}',
    description: '@{lab.sm.data.c3.q6.description}',
    hardcoreness: HardcorenessMetrics.MILD,
    bianswer: true,
    choices: [
      '@{lab.sm.data.shared.ua0}',
      '@{lab.sm.data.shared.ua1}',
      '@{lab.sm.data.shared.ua2}',
      '@{lab.sm.data.shared.ua3}',
    ],
    dependencies: {
      '3.0': [ 0, 1, 2 ],
      '3.2': [ 0, 1, 2 ],
    },
  }, {
    questionId: 7,
    type: MULTIPLE_CHOICE,
    title: '@{lab.sm.data.c3.q7.title}',
    description: '@{lab.sm.data.c3.q7.description}',
    hardcoreness: HardcorenessMetrics.MILD,
    bianswer: false,
    uncomparable: true,
    choices: [
      '@{lab.sm.data.c3.q7.a0}',
      '@{lab.sm.data.c3.q7.a1}',
      '@{lab.sm.data.c3.q7.a2}',
      '@{lab.sm.data.c3.q7.a3}',
      '@{lab.sm.data.c3.q7.a4}',
      '@{lab.sm.data.c3.q7.a5}',
    ],
    dependencies: {
      '3.0': [ 0, 1, 2 ],
      '3.2': [ 0, 1, 2 ],
      '3.6.M': [ 0, 1, 2 ],
    },
  }, {
    questionId: 8,
    type: MULTIPLE_CHOICE,
    title: '@{lab.sm.data.c3.q8.title}',
    description: '@{lab.sm.data.c3.q8.description}',
    hardcoreness: HardcorenessMetrics.MILD,
    bianswer: true,
    choices: [
      '@{lab.sm.data.shared.ua0}',
      '@{lab.sm.data.shared.ua1}',
      '@{lab.sm.data.shared.ua2}',
      '@{lab.sm.data.shared.ua3}',
    ],
    dependencies: {
      '3.0': [ 0, 1, 2 ],
      '3.2': [ 0, 1, 2 ],
    },
  }, {
    questionId: 9,
    type: MULTIPLE_CHOICE,
    title: '@{lab.sm.data.c3.q9.title}',
    description: '@{lab.sm.data.c3.q9.description}',
    hardcoreness: HardcorenessMetrics.MILD,
    bianswer: true,
    choices: [
      '@{lab.sm.data.shared.ua0}',
      '@{lab.sm.data.shared.ua1}',
      '@{lab.sm.data.shared.ua2}',
      '@{lab.sm.data.shared.ua3}',
    ],
    dependencies: {
      '3.0': [ 0, 1, 2 ],
      '3.2': [ 0, 1, 2 ],
      'M:0.2': [ 0 ],
    },
  }, {
    questionId: 10,
    type: MULTIPLE_CHOICE,
    title: '@{lab.sm.data.c3.q10.title}',
    description: '@{lab.sm.data.c3.q10.description}',
    warning: '@{lab.sm.data.c3.q10.warning}',
    hardcoreness: HardcorenessMetrics.MEDIUM,
    bianswer: true,
    choices: [
      '@{lab.sm.data.shared.ua0}',
      '@{lab.sm.data.shared.ua1}',
      '@{lab.sm.data.shared.ua2}',
      '@{lab.sm.data.shared.ua3}',
    ],
    dependencies: {
      '3.0': [ 0, 1, 2 ],
      '3.2': [ 0, 1, 2 ],
    },
  }, {
    questionId: 11,
    type: MULTIPLE_CHOICE,
    title: '@{lab.sm.data.c3.q11.title}',
    description: '@{lab.sm.data.c3.q11.description}',
    hardcoreness: HardcorenessMetrics.MILD,
    bianswer: true,
    choices: [
      '@{lab.sm.data.shared.ua0}',
      '@{lab.sm.data.shared.ua1}',
      '@{lab.sm.data.shared.ua2}',
      '@{lab.sm.data.shared.ua3}',
    ],
    dependencies: {
      '3.0': [ 0, 1, 2 ],
    },
  }, {
    questionId: 12,
    type: MULTIPLE_CHOICE,
    title: '@{lab.sm.data.c3.q12.title}',
    description: '@{lab.sm.data.c3.q12.description}',
    hardcoreness: HardcorenessMetrics.MILD,
    bianswer: true,
    choices: [
      '@{lab.sm.data.shared.ua0}',
      '@{lab.sm.data.shared.ua1}',
      '@{lab.sm.data.shared.ua2}',
      '@{lab.sm.data.shared.ua3}',
    ],
    dependencies: {
      '3.0': [ 0, 1, 2 ],
      '3.11': [ 0, 1, 2 ],
      'M:0.4': [ 0 ],
    },
  }, {
    questionId: 13,
    type: MULTIPLE_CHOICE,
    title: '@{lab.sm.data.c3.q13.title}',
    description: '@{lab.sm.data.c3.q13.description}',
    hardcoreness: HardcorenessMetrics.MILD,
    bianswer: true,
    choices: [
      '@{lab.sm.data.shared.ua0}',
      '@{lab.sm.data.shared.ua1}',
      '@{lab.sm.data.shared.ua2}',
      '@{lab.sm.data.shared.ua3}',
    ],
    dependencies: {
      '3.0': [ 0, 1, 2 ],
      '3.11': [ 0, 1, 2 ],
    },
  }, {
    questionId: 14,
    type: MULTIPLE_CHOICE,
    title: '@{lab.sm.data.c3.q14.title}',
    description: '@{lab.sm.data.c3.q14.description}',
    warning: '@{lab.sm.data.c3.q14.warning}',
    hardcoreness: HardcorenessMetrics.MILD,
    bianswer: true,
    choices: [
      '@{lab.sm.data.shared.ua0}',
      '@{lab.sm.data.shared.ua1}',
      '@{lab.sm.data.shared.ua2}',
      '@{lab.sm.data.shared.ua3}',
    ],
    dependencies: {
      '3.0': [ 0, 1, 2 ],
    },
  }, {
    questionId: 15,
    type: MULTIPLE_CHOICE,
    title: '@{lab.sm.data.c3.q15.title}',
    description: '@{lab.sm.data.c3.q15.description}',
    hardcoreness: HardcorenessMetrics.MILD,
    bianswer: true,
    choices: [
      '@{lab.sm.data.shared.ua0}',
      '@{lab.sm.data.shared.ua1}',
      '@{lab.sm.data.shared.ua2}',
      '@{lab.sm.data.shared.ua3}',
    ],
    dependencies: {
      '3.0': [ 0, 1, 2 ],
      '3.14': [ 0, 1, 2 ],
    },
  }, {
    questionId: 16,
    type: MULTIPLE_CHOICE,
    title: '@{lab.sm.data.c3.q16.title}',
    description: '@{lab.sm.data.c3.q16.description}',
    hardcoreness: HardcorenessMetrics.MILD,
    bianswer: true,
    choices: [
      '@{lab.sm.data.shared.ua0}',
      '@{lab.sm.data.shared.ua1}',
      '@{lab.sm.data.shared.ua2}',
      '@{lab.sm.data.shared.ua3}',
    ],
    dependencies: {
      '3.0': [ 0, 1, 2 ],
      '3.14': [ 0, 1, 2 ],
      'M:0.4': [ 0 ],
    },
  }, {
    questionId: 17,
    type: MULTIPLE_CHOICE,
    title: '@{lab.sm.data.c3.q17.title}',
    description: '@{lab.sm.data.c3.q17.description}',
    hardcoreness: HardcorenessMetrics.MILD,
    bianswer: true,
    choices: [
      '@{lab.sm.data.shared.ua0}',
      '@{lab.sm.data.shared.ua1}',
      '@{lab.sm.data.shared.ua2}',
      '@{lab.sm.data.shared.ua3}',
    ],
    dependencies: {
      '3.0': [ 0, 1, 2 ],
      '3.14': [ 0, 1, 2 ],
      'M:0.2': [ 0 ],
    },
  }, {
    questionId: 18,
    type: MULTIPLE_CHOICE,
    title: '@{lab.sm.data.c3.q18.title}',
    description: '@{lab.sm.data.c3.q18.description}',
    warning: '@{lab.sm.data.c3.q18.warning}',
    hardcoreness: HardcorenessMetrics.MEDIUM,
    bianswer: true,
    choices: [
      '@{lab.sm.data.shared.ua0}',
      '@{lab.sm.data.shared.ua1}',
      '@{lab.sm.data.shared.ua2}',
      '@{lab.sm.data.shared.ua3}',
    ],
    dependencies: {
      '3.0': [ 0, 1, 2 ],
      '3.14': [ 0, 1, 2 ],
    },
  }, {
    questionId: 19,
    type: MULTIPLE_CHOICE,
    title: '@{lab.sm.data.c3.q19.title}',
    description: '@{lab.sm.data.c3.q19.description}',
    hardcoreness: HardcorenessMetrics.MILD,
    bianswer: true,
    choices: [
      '@{lab.sm.data.shared.ua0}',
      '@{lab.sm.data.shared.ua1}',
      '@{lab.sm.data.shared.ua2}',
      '@{lab.sm.data.shared.ua3}',
    ],
    dependencies: {
      '3.0': [ 0, 1, 2 ],
      '3.14': [ 0, 1, 2 ],
      'M:0.4': [ 0 ],
    },
  }, {
    questionId: 20,
    type: MULTIPLE_CHOICE,
    title: '@{lab.sm.data.c3.q20.title}',
    description: '@{lab.sm.data.c3.q20.description}',
    hardcoreness: HardcorenessMetrics.MILD,
    bianswer: true,
    choices: [
      '@{lab.sm.data.shared.ua0}',
      '@{lab.sm.data.shared.ua1}',
      '@{lab.sm.data.shared.ua2}',
      '@{lab.sm.data.shared.ua3}',
    ],
    dependencies: {
      '3.0': [ 0, 1, 2 ],
      '3.14': [ 0, 1, 2 ],
    },
  }, {
    questionId: 21,
    type: MULTIPLE_CHOICE,
    title: '@{lab.sm.data.c3.q21.title}',
    description: '@{lab.sm.data.c3.q21.description}',
    warning: '@{lab.sm.data.c3.q21.warning}',
    hardcoreness: HardcorenessMetrics.MEDIUM,
    bianswer: true,
    choices: [
      '@{lab.sm.data.shared.ua0}',
      '@{lab.sm.data.shared.ua1}',
      '@{lab.sm.data.shared.ua2}',
      '@{lab.sm.data.shared.ua3}',
    ],
    dependencies: {
      '3.0': [ 0, 1, 2 ],
    },
  }],
};
