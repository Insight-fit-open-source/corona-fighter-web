import options from './options';

export default {
  welcome: {
    title: "Let's see how you're doing today.",
    content:
      'By tracking your symptoms daily, you can find out if you should get tested. Please be honest when answering the survey. Fake information will lead to unnecessary testing.',
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
    next: '/survey/fever',
  },
  fever: {
    title:
      'Do you have or have you recently had a fever? (feeling very hot or cold, shivering or chills, sweats)?',
    content: '',
    layout: 'question',
    options: options.yesNo,
    next: '/survey/fever-severity',
    nextOverrides: { yes: '/survey/fever-severity', no: '/survey/cough' },
  },
  'fever-severity': {
    title: 'How severe is your fever?',
    content: '',
    layout: 'question',
    options: options.mildModerateSevere,
    next: '/survey/cough',
  },
  cough: {
    title: 'Do you have a *cough* that started recently?',
    content: '',
    layout: 'question',
    options: options.yesNo,
    next: '/survey/cough-severity',
  },
  'cough-severity': {
    title: 'How severe is your cough?',
    content: '',
    layout: 'question',
    options: options.mildModerateSevere,
    next: '/survey/throat',
  },
  throat: {
    title: 'Do you have a *sore throat* or pain when swallowing?',
    content: '',
    layout: 'question',
    options: options.yesNo,
    next: '/survey/throat-severity',
  },
  'throat-severity': {
    title: 'How severe is your sore throat?',
    content: '',
    layout: 'question',
    options: options.mildModerateSevere,
    next: '/survey/breathlessness',
  },
  breathlessness: {
    title:
      'Have you recently developed any *breathlessness* or difficulty in breathing?',
    content: '',
    layout: 'question',
    options: options.yesNo,
    next: '/survey/breathlessness-severity',
  },
  'breathlessness-severity': {
    title: 'How severe is your breathlessness?',
    content: '',
    layout: 'question',
    options: options.mildModerateSevere,
    next: '/survey/atypical-symptoms',
  },
  'atypical-symptoms': {
    title: 'Do you have any of these other symptoms?',
    content: '',
    layout: 'question',
    options: options.additional,
    next: '/survey/outcome',
  },
  // 'severe-symptoms': {
  //   title: 'Do you have any of these severe symptoms like:',
  //   content: '',
  //   layout: 'question',
  //   options: options.illness,
  //   next: '/survey/typical-symptoms',
  // },
  // 'typical-symptoms': {
  //   title: 'Have you had a **sudden onset** of any of the following symptoms?',
  //   content: '',
  //   layout: 'question',
  //   options: options.ncid,
  //   next: '/survey/atypical-symptoms',
  // },

  // severity: {
  //   title: 'How are your symptoms changing over time?',
  //   content: '',
  //   layout: 'question',
  //   options: options.severity,
  //   next: '/survey/travel-contact',
  // },
  // 'travel-contact': {
  //   title:
  //     'Have you travelled or come into contact with COVID-19 in the past 14 days?',
  //   content: '',
  //   layout: 'question',
  //   options: options.travel,
  //   next: '/survey/tested',
  // },
  // tested: {
  //   title: 'Have you had a test for COVID-19?',
  //   content: '',
  //   layout: 'question',
  //   options: options.tested,
  //   next: '/survey/behavior',
  // },
  // behavior: {
  //   title: 'Where are you at the moment',
  //   content: '',
  //   layout: 'question',
  //   options: options.behaviour,
  //   next: '/survey/outcome',
  // },
  outcome: {
    title: 'Your Results',
    layout: 'outcome',
    options: options.outcomes,
  },
};
