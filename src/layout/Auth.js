import React from 'react';
import Styled from './styles';

const AuthLayout = ({ body }) => (
  <Styled.Wrap>
    <Styled.AuthBody>{body}</Styled.AuthBody>
    <Styled.AuthBanner />
  </Styled.Wrap>
);

export default AuthLayout;
