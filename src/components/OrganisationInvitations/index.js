import {
  Button,
  ExpansionPanel,
  ExpansionPanelSummary,
  Modal,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import _ from 'lodash';
import React from 'react';
import FirestoreHelper from 'src/app/helpers/firestoreHelper';
import { InviteForm } from './InviteForm';
import { Item, Wrapper } from './styles';

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

export const OrganisationInvitations = ({ userId }) => {
  React.useEffect(() => {
    testLoadData();
  }, []);

  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [invitations, setInvitations] = React.useState([]);

  const testLoadData = async () => {
    const invs = await FirestoreHelper.GetOrganisationInvitations(userId);
    setInvitations(invs);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const removeInvitation = function(userId) {
    console.log('TEST', userId);
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

      {console.log(invitations[0])}
      {_(invitations)
        .map(invite => (
          <Item key={invite.invitationCode}>
            <ExpansionPanel expanded={false}>
              <ExpansionPanelSummary
                className={invite.invitationAccepted ? 'normal' : 'warn'}>
                <Typography variant='body1'>
                  {invite.userEmailAddress}
                  {/* <small>{moment.unix(invite.dateSent.seconds).format("dddd, MMMM Do YYYY, h:mm:ss a")}</small> */}
                  <small>
                    {invite.invitationAccepted
                      ? 'Invitation Accepted'
                      : 'Invitation Pending'}
                  </small>
                </Typography>
                {/* disabled={isSubmitting} */}
                {/* onClick={submitForm} */}
                <Button
                  variant='outlined'
                  color='primary'
                  style={{ marginLeft: 'auto', marginRight: '5px' }}
                  onClick={e => removeInvitation(invite.userEmailAddress)}>
                  Remove
                </Button>
              </ExpansionPanelSummary>
            </ExpansionPanel>
          </Item>
        ))
        .value()}
    </Wrapper>
  );
};

export default OrganisationInvitations;
