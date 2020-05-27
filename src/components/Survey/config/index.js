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
    nextOverrides: {
      healthy: '/survey/confirmation',
      notHealthly: '/survey/fever',
      sick: '/survey/fever',
    },
  },
  confirmation: {
    title:
      'Are you sure that you do not have any fever, sore throat, coughing or shortness of breath?',
    content: '',
    layout: 'question',
    options: options.yesNo,
    next: '/survey/fever',
    nextOverrides: { yes: '/survey/oath', no: '/survey/fever' },
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
    nextOverrides: { yes: '/survey/cough-severity', no: '/survey/throat' },
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
    nextOverrides: {
      yes: '/survey/throat-severity',
      no: '/survey/breathlessness',
    },
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
    nextOverrides: {
      yes: '/survey/breathlessness-severity',
      no: '/survey/atypical-symptoms',
    },
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
    next: '/survey/oath',
  },
  oath: {
    title:
      'Please confirm that the information you shared is accurate and true to the best of your knowledge.',
    content: '',
    layout: 'question',
    options: options.oath,
    next: '/survey/outcome',
    buttonTextOverride: 'Confirm',
  },
  outcome: {
    title: 'Your Results',
    layout: 'outcome',
    options: options.outcomes,
  },
};
