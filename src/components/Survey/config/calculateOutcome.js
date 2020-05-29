import _ from 'lodash';

export default (selection, outcomes) => {
  const results = _.reduce(
    Object.keys(selection).map(key => {
      const result = { key };
      if (
        !_.isArray(selection[key]) ||
        selection[key].length < 1 ||
        _.includes(selection[key], 'none') ||
        _.includes(selection[key], 'no')
      ) {
        result.flag = false;
        return result;
      }

      if (selection[key].length >= 1) {
        result.flag = true;
        return result;
      }
    }),
    (obj, result) => {
      // eslint-disable-next-line no-param-reassign
      obj[result.key] = result.flag;

      return obj;
    },
    {},
  );

  const severeSymptoms =
    results.breathlessness || results.cough || results.throat || results.fever;
  const atypicalSymptoms = results['atypical-symptoms'];

  if (severeSymptoms) return outcomes.severeOutcome;
  if (atypicalSymptoms) return outcomes.warningOutcome;
  return outcomes.normalOutcome;
};
