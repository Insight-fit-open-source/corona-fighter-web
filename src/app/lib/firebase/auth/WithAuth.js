import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

/**
 * Wrap any component with this HOC to get a `isAuthenticated` boolean, `user`
 * object, and `userId` string made available on the props of the wrapped component.
 * @param {{React.FC<AuthWrapperProps & { WrappedComponent: React.ReactType; }>}} WrappedComponent
 * @returns {{React.ComponentType<{ isAuthenticated: boolean; user: object; userId: string; }>}}
 */
const WithAuth = WrappedComponent => {
  return props => <WrappedComponent {...props} />;
};

const mapStateToProps = state => ({
  isAuthenticated: !!(state.auth.user && state.auth.user.uid),
  user: state.auth.user,
  userId: state.auth.user ? state.auth.user.uid : '',
  authInProcess: state.auth.authInProcess,
});

export default compose(connect(mapStateToProps, null), WithAuth);
