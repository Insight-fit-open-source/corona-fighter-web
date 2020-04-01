/* eslint-disable no-return-assign */
import React, { Component } from 'react';
import {
  GoogleMap,
  LoadScript,
  Marker,
  Autocomplete,
  InfoWindow,
} from '@react-google-maps/api';
import { Typography, TextField, Button } from '@material-ui/core';
import styled from 'styled-components';

import config from 'src/app/publicSettings';
import loadTestingFacilities from 'src/app/helpers/loadTestingFacilities';

const libraries = ['places'];

const mapContainerStyle = {
  height: '100%',
  width: '100%',
};

const ContainerDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 1rem;
  padding-top: 1rem;
  width: 600px;

  .MuiFormControl-root {
    background: #fff;
    margin-right: 1rem;
    border-radius: 4px;
  }

  .MuiInputBase-root {
    margin-bottom: 0;
  }
`;

class MyComponents extends Component {
  state = {
    center: { lat: -33.9249, lng: 18.4241 },
    zoom: 11,
    map: null,
    locations: [],
    selected: null,
  };

  async componentDidMount() {
    const data = await loadTestingFacilities();
    this.setState({
      locations: data.map((loc, index) => ({ ...loc, id: index + 1 })),
    });
  }

  onLoad = autocomplete => {
    this.autocomplete = autocomplete;
  };

  onPlaceChanged = () => {
    const { map } = this.state;
    if (this.autocomplete !== null) {
      const place = this.autocomplete.getPlace();
      if (map) {
        map.panTo(
          new window.google.maps.LatLng(
            place.geometry.location.lat(),
            place.geometry.location.lng(),
          ),
        );
      }
    } else {
      console.log('Autocomplete is not loaded yet!');
    }
  };

  getLocation = () => {
    const { map } = this.state;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(currentLocation => {
        if (map) {
          map.panTo(
            new window.google.maps.LatLng(
              currentLocation.coords.latitude,
              currentLocation.coords.longitude,
            ),
          );
        }
      });
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  };

  render() {
    const { center, zoom, locations, selected } = this.state;

    return (
      <LoadScript
        libraries={libraries}
        id='script-loader'
        googleMapsApiKey={config.GOOGLE_API_KEY}>
        <GoogleMap
          zoom={zoom}
          onLoad={map => this.setState({ map })}
          center={center}
          mapContainerStyle={mapContainerStyle}
          options={{
            streetViewControl: false,
            mapTypeControl: false,
          }}
          id='example-map'>
          <Autocomplete
            onLoad={this.onLoad}
            onPlaceChanged={this.onPlaceChanged}>
            <ContainerDiv>
              <TextField
                variant='outlined'
                placeholder='Search your Location'
                fullWidth
              />
              <Button variant='contained' onClick={this.getLocation}>
                Get Current Location
              </Button>
            </ContainerDiv>
          </Autocomplete>
          {window.google &&
            locations.map(loc => (
              <Marker
                animation={2}
                key={loc.id}
                onClick={() => this.setState({ selected: loc })}
                position={{ lat: loc.lat, lng: loc.lng }}
                icon={{
                  url: '/testingLocationIcon.png',
                  scaledSize: new window.google.maps.Size(36, 36),
                  origin: new window.google.maps.Point(0, 0),
                  anchor: new window.google.maps.Point(18, 36),
                }}
              />
            ))}
          {selected ? (
            <InfoWindow
              onCloseClick={() => this.setState({ selected: null })}
              position={{ lat: selected.lat, lng: selected.lng }}
              options={{ pixelOffset: new window.google.maps.Size(0, -40) }}>
              <div>
                <Typography variant='body2'>
                  <strong>Address:</strong> {selected.address}
                </Typography>
                <Typography variant='body2'>
                  <strong>Phone number:</strong> {selected.phoneNumber}
                </Typography>
                <Typography variant='body2'>
                  <strong>Opening Times:</strong> {selected.openingTimes}
                </Typography>
                <Typography variant='body2'>
                  <strong>Appointment Needed:</strong>
                  {selected.appointmentNeeded}
                </Typography>
                <Typography variant='body2'>
                  <strong>Price:</strong> {selected.price}
                </Typography>
              </div>
            </InfoWindow>
          ) : null}
        </GoogleMap>
      </LoadScript>
    );
  }
}

export default MyComponents;
