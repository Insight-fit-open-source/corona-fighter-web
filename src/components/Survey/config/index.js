import options from './options';

export default {
  welcome: {
    title: "Let's Get Started",
    content:
      'By Tracking your symptoms daily, you can find out if you should get tested.  Please be honest when answering our questions. Fake information will lead to unnecessary testing.',
    layout: 'backdrop',
    next: '/survey/feeling',
    nextText: "I'm ready",
    options: null,
  },
  feeling: {
    title: 'How are you feeling?',
    content: '',
    layout: 'question',
    options: options.feeling,
    next: '/survey/illness',
  },
  illness: {
    title: 'Do you have severe symptoms like:',
    content: '',
    layout: 'question',
    options: options.illness,
    next: '/survey/ncid',
  },
  ncid: {
    title: 'Do you have any of these symptoms?',
    content: '',
    layout: 'question',
    options: options.ncid,
    next: '/survey/additional',
  },
  additional: {
    title: 'Do you have any of these additional symptoms?',
    content: '',
    layout: 'question',
    options: options.additional,
    next: '/survey/severity',
  },
  severity: {
    title: 'Are your symptoms more severe today than they were before?',
    content: '',
    layout: 'question',
    options: options.severity,
    next: '/survey/travel',
  },
  travel: {
    title: 'Have you travelled or come into contact with Covid19 recently?',
    content: '',
    layout: 'question',
    options: options.travel,
    next: '/survey/outcome',
  },
  outcome: {
    title: 'Your Results',
    layout: 'outcome',
    options: options.outcomes,
  },
};
