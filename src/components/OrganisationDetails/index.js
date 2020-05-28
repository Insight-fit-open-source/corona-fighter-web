import React from 'react';
import { connect } from 'react-redux';
import { actions } from 'src/store/definitions/organisation';
import Form from './Form';
import { FormWrap } from './styles';

const OrganisationDetails = props => {
  const {
    isAuthenticated,
    user,
    userId,
    organisationDetailsSyncInProcess,
    requestSync,
    name,
    email,
    updateDetails,
  } = props;

  React.useEffect(() => {
    requestSync();
  }, [requestSync]);

  return (
    <FormWrap>
      <h3>Details</h3>
      <Form
        name={name}
        email={email}
        userId={userId}
        user={user}
        updateDetails={updateDetails}
      />
    </FormWrap>
  );
};

const mapState = state => {
  return {
    name: state.organisation.name,
    email: state.organisation.email,
  };
};

const mapDispatch = dispatch => ({
  requestSync: () => dispatch(actions.organisationDetailsSyncRequested()),
  updateDetails: payload =>
    dispatch(actions.organisationDetailsUpdated(payload)),
});

export default connect(mapState, mapDispatch)(OrganisationDetails);
// export default compose(WithAuth, connect(mapState, mapDispatch))(OrganisationDetails);
