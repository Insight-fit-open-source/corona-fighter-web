export default {
  _config: {
    exclusive: true,
  },
  outcome1: {
    title: 'Get medical attention as soon as possible.',
    testStatus:
      'You likely require urgent testing and medical care, If you are not already receiving treatment.',
    body:
      'You have one or more severe symptoms associated with COVID-19. You may need urgent medical care. Please contact your nearest emergency care facility.',
    severity: 'severe',
  },
  outcome2: {
    title: 'You need to be tested for COVID-19.',
    testStatus:
      ' You are eligible for testing with a referral note, contact a doctor immediately.',
    body:
      'You have symptoms commonly seen in COVID-19 and a possible contact and/or travel history. Please quarantine yourself until such time as testing can be arranged.',
    severity: 'severe',
  },
  outcome3: {
    title: 'You seem healthy and testing is currently unnecessary.',
    testStatus: 'You will be turned away if you attempt to be tested.',
    body:
      'You are well and not displaying any symptoms of COVID-19. Please complete our survey daily to track any symptoms you experience.',
    severity: 'normal',
  },
  outcome4: {
    title: 'Despite possible contact, you do not qualify for testing currently',
    testStatus:
      'You will most likely be turned away if you attempt to be tested.',
    body:
      'There is no need for panic, though as you have had possible contact with a positive patient or have travelled to a high risk area you do need to self-quarantine for 2 weeks. You might need to be tested should you develop symptoms. Use our symptom tracker daily to report symptoms should you experience any.',
    severity: 'warn',
  },
  outcome5: {
    title: 'The NICD does not recommend testing for now.',
    testStatus: 'You will be turned away if you attempt to be tested.',
    body:
      'You are displaying one or more symptoms sometimes seen in COVID-19. However, your symptoms are not considered typical and could be caused by something else. Complete our survey daily to keep track of your symptoms. You should seek medical care if your symptoms worsen.',
    severity: 'warn',
  },
  outcome6: {
    title: 'You do not qualify for testing at the moment.',
    testStatus: 'You will be turned away if you attempt to be tested.',
    body:
      'You are displaying one or more symptoms sometimes seen in COVID-19. Even though you may have a possible positive contact or have travelled to a high risk area, your symptoms are not considered typical of the disease and are more likely caused by something else.There is no need for panic, but, you do need to self-quarantine for 2 weeks. You might need to be tested should you develop symptoms; use our symptom tracker daily to report symptoms.',
    severity: 'warn',
  },
  outcome7: {
    title: 'You do not qualify for testing at the moment.',
    testStatus: 'You will be turned away if you attempt to be tested.',
    body:
      'You have symptoms commonly seen in COVID-19 but no obvious contact with a positive patient. Please remain calm. Your symptoms are most likely due to another cause such as seasonal influenza. Complete our survey daily to keep track of your symptoms. You should seek medical care if your symptoms worsen.',
    severity: 'warn',
  },
};
