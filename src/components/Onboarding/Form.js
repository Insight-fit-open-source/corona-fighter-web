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
import { TextField, Checkbox } from 'formik-material-ui';
import { DatePicker } from 'formik-material-ui-pickers';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import ViewIcon from '@material-ui/icons/Visibility';
import SubmitIcon from '@material-ui/icons/ChevronRight';

import FirebaseFactory from 'src/app/lib/firebase';
import * as Yup from 'yup';

import PrivacyPopOver from 'src/components/common/PrivacyPopup';

import LocationField from './location';
import Select from './Select';

const schema = Yup.object({
  location: Yup.object().required('Just a suburb or area is fine'),
  medicine: Yup.string(),
  acceptedTerms: Yup.bool(true).required(
    'you must accept the terms and conditions',
  ).default(false),
});

export class FirebaseForm extends React.PureComponent {
  state = {
    privacyVisible: false,
  };

  closePopup = () => {
    this.setState({ privacyVisible: false });
  };

  render() {
    const { close, userId, isAuthenticated, user, authInProcess } = this.props;
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Formik
          initialValues={{
            dob: '',
            location: null,
            conditions: [],
            medicine: '',
          }}
          validationSchema={schema}
          onSubmit={async (values, { setSubmitting, setStatus }) => {
            try {
              const { firestore, analytics } = await FirebaseFactory.get();
              await firestore
                .collection(`profiles`)
                .doc(userId)
                .set(
                  {
                    personal: { ...values },
                    onBoardingComplete: true,
                    updatedAt: Date.now(),
                  },
                  { merge: true },
                );

              try {
                analytics.logEvent('onboarding completed');
              } catch (ae) {
                console.log(ae);
              }
            } catch (error) {
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
          {({ submitForm, isSubmitting, errors, values }) => (
            <Form>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Field
                    component={DatePicker}
                    disableFuture
                    openTo='year'
                    format='dd/MM/yyyy'
                    views={['year', 'month', 'date']}
                    name='dob'
                    label='Date of Birth'
                    required
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Field
                    component={LocationField}
                    name='location'
                    label='City, suburb or address'
                    errors={errors}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Field
                    component={TextField}
                    name='medicine'
                    helperText='Leave this blank, if it does no apply'
                    label="Please specify any medication you're on"
                  />
                </Grid>
                <Grid item xs={12} md={12}>
                  <FormControl>
                    <label htmlFor='conditions-select' className='custom-label'>
                      Please specify any pre-existing conditions
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
                        {
                          value: 'diabetes',
                          label: 'Diabetes',
                        },
                        { value: 'cancer', label: 'Cancer' },
                        {
                          value: 'low immune system',
                          label: 'Low immune System, TB, HIV etc',
                        },
                        {
                          value: 'none',
                          label: 'None',
                        },
                      ]}
                    />
                    <span className='custom-helper-text'>
                      Leave this blank, if they do no apply
                    </span>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={12}>
                  <InputLabel>
                    <Field
                      id='acceptedTerms'
                      name='acceptedTerms'
                      type='checkbo'
                      disabled={authInProcess || isSubmitting}
                      margin='normal'
                      component={Checkbox}
                    />
                    In order to proceed and use the application, you must accept
                    the terms of use described in the
                    Privacy Policy.
                  </InputLabel>
                </Grid>
                {isSubmitting && <LinearProgress />}
                <Button
                  variant='outlined'
                  color='primary'
                  disabled={isSubmitting}
                  endIcon={<ViewIcon />}
                  stylea={{ marginRight: '0.5rem' }}
                  onClick={() => this.setState({ privacyVisible: true })}>
                  View Privacy Policy
                </Button>
                <Button
                  variant='contained'
                  color='primary'
                  disabled={!values.acceptedTerms || isSubmitting}
                  endIcon={<SubmitIcon />}
                  onClick={submitForm}>
                  Take The Survey
                </Button>
              </Grid>
            </Form>
          )}
        </Formik>
        <PrivacyPopOver open={this.state.privacyVisible} close={this.closePopup} />
      </MuiPickersUtilsProvider>
    );
  }
}

export default FirebaseForm;
