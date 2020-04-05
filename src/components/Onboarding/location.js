import { TextField } from '@material-ui/core';
import React, { Component } from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

class FormikPlacesAutoComplete extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.field.name,
      address: props.value || '',
    };
  }

  handleError = error => {
    this.props.form.setFieldError(this.state.name, error);
  };

  handleChange = address => {
    this.setState(() => {
      this.props.form.setFieldTouched(`${this.state.name}.value`);
      this.props.form.setFieldTouched(`${this.state.name}.address`);
      this.props.form.setFieldValue(this.state.name, { value: address });
      return { address };
    });
  };

  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        this.setState(() => {
          this.props.form.setFieldValue(this.state.name, {
            value: address,
            address,
            coordinates: latLng,
          });
          return { address };
        });
      })
      .catch(error => this.props.form.setFieldError(this.state.name, error));
  };

  render() {
    const {
      field: { name, ...field }, // { name, value, onChange, onBlur }
      form: { touched, errors, ...form }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
      classes,
      label,
      ...props
    } = this.props;

    const error = errors[name];
    const touch = touched[name];
    console.log(error);
    return (
      <PlacesAutocomplete
        name={name}
        id={name}
        {...props}
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
        onError={this.handleError}>
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div className='location-wrap'>
            <TextField
              {...getInputProps({
                error: Boolean(error),
                name: 'location',
                label: 'location',
                required: true,
                placeholder: 'Search Places ...',
                className: `location-search-input form-control ${Boolean(
                  touch && error ? 'error' : '',
                )}`,
              })}
            />
            <div className='autocomplete-dropdown-container'>
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#bae8e8', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}>
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    );
  }
}

export default FormikPlacesAutoComplete;
