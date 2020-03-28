import React from 'react';

import IsProtectedPage from 'src/app/lib/firebase/auth/IsProtectedPage';
import Styled from './styles';

const GeneralSettingsLayout = ({ body, sidebar }) => (
  <Styled.Wrap>
    <Styled.BodyGeneral>{body}</Styled.BodyGeneral>
  </Styled.Wrap>
);

export default IsProtectedPage(GeneralSettingsLayout);
