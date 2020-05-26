import DateFnsUtils from '@date-io/date-fns';
import {
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  LinearProgress,
  Radio,
} from '@material-ui/core';
import SubmitIcon from '@material-ui/icons/ChevronRight';
import ViewIcon from '@material-ui/icons/Visibility';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { Field, Form, Formik } from 'formik';
import { Checkbox, RadioGroup, Switch } from 'formik-material-ui';
import Router from 'next/router';
import React from 'react';
import FirebaseFactory from 'src/app/lib/firebase';
import PrivacyPopOver from 'src/components/common/PrivacyPopup';
import * as Yup from 'yup';

const schema = Yup.object({
  acceptedTerms: Yup.bool(true)
    .required('you must accept the terms and conditions')
    .default(false),
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
            ageGroupAnswer: 'under18',
            preexistingConditions: 'yes',
            previouslyDiagnosed: 'yes',
            acceptedTerms: false,
            invitations: ['Firstrand National Bank', 'ABSA', 'Standard Bank'],
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
                  <FormControl>
                    <label
                      htmlFor='age-group-question'
                      className='custom-label'>
                      How old are you?
                    </label>
                    <Field
                      className='age-group-question radio-group'
                      component={RadioGroup}
                      name='ageGroupAnswer'>
                      <FormControlLabel
                        value='under18'
                        control={<Radio disabled={isSubmitting} />}
                        label='< 18'
                        disabled={isSubmitting}
                      />
                      <FormControlLabel
                        value='18-39'
                        control={<Radio disabled={isSubmitting} />}
                        label='18-39'
                        disabled={isSubmitting}
                      />
                      <FormControlLabel
                        value='40-60'
                        control={<Radio disabled={isSubmitting} />}
                        label='40-60'
                        disabled={isSubmitting}
                      />
                      <FormControlLabel
                        value='over60'
                        control={<Radio disabled={isSubmitting} />}
                        label='Over 60'
                        disabled={isSubmitting}
                      />
                    </Field>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl>
                    <label
                      htmlFor='preexisting-conditions-question'
                      className='custom-label'>
                      Do you have any pre-existing medical condition we should
                      be aware of? (Examples: lung disease, heart disease,
                      diabetes with complications, TB, HIV)
                    </label>
                    <Field
                      className='preexisting-conditions-question radio-group'
                      component={RadioGroup}
                      name='preexistingConditions'>
                      <FormControlLabel
                        value='yes'
                        control={<Radio disabled={isSubmitting} />}
                        label='Yes'
                        disabled={isSubmitting}
                      />
                      <FormControlLabel
                        value='unsure'
                        control={<Radio disabled={isSubmitting} />}
                        label='Unsure'
                        disabled={isSubmitting}
                      />
                      <FormControlLabel
                        value='no'
                        control={<Radio disabled={isSubmitting} />}
                        label='No'
                        disabled={isSubmitting}
                      />
                    </Field>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl>
                    <label
                      htmlFor='previously-diagnosed-question'
                      className='custom-label'>
                      Have you previously been diagnosed with or tested positive
                      for COVID-19?
                    </label>
                    <Field
                      className='previously-diagnosed-question radio-group'
                      component={RadioGroup}
                      name='previouslyDiagnosed'>
                      <FormControlLabel
                        value='yes'
                        control={<Radio disabled={isSubmitting} />}
                        label='Yes'
                        disabled={isSubmitting}
                      />
                      <FormControlLabel
                        value='no'
                        control={<Radio disabled={isSubmitting} />}
                        label='No'
                        disabled={isSubmitting}
                      />
                    </Field>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={12}>
                  <label htmlFor='invitations' className='custom-label'>
                    The following organisations have invited you.
                  </label>
                  {values.invitations.map(x => (
                    <InputLabel className='custom-switch'>
                      <Field component={<Switch checked />} name='switch' />
                      {x}
                    </InputLabel>
                  ))}
                </Grid>
                <Grid item xs={12} md={12}>
                  <InputLabel>
                    <Field
                      id='acceptedTerms'
                      name='acceptedTerms'
                      type='checkbox'
                      disabled={authInProcess || isSubmitting}
                      margin='normal'
                      component={Checkbox}
                    />
                    In order to proceed and use the application, you must accept
                    the terms of use described in the Privacy Policy.
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
                  Setup My Organisation
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
        <PrivacyPopOver
          open={this.state.privacyVisible}
          close={this.closePopup}
        />
      </MuiPickersUtilsProvider>
    );
  }
}

export default FirebaseForm;
