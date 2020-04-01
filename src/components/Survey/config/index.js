import options from './options';

export default {
  welcome: {
    title: "Let's See How You're Doing Today.",
    content:
      'By Tracking your symptoms daily, you can find out if you should get tested.  Please be honest when answering our questions. Fake information will lead to unnecessary testing.',
    layout: 'backdrop',
    next: '/survey/feeling',
    nextText: "I'm ready",
    options: null,
  },
  feeling: {
    title: 'How are you feeling at the moment?',
    content: '',
    layout: 'question',
    options: options.feeling,
    next: '/survey/severe-symptoms',
  },
  'severe-symptoms': {
    title: 'Do you have any of these severe symptoms like:',
    content: '',
    layout: 'question',
    options: options.illness,
    next: '/survey/typical-symptoms',
  },
  'typical-symptoms': {
    title: 'Are any of these symptoms bugging you?',
    content: '',
    layout: 'question',
    options: options.ncid,
    next: '/survey/atypical-symptoms',
  },
  'atypical-symptoms': {
    title: 'Do you have any of these other symptoms?',
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
    next: '/survey/travel-contact',
  },
  'travel-contact': {
    title: 'Have you travelled or come into contact with Covid19 in the past 14 days??',
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
