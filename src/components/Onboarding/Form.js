import React from 'react';
import { Formik, Form, Field } from 'formik';
import {
  Button,
  LinearProgress,
  FormControl,
  InputLabel,
  MenuItem,
} from '@material-ui/core';
import { TextField, Select } from 'formik-material-ui';
import {
  TimePicker,
  DatePicker,
  DateTimePicker,
} from 'formik-material-ui-pickers';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
// Depending on the library you picked
import DateFnsUtils from '@date-io/date-fns';
export default () => {
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
        {({ submitForm, isSubmitting, handleChange  }) => (
          <Form>
            <Field component={TextField} name='fullname' label='Full Name' />
            <Field component={DatePicker} name='dob' label='Date' />
            <Field
              component={TextField}
              name='email'
              type='email'
              label='Email'
            />
            <Field component={TextField} name='phone' label='Phone Number' />
            <Field
              component={TextField}
              name='location'
              label='Suburb or Address'
            />
            <FormControl>
              {/*<InputLabel htmlFor='age-simple'>Age</InputLabel>*/}
              <Field
                displayEmpty
                multiple
                component={Select}
                onChange={handleChange}
                name='age'
                inputProps={{
                  id: 'age-simple',
                  value: [],
                  renderValue: (selected) => {
                    console.log(selected);
                    return selected;
                  },
                }}>
                {[10, 20, 30].map(val => (
                  <MenuItem value={val} key={val}>
                    {val}
                  </MenuItem>
                ))}
                {/*<MenuItem value={10}>Ten</MenuItem>*/}
                {/*<MenuItem value={20}>Twenty</MenuItem>*/}
                {/*<MenuItem value={30}>Thirty</MenuItem>*/}
              </Field>
            </FormControl>
            ;{isSubmitting && <LinearProgress />}
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
};
