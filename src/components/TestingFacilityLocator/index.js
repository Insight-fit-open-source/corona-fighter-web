/* eslint-disable no-return-assign */
import React, { Component } from 'react';
import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';
import config from 'src/app/publicSettings';
import loadTestingFacilities from 'src/app/helpers/loadTestingFacilities';
import Style from './styles';
import LoadGoogleApiDynamically from '../helpers/LoadGoogleApiDynamically';

import MapHeader from './MapHeader';

const libraries = ['places'];

const mapContainerStyle = {
  height: '100%',
  width: '100%',
};

const SA_BOUNDS = {
  north: -20.40341532049964,
  east: 37.955810546874986,
  south: -37.122729765569325,
  west: 12.247802734374988,
};

class TestingFacilityLocator extends Component {
  state = {
    center: { lat: -30.5595, lng: 22.9375 },
    zoom: 6,
    map: null,
    locations: [],
    selected: null,
    userLocation: null,
    boundsLoaded: false,
  };

  async componentDidMount() {
    const { profile } = this.props;
    if (Object.keys(profile).length > 0) {
      if (profile.personal && Object.keys(profile.personal).length > 0) {
        if (
          profile.personal.location &&
          Object.keys(profile.personal.location).length > 0
        ) {
          const { coordinates } = profile.personal.location;
          this.setState({
            userLocation: coordinates,
            center: coordinates,
            zoom: 11,
          });
        }
      }
    }

    const data = await loadTestingFacilities();
    this.setState({
      locations: data.map((loc, index) => ({ ...loc, id: index + 1 })),
    });
  }

  setUserLocation = userLocation => this.setState({ userLocation });

  render() {
    const {
      center,
      zoom,
      locations,
      selected,
      map,
      boundsLoaded,
      userLocation,
    } = this.state;

    return (
      <LoadGoogleApiDynamically
        libraries={libraries}
        id='script-loader'
        googleMapsApiKey={config.GOOGLE_API_KEY}>
        <MapHeader setUserLocation={this.setUserLocation} map={map} />
        <Style.MapContainer>
          <GoogleMap
            zoom={zoom}
            onLoad={map => this.setState({ map })}
            onBoundsChanged={() => {
              this.setState({ boundsLoaded: true });
            }}
            center={center}
            mapContainerStyle={mapContainerStyle}
            options={{
              streetViewControl: false,
              mapTypeControl: false,
              fullscreenControl: false,
              minZoom: 6,
              restriction: {
                latLngBounds: SA_BOUNDS,
                strictBounds: false,
              },
            }}>
            {window.google &&
              map &&
              boundsLoaded &&
              locations
                .filter(loc =>
                  map.getBounds().contains({ lat: loc.lat, lng: loc.lng }),
                )
                .map(loc => (
                  <Marker
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

            {window.google && map && boundsLoaded && userLocation && (
              <Marker
                position={{ lat: userLocation.lat, lng: userLocation.lng }}
                icon={{
                  url: '/userIcon.png',
                  scaledSize: new window.google.maps.Size(48, 48),
                  origin: new window.google.maps.Point(0, 0),
                  anchor: new window.google.maps.Point(24, 48),
                }}
              />
            )}

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
                    <strong>Lab:</strong>
                    {selected.lab}
                  </Typography>
                  <Typography variant='body2'>
                    <strong>Price:</strong> {selected.price}
                  </Typography>
                </div>
              </InfoWindow>
            ) : null}
          </GoogleMap>
        </Style.MapContainer>
      </LoadGoogleApiDynamically>
    );
  }
}

const mapState = state => ({
  profile: state.profile,
});

export default connect(mapState)(TestingFacilityLocator);
