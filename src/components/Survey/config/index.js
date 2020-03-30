import options from './options';

export default {
  welcome: {
    stepKey: 'welcome',
    title: "Let's Get Started",
    content:
      'By Tracking your symptoms daily, you can find out if you should get tested.  Please be honest when answering our questions. Fake information will lead to unnecessary testing.',
    layout: 'backdrop',
    next: '/survey/feeling',
    nextText: "I'm ready",
    options: null,
  },
  feeling: {
    stepKey: 'How You Feel',
    title: 'How are you feeling?',
    content: '',
    layout: 'question',
    questionType: 'single',
    options: options.feeling,
    next: '/survey/illness',
    nextText: '',
  },
  illness: {
    stepKey: 'Restaurant Type',
    title: 'How are you feeling?',
    content: '',
    layout: 'question',
    options: null,
  },
  ncid: {
    stepKey: 'Restaurant Type',
    title: 'How are you feeling?',
    content: '',
    layout: 'question',
    options: null,
  },
  additional: {
    stepKey: 'Restaurant Type',
    title: 'How are you feeling?',
    content: '',
    layout: 'question',
    options: null,
  },
  severity: {
    stepKey: 'Restaurant Type',
    title: 'How are you feeling?',
    content: '',
    layout: 'question',
    options: null,
  },
  travel: {
    stepKey: 'Restaurant Type',
    title: 'How are you feeling?',
    content: '',
    layout: 'question',
    options: null,
  },
  tested: {
    stepKey: 'Restaurant Type',
    title: 'How are you feeling?',
    content: '',
    layout: 'question',
    options: null,
  },
  outcome: {},
};
