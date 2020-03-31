import _ from 'lodash';

export default (selection, outcomes) => {
  console.log('selection', selection);
  console.log('outcomes', outcomes);
  const results = _.reduce(
    Object.keys(selection).map(key => {
      const result = { key };
      if (
        !_.isArray(selection[key]) ||
        selection[key].length < 1 ||
        _.includes(selection[key], 'none')
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
  console.log('results', results);

  const clear = !results['severe-symptoms'] && !results['typical-symptoms'] && !results['atypical-symptoms'];

  // FIXME: This seems like a bad approach.
  if (results['severe-symptoms']) return outcomes.outcome1;
  if (results['typical-symptoms'] && results['travel-contact']) return outcomes.outcome2;
  if (clear && !results['travel-contact']) return outcomes.outcome3;
  if (clear && results['travel-contact']) return outcomes.outcome4;
  if (results['typical-symptoms'] && !results['travel-contact']) return outcomes.outcome7;
  if (results['atypical-symptoms'] && !results['travel-contact']) return outcomes.outcome5;
  if (results['atypical-symptoms'] && results['travel-contact']) return outcomes.outcome6;
};
