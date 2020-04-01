import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import config from 'src/app/publicSettings';

import loadTestingFacilities from 'src/app/helpers/loadTestingFacilities';

import Styled from './styles';
import MapMarker from './MapMarker';

class TestingFacilityLocator extends Component {
  state = {
    center: [-33.9249, 18.4241],
    zoom: 11,
    locations: [],
    selected: null,
  };

  async componentDidMount() {
    const data = await loadTestingFacilities();
    this.setState({
      locations: data.map((loc, index) => ({ ...loc, id: index + 1 })),
    });
  }

  onBoundsChange = (center, zoom) => this.setState({ center, zoom });

  onChildClick = (key, childProps) =>
    this.setState({
      center: [childProps.lat, childProps.lng],
      selected: childProps.location.id,
    });

  onSelectChange = value =>
    this.setState({ center: [value.lat, value.lng], selected: value.id });

  onBoxClose = () => this.setState({ selected: null });

  render() {
    const { center, zoom, locations, selected } = this.state;

    return (
      <Styled.MapContainer>
        <Styled.AutocompleteContainer>
          <Autocomplete
            id='combo-box-demo'
            options={locations}
            getOptionLabel={option => `${option.city}, ${option.phoneNumber} `}
            onChange={(e, value) => this.onSelectChange(value)}
            groupBy={option => option.province}
            style={{ width: 500 }}
            renderInput={params => (
              <TextField
                {...params}
                label='Search for your testing location'
                variant='outlined'
              />
            )}
          />
        </Styled.AutocompleteContainer>
        <GoogleMapReact
          bootstrapURLKeys={{ key: config.GOOGLE_API_KEY }}
          center={center}
          zoom={zoom}
          onBoundsChange={this.onBoundsChange}
          onChildClick={this.onChildClick}>
          {locations.map(loc => (
            <MapMarker
              key={loc.id}
              selected={loc.id === selected}
              lat={loc.lat}
              lng={loc.lng}
              location={loc}
              onBoxClose={this.onBoxClose}
            />
          ))}
        </GoogleMapReact>
      </Styled.MapContainer>
    );
  }
}

export default TestingFacilityLocator;
