import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import _ from 'lodash';
import moment from 'moment';
import React from 'react';
import { connect } from 'react-redux';
import { actions as orgactions } from 'src/store/definitions/organisation';
import { actions } from 'src/store/definitions/survey';
import { Item, Wrapper } from './styles';

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
                    <ExpansionPanelSummary
                      expandIcon={<ExpandMoreIcon />}
                      className={surveyResults[key].outcome.severity}>
                      <Typography variant='body1'>
                        {surveyResults[key].outcome.title}
                        <small>{moment.unix(key / 1000).fromNow()}</small>
                      </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <div className='panel-inner'>
                        <Typography variant='body1'>
                          <strong>Should I get tested?</strong>
                          <br />
                          {surveyResults[key].outcome.testStatus}
                        </Typography>
                        <Typography variant='body1'>
                          <strong>General Guidance:</strong>
                          <br />
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
  testSync: () => {
    console.log('testing syncing: ', orgactions);
    dispatch(orgactions.organisationDetailsSyncRequested());
  },
});

export default connect(mapState, mapDispatch)(Symptoms);
