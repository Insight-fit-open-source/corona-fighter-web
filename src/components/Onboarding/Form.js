import React from 'react';
import Router from 'next/router';
import { Formik, Form, Field } from 'formik';
import {
  Button,
  LinearProgress,
  Grid,
  InputLabel,
  FormControl,
} from '@material-ui/core';
import { TextField } from 'formik-material-ui';
import { DatePicker } from 'formik-material-ui-pickers';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import FirebaseFactory from 'src/app/lib/firebase';
import * as Yup from 'yup';

import LocationField from './location';
import Select from './Select';

const schema = Yup.object({
  preferredName: Yup.string('How should we address you?').required(
    'Even a pseudonym will do',
  ),
  email: Yup.string('Enter your email').email('Enter a valid email'),
  phone: Yup.string('Enter your phone number'),
  location: Yup.object().required('Just a suburb or area is fine'),
  medicine: Yup.string(),
});

export class FirebaseForm extends React.PureComponent {
  render() {
    const { close, userId } = this.props;
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Formik
          initialValues={{
            preferredName: '',
            dob: '',
            email: '',
            phone: '',
            location: null,
            conditions: [],
            medicine: '',
          }}
          validationSchema={schema}
          onSubmit={async (values, { setSubmitting, setStatus }) => {
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
              console.log(e);
              setStatus(error.message);
              setSubmitting(false);
              console.log('Error completing onboarding:', error);
              throw new Error(error);
            }

            setSubmitting(false);
            Router.push('/survey/[step]', '/survey/welcome');
            setTimeout(() => {
              close();
            }, 500);
          }}>
          {({ submitForm, isSubmitting, errors }) => (
            <Form>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Field
                    component={TextField}
                    name='preferredName'
                    label='Preferred Name'
                    required
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Field
                    component={DatePicker}
                    format='dd MM yyyy'
                    name='dob'
                    label='Date of Birth'
                    required
                  />
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
                  <Field component={LocationField} name='location' label='location' errors={errors} />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Field
                    component={TextField}
                    name='medicine'
                    helperText='Leave this blank, if it does no apply'
                    label="Please Specify any medication you're on"
                  />
                </Grid>
                <Grid item xs={12} md={12}>
                  <FormControl>
                    <label htmlFor='conditions-select' className='custom-label'>
                      Select Any pre-existing conditions
                    </label>
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
                        {
                          value: 'none',
                          label: 'none',
                        },
                      ]}
                    />
                    <span className='custom-helper-text'>
                      Leave this blank, if they do no apply
                    </span>
                  </FormControl>
                </Grid>
                {isSubmitting && <LinearProgress />}
                <Button
                  variant='contained'
                  color='primary'
                  disabled={isSubmitting}
                  onClick={submitForm}>
                  Submit
                </Button>
              </Grid>
            </Form>
          )}
        </Formik>
      </MuiPickersUtilsProvider>
    );
  }
}

export default FirebaseForm;
