import {
  Button,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Modal,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import _ from 'lodash';
import moment from 'moment';
import React from 'react';
import { connect } from 'react-redux';
import { actions } from 'src/store/definitions/survey';
import { InviteForm } from './InviteForm';
import { Item, Wrapper } from './styles';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
    outline: '0',
    position: 'relative',
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    borderRadius: '10px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  closeButton: {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
  },
}));

export const OrganisationInvitations = ({
  requestSync,
  surveyResults,
  surveyResultsCount,
}) => {
  React.useEffect(() => {
    requestSync();
  }, [requestSync]);

  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id='simple-modal-title'>Invite User</h2>
      <span className={classes.closeButton} onClick={handleClose}>
        X
      </span>

      <p id='simple-modal-description'>
        Invite people to take the survey through your organisation. Enter the
        name and email address of someone you would like to invite.
      </p>
      <InviteForm />
    </div>
  );

  return (
    <Wrapper>
      <h3>Invitations</h3>
      <Button
        variant='contained'
        color='primary'
        onClick={handleOpen}
        className='invite-button'>
        Invite a user
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'>
        {body}
      </Modal>

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
});

export default connect(mapState, mapDispatch)(OrganisationInvitations);
