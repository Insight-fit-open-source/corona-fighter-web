import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Button, LinearProgress, Grid } from '@material-ui/core';
import { TextField } from 'formik-material-ui';
import { DatePicker } from 'formik-material-ui-pickers';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

import loadMedicineDB from 'src/app/helpers/loadMedicationsDB';
import Select from './Select';

export class FirebaseForm extends React.PureComponent {
  state = {
    medicines,
  };
  async componentDidMount() {
    const data = await loadMedicineDB();
    this.setState({
      medicines: [...data],
    });
  }

  render() {
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Formik
          initialValues={{
            date: new Date(),
            time: new Date(),
            dateTime: new Date(),
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              setSubmitting(false);
              alert(JSON.stringify(values, null, 2));
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
              </Grid>
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
              <Field
                classNmae={'medicines-select'}
                component={Select}
                name='medicines'
                isMulti={true}
                options={this.state.medicines}
              />

              {isSubmitting && <LinearProgress />}
              <br />
              <Button
                variant='contained'
                color='primary'
                disabled={isSubmitting}
                onClick={submitForm}>
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </MuiPickersUtilsProvider>
    );
  }
}

export default FirebaseForm;
