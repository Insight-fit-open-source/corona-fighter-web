import React from 'react';
import Sidebar from 'src/layout/Sidebar';
import IsProtectedPage from 'src/app/lib/firebase/auth/IsProtectedPage';
import Styled from './styles';

const GeneralSettingsLayout = ({ pageTitle, children, noPadding = false }) => (
  <Styled.Wrap>
    <Sidebar />
    <Styled.BodyGeneral noPadding={noPadding}>
      {pageTitle ? <h2>{pageTitle}</h2> : null}
      {children}
    </Styled.BodyGeneral>
  </Styled.Wrap>
);

export default IsProtectedPage(GeneralSettingsLayout);
