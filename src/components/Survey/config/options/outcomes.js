export default {
  _config: {
    exclusive: true,
  },
  severeOutcome: {
    title: 'Get tested as soon as possible',
    testStatus:
      'Yes, you likely require urgent testing and medical care, If you are not already receiving treatment.',
    body:
      'You have one or more severe symptoms associated with COVID-19. You may need urgent medical care. Please contact your nearest emergency care facility.',
    severity: 'severe',
  },
  normalOutcome: {
    title: 'You seem healthy and testing is currently unnecessary',
    testStatus: 'No, you do not need to get tested for COVID-19.',
    body:
      'You are well and not displaying any symptoms of COVID-19. Please complete our survey daily to track any symptoms you experience. Please note, this is not a diagnosis.',
    severity: 'normal',
  },
  warningOutcome: {
    title: 'The NICD does not recommend testing for now',
    testStatus:
      'No. Its likely you will be turned away if you attempt to be tested.',
    body:
      'You are displaying one or more symptoms sometimes seen in COVID-19. However, your symptoms are not considered typical and could be caused by something else. Complete our survey daily to keep track of your symptoms. You should seek medical care if your symptoms worsen. Please note, this is not a diagnosis.',
    severity: 'warn',
  },
};
