export default {
  _config: {
    exclusive: true,
  },
  outcome1: {
    title: 'Get medical attention as soon as possible',
    testStatus:
      'Yes, you likely require urgent testing and medical care, If you are not already receiving treatment.',
    body:
      'You have one or more severe symptoms associated with COVID-19. You may need urgent medical care. Please contact your nearest emergency care facility.',
    severity: 'severe',
  },
  outcome2: {
    title: 'You need to be tested for COVID-19',
    testStatus:
      'Yes, you are eligible for testing with a referral note, contact a doctor immediately.',
    body:
      'You have symptoms commonly seen in COVID-19 and a possible contact and/or travel history. You are eligible for testing and are considered high risk for COVID-19. Please quarantine yourself until such time as testing can be arranged.',
    severity: 'severe',
  },
  outcome3: {
    title: 'You seem healthy and testing is currently unnecessary',
    testStatus: 'No, You will be turned away if you attempt to be tested.',
    body:
      'You are well and not displaying any symptoms of COVID-19. Please complete our survey daily to track any symptoms you experience. Please note, this is not a diagnosis.',
    severity: 'normal',
  },
  outcome4: {
    title:
      'Despite possible contact, you do not need COVID-19 testing currently',
    testStatus:
      'No, You will most likely be turned away if you attempt to be tested.',
    body:
      'There is no need for panic, though as you have had possible contact with a positive patient or have travelled to a high risk area you do need to self-quarantine for 2 weeks. You might need to be tested should you develop symptoms. Use our symptom tracker daily to report symptoms should you experience any. Please note, this is not a diagnosis.',
    severity: 'warn',
  },
  outcome5: {
    title: 'The NICD does not recommend testing for now',
    testStatus:
      'No. Its likely you will be turned away if you attempt to be tested.',
    body:
      'You are displaying one or more symptoms sometimes seen in COVID-19. However, your symptoms are not considered typical and could be caused by something else. Complete our survey daily to keep track of your symptoms. You should seek medical care if your symptoms worsen. Please note, this is not a diagnosis.',
    severity: 'warn',
  },
  outcome6: {
    title: 'You do not need COVID-19 testing currently.',
    testStatus:
      'No. Its likely you will be turned away if you attempt to be tested.',
    body:
      'You are displaying one or more symptoms sometimes seen in COVID-19. Even though you may have a possible positive contact or have travelled to a high risk area, your symptoms are not considered typical of the disease and are more likely caused by something else.There is no need for panic, but, you do need to self-quarantine for 2 weeks. You might need to be tested should you develop symptoms; use our symptom tracker daily to report symptoms. Please note, this is not a diagnosis.',
    severity: 'warn',
  },
  outcome7: {
    title: 'The NICD recommends testing based on your symptoms.',
    testStatus:
      'Yes, you are eligible for testing with a referral note, contact a doctor immediately.',
    body:
      'You have symptoms commonly seen in COVID-19. Even though you have no positive contact or travel history, you should still be tested for COVID-19.  Please remain calm, your symptoms may still be due to another cause such as seasonal influenza. Please quarantine yourself until such time as testing can be arranged.',
    severity: 'warn',
  },
};
