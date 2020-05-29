import { Button, Grid, LinearProgress } from '@material-ui/core';
import { Field, Form, Formik } from 'formik';
import { TextField } from 'formik-material-ui';
import React from 'react';
import FirestoreHelper from 'src/app/helpers/firestoreHelper';
import * as Yup from 'yup';

const schema = Yup.object({
  code: Yup.string().required('Code is required'),
});

export class InviteForm extends React.PureComponent {
  async acceptInvitation(values) {
    const test = await FirestoreHelper.AcceptOrganisationInvitation(
      this.props.userId,
      values.code,
    );
  }

  render() {
    const {
      name,
      email,
      userId,
      isAuthenticated,
      user,
      close,
      acceptInvitation,
    } = this.props;
    return (
      <Formik
        initialValues={{
          name,
          email,
        }}
        enableReinitialize
        validationSchema={schema}
        onSubmit={async (values, { setSubmitting, setStatus }) => {
          await this.acceptInvitation(values);
          close();
        }}>
        {({ submitForm, isSubmitting, errors, values }) => (
          <Form>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Field
                  component={TextField}
                  name='code'
                  helperText=''
                  label='Invitation Code'
                />
              </Grid>

              {isSubmitting && <LinearProgress />}
              <Grid item xs={12}>
                <Button
                  variant='contained'
                  color='primary'
                  disabled={isSubmitting}
                  onClick={submitForm}>
                  Accept
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    );
  }
}

export default InviteForm;
