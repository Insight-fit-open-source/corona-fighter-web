import { Button, Grid, LinearProgress } from '@material-ui/core';
import { Field, Form, Formik } from 'formik';
import { TextField } from 'formik-material-ui';
import React from 'react';
import * as Yup from 'yup';

const schema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('Please enter a valid email')
    .required('Email is required'),
});

export class FirebaseForm extends React.PureComponent {
  render() {
    const {
      name,
      email,
      userId,
      isAuthenticated,
      user,
      updateDetails,
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
          updateDetails(values);
        }}>
        {({ submitForm, isSubmitting, errors, values }) => (
          <Form>
            <Grid container spacing={3}>
              <Grid item xs={12} md={2}>
                <Field
                  component={TextField}
                  name='name'
                  helperText=''
                  label='Organisation name'
                />
              </Grid>
              <Grid item xs={12} md={2}>
                <Field
                  component={TextField}
                  name='email'
                  helperText=''
                  label='Organisation email'
                />
              </Grid>
              <Grid item xs={12} md={8} />

              {isSubmitting && <LinearProgress />}
              <Grid item xs={12}>
                <Button
                  variant='contained'
                  color='primary'
                  disabled={isSubmitting}
                  onClick={submitForm}>
                  Save
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    );
  }
}

export default FirebaseForm;
