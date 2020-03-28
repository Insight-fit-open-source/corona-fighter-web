import React from 'react';
import dynamic from 'next/dynamic';
import { connect } from 'react-redux';

const Auth = dynamic(() => import('src/components/Auth'));

/**
 * Wrap any component with this HOC to get a `isAuthenticated` boolean, `user`
 * object, and `userId` string made available on the props of the wrapped component.
 * @param {{React.FC<AuthWrapperProps & { WrappedComponent: React.ReactType; }>}} WrappedComponent
 * @returns {{React.ComponentType<{ isAuthenticated: boolean; user: object; userId: string; }>}}
 */
const AuthWrapper = props => {
  const {
    user,
    userId,
    isAuthenticated,
    WrappedComponent,
    authInProcess,
    ...otherProps
  } = props;
  // TODO Should show a loader while authInProcess is true
  if (authInProcess) {
    return null;
  }
  return isAuthenticated ? (
    <WrappedComponent
      user={user}
      userId={userId}
      isAuthenticated={isAuthenticated}
      {...otherProps}
    />
  ) : (
    <Auth />
  );
};

const mapStateToProps = state => ({
  isAuthenticated: !!(state.auth.user && state.auth.user.uid),
  user: state.auth.user,
  authInProcess: state.auth.authInProcess,
  userId: state.auth.user ? state.auth.user.uid : '',
});

const WithAuthState = connect(mapStateToProps, null)(AuthWrapper);

const IsProtectedPage = WrappedComponent => {
  return props => {
    return <WithAuthState WrappedComponent={WrappedComponent} {...props} />;
  };
};

export default IsProtectedPage;
