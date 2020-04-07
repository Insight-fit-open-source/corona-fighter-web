import React from 'react';

import { Autocomplete } from '@react-google-maps/api';

import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import Style from './styles';

class MapHeader extends React.Component {
  locationUpdated = location => {
    const { setUserLocation, map } = this.props;

    if (map) {
      if (map.getZoom() <= 11) {
        map.setZoom(11);
      }
      map.panTo(new window.google.maps.LatLng(location.lat, location.lng));
    }

    setUserLocation(location);
  };

  onAutocompleteLoaded = autocomplete => {
    this.autocomplete = autocomplete;
  };

  onPlaceChanged = () => {
    if (this.autocomplete !== null) {
      const place = this.autocomplete.getPlace();
      this.locationUpdated({
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      });
    }
  };

  getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(currentLocation => {
        this.locationUpdated({
          lat: currentLocation.coords.latitude,
          lng: currentLocation.coords.longitude,
        });
      });
    }
  };

  render() {
    return (
      <Autocomplete
        onLoad={this.onAutocompleteLoaded}
        onPlaceChanged={this.onPlaceChanged}
        restrictions={{ country: ['za'] }}>
        <Style.MapHeaderContainer>
          <Paper elevation={0}>
            <InputBase
              placeholder='Search your area for testing locations'
              inputProps={{
                'aria-label': 'search yor area for testing locations',
              }}
            />

            <IconButton
              color='primary'
              onClick={this.getLocation}
              aria-label='directions'>
              <MyLocationIcon />
            </IconButton>
          </Paper>
        </Style.MapHeaderContainer>
      </Autocomplete>
    );
  }
}

export default MapHeader;
