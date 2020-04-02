import styled from 'styled-components';

const MapContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`;

const AutocompleteContainer = styled.div`
  position: absolute;
  z-index: 1;
  background: #fff;
  margin: 10px;
  border-radius: 4px;
  max-width: 91vw;

  .MuiInputBase-root {
    margin: 0;
    max-width: 91vw;
  }
`;

const Styled = { MapContainer, AutocompleteContainer };

export default Styled;
