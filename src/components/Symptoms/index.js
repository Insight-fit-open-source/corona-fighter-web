import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import moment from 'moment';

import { actions } from 'src/store/definitions/survey';

import { Wrapper, Item } from './styles';

export const Symptoms = ({
  requestSync,
  surveyResults,
  surveyResultsCount,
}) => {
  React.useEffect(() => {
    requestSync();
  }, [requestSync]);

  return (
    <Wrapper>
      {surveyResultsCount
        ? _(surveyResults)
            .keys()
            .sort()
            .reverse()
            .map(key =>
              surveyResults[key].outcome && surveyResults[key].outcome.body ? (
                <Item key={key} severity={surveyResults[key].outcome.severity}>
                  <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} className={surveyResults[key].outcome.severity}>
                      <Typography variant='body1'>
                        {surveyResults[key].outcome.title} -{' '}
                        <small>
                          {moment.unix(key / 1000).fromNow()}
                        </small>
                      </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <div className='panel-inner'>
                        <Typography variant='body1'>
                          {surveyResults[key].outcome.testStatus}
                        </Typography>
                        <Typography variant='body1'>
                          {surveyResults[key].outcome.body}
                        </Typography>
                      </div>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                </Item>
              ) : null,
            )
            .value()
        : null}
    </Wrapper>
  );
};

const mapState = state => ({
  surveyResults: state.survey.surveyResults,
  surveyResultsCount: _.values(state.survey.surveyResults).length > 0,
});
const mapDispatch = dispatch => ({
  requestSync: () => dispatch(actions.surveySyncRequested()),
});

export default connect(mapState, mapDispatch)(Symptoms);
