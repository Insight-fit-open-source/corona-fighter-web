import * as React from 'react';
import styled from 'styled-components';
import { Typography, Button } from '@material-ui/core';
import SvgMarkerIcon from './SvgMarkerIcon';

const Icon = styled(SvgMarkerIcon)`
  transform: translate(-50%, -100%);
  opacity: 0.8;
  cursor: pointer;

  &:hover {
    opacity: 1;
    transition: all 0.2s ease-in-out;
    transform: translate(-50%, -110%) scale(1.2);
  }
`;

const Container = styled.div`
  position: relative;
`;

const Box = styled.div`
  position: absolute;
  padding: 10px;
  border-radius: 4px;
  background: #fff;
  width: 300px;
  transform: translate(-50%);
  bottom: calc(100% + 45px);
  z-index: 2;
`;

const MapMarker = ({ selected, location, onBoxClose }) => (
  <Container>
    <Icon />
    {selected ? (
      <Box>
        <Typography variant='body2'>
          <strong>Address:</strong> {location.address}
        </Typography>
        <Typography variant='body2'>
          <strong>Phone number:</strong> {location.phoneNumber}
        </Typography>
        <Typography variant='body2'>
          <strong>Opening Times:</strong> {location.openingTimes}
        </Typography>
        <Typography variant='body2'>
          <strong>Appointment Needed:</strong> {location.appointmentNeeded}
        </Typography>
        <Typography variant='body2'>
          <strong>Price:</strong> {location.price}
        </Typography>
        <Button variant='contained' onClick={onBoxClose}>
          Close
        </Button>
      </Box>
    ) : null}
  </Container>
);

export default MapMarker;
