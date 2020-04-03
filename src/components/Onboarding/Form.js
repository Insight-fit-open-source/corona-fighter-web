import React from 'react';
import Router from 'next/router';
import { Formik, Form, Field } from 'formik';
import { Button, LinearProgress, Grid } from '@material-ui/core';
import { TextField } from 'formik-material-ui';
import { DatePicker } from 'formik-material-ui-pickers';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import FirebaseFactory from 'src/app/lib/firebase';

import Select from './Select';

export class FirebaseForm extends React.PureComponent {
  render() {
    const { close, userId } = this.props;
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Formik
          initialValues={{
            fullname: '',
            dob: '',
            email: '',
            phone: '',
            location: '',
            conditions: '',
            medicine: '',
          }}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              const { firestore } = await FirebaseFactory.get();

              await firestore
                .collection(`profiles`)
                .doc(userId)
                .update({
                  personal: { ...values },
                  onBoardingComplete: true,
                  updatedAt: Date.now(),
                });
            } catch (error) {
              console.log('Error completing onboarding:', error);
              throw new Error(error);
            }

            setSubmitting(false);
            Router.push('/survey/[step]', '/survey/welcome');
            setTimeout(() => {
              close();
            }, 500);
          }}>
          {({ submitForm, isSubmitting }) => (
            <Form>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Field
                    component={TextField}
                    name='fullname'
                    label='Full Name'
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Field component={DatePicker} name='dob' label='Date' />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Field
                    component={TextField}
                    name='email'
                    type='email'
                    label='Email'
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Field
                    component={TextField}
                    name='phone'
                    label='Phone Number'
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Field
                    component={TextField}
                    name='location'
                    label='Suburb or Address'
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Field
                    component={TextField}
                    name='medicine'
                    label='Any medication?'
                  />
                </Grid>
                <Grid item xs={12} md={12}>
                  <Field
                    classNmae={'conditions-select'}
                    component={Select}
                    name='conditions'
                    isMulti={true}
                    options={[
                      { value: 'heart disease', label: 'Heart Disease' },
                      { value: 'lung disease', label: 'Lung Disease' },
                      {
                        value: 'high blood pressure',
                        label: 'High Blood Pressure',
                      },
                      { value: 'cancer', label: 'Cancer' },
                      {
                        value: 'low immune system',
                        label: 'immune System, TB, HIV etc',
                      },
                    ]}
                  />
                </Grid>
                <Grid item xs={12} md={12}></Grid>
                {isSubmitting && <LinearProgress />}
                <Grid item xs={12} md={4} lg={4}>
                  <Button
                    variant='contained'
                    color='primary'
                    disabled={isSubmitting}
                    onClick={submitForm}>
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </MuiPickersUtilsProvider>
    );
  }
}

export default FirebaseForm;
