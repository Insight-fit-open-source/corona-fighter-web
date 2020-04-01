import React from 'react';

import VirusBg from 'src/components/common/VirusBg';
import Styled from './styles';

const AuthLayout = ({ children }) => (
  <Styled.Wrap>
    <Styled.AuthBody>{children}</Styled.AuthBody>
    <VirusBg />
  </Styled.Wrap>
);

export default AuthLayout;
