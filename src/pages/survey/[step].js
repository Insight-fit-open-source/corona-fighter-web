import React from 'react';
import { useRouter } from 'next/router';
import WithAuth from 'src/app/lib/firebase/auth/WithAuth';
import IsProtectedPage from 'src/app/lib/firebase/auth/IsProtectedPage';
import Base from 'src/layout/Base';
import Survey from 'src/components/Survey';

export const Step = props => {
  const router = useRouter();
  const { step } = router.query;
  return (
    <Base>
      <Survey {...props} step={step} />
    </Base>
  );
};

export default IsProtectedPage(WithAuth(Step));
