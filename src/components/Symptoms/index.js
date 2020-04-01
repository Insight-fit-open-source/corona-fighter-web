import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import moment from 'moment';

import { actions } from 'src/store/definitions/survey';

export const Symptoms = ({
  requestSync,
  surveyResults,
  surveyResultsCount,
}) => {
  console.log(surveyResults);
  console.log(surveyResultsCount);

  React.useEffect(() => {
    requestSync();
  }, [requestSync]);

  return surveyResultsCount ? (
    _(surveyResults)
      .keys()
      .sort()
      .reverse()
      .map(key =>
        surveyResults[key].outcome && surveyResults[key].outcome.body ? (
          <div key={key}>
            <h5>{surveyResults[key].outcome.severity}</h5>
            <p>{surveyResults[key].outcome.body}</p>
          </div>
        ) : null,
      )
      .value()
  ) : null;
};

const mapState = state => ({
  surveyResults: state.survey.surveyResults,
  surveyResultsCount: _.values(state.survey.surveyResults).length > 0,
});
const mapDispatch = dispatch => ({
  requestSync: () => dispatch(actions.surveySyncRequested()),
});

export default connect(mapState, mapDispatch)(Symptoms);
