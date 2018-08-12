import { ICategory } from './categories';
import { HardcorenessMetrics, QuestionType } from './Enums';
const MULTIPLE_CHOICE = QuestionType.MULTIPLE_CHOICE;
const FILL_BLANK = QuestionType.FILL_BLANK;

export const category0: ICategory = {
  categoryId: 0,
  description: '@{lab.sm.data.c0.description}',
  name: '@{lab.sm.data.c0.name}',
  questions: [{
    questionId: 0,
    type: MULTIPLE_CHOICE,
    title: '@{lab.sm.data.c0.q0.title}',
    description: '@{lab.sm.data.c0.q0.description}',
    hardcoreness: HardcorenessMetrics.UNAVAILABLE,
    bianswer: false,
    uncomparable: true,
    choices: [
      '@{lab.sm.data.c0.q0.a0}',
      '@{lab.sm.data.c0.q0.a1}',
      '@{lab.sm.data.c0.q0.a2}',
    ],
  }, {
    questionId: 1,
    type: MULTIPLE_CHOICE,
    title: '@{lab.sm.data.c0.q1.title}',
    description: '@{lab.sm.data.c0.q1.description}',
    hardcoreness: HardcorenessMetrics.UNAVAILABLE,
    bianswer: false,
    uncomparable: true,
    choices: [
      '@{lab.sm.data.shared.male}',
      '@{lab.sm.data.shared.female}',
      '@{lab.sm.data.shared.other}',
    ],
  }, {
    questionId: 2,
    type: MULTIPLE_CHOICE,
    title: '@{lab.sm.data.c0.q2.title}',
    hardcoreness: HardcorenessMetrics.UNAVAILABLE,
    bianswer: false,
    uncomparable: true,
    choices: [
      '@{lab.sm.data.shared.have}',
      '@{lab.sm.data.shared.haveNot}',
    ],
    dependencies: {
      0.1: [ 0, 2 ],
    },
  }, {
    questionId: 3,
    type: MULTIPLE_CHOICE,
    title: '@{lab.sm.data.c0.q3.title}',
    hardcoreness: HardcorenessMetrics.UNAVAILABLE,
    bianswer: false,
    uncomparable: true,
    choices: [
      '@{lab.sm.data.shared.can}',
      '@{lab.sm.data.shared.cannot}',
    ],
    dependencies: {
      0.1: [ 0, 2 ],
      0.2: [ 0 ],
    },
  }, {
    questionId: 4,
    type: MULTIPLE_CHOICE,
    title: '@{lab.sm.data.c0.q4.title}',
    hardcoreness: HardcorenessMetrics.UNAVAILABLE,
    bianswer: false,
    uncomparable: true,
    choices: [
      '@{lab.sm.data.shared.have}',
      '@{lab.sm.data.shared.haveNot}',
    ],
    dependencies: {
      0.1: [ 1, 2 ],
    },
  }, {
    questionId: 5,
    type: MULTIPLE_CHOICE,
    title: '@{lab.sm.data.c0.q5.title}',
    hardcoreness: HardcorenessMetrics.UNAVAILABLE,
    bianswer: false,
    uncomparable: true,
    choices: [
      '@{lab.sm.data.shared.can}',
      '@{lab.sm.data.shared.cannot}',
    ],
    dependencies: {
      0.1: [ 1, 2 ],
    },
  }, {
    questionId: 6,
    type: MULTIPLE_CHOICE,
    title: '@{lab.sm.data.c0.q6.title}',
    description: '@{lab.sm.data.c0.q6.description}',
    hardcoreness: HardcorenessMetrics.UNAVAILABLE,
    bianswer: true,
    uncomparable: true,
    choices: [
      '@{lab.sm.data.shared.male}',
      '@{lab.sm.data.shared.female}',
      '@{lab.sm.data.shared.other}',
    ],
  }, {
    questionId: 7,
    type: FILL_BLANK,
    title: '@{lab.sm.data.c0.q7.title}',
    description: '@{lab.sm.data.c0.q7.description}',
    hardcoreness: HardcorenessMetrics.UNAVAILABLE,
    bianswer: true,
    uncomparable: true,
    label: '@{lab.sm.data.c0.q7.label}',
  }],
};
