import React from 'react';
import Styled from './styles';

const AuthLayout = ({ children }) => (
  <Styled.Wrap>
    <Styled.AuthBody>{children}</Styled.AuthBody>
  </Styled.Wrap>
);

export default AuthLayout;
