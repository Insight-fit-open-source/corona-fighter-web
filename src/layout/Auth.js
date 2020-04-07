import React from 'react';

import VirusBg from 'src/components/common/VirusBg';
import Base from './Base';
import Styled from './styles';

const AuthLayout = ({ children }) => (
  <Base>
    <Styled.Wrap>
      <Styled.AuthBody>
        <VirusBg />
        {children}
      </Styled.AuthBody>
    </Styled.Wrap>
  </Base>
);

export default AuthLayout;
