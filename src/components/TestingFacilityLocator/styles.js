import styled from 'styled-components';
import breakpoints from 'src/app/theme/breakpoints';

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

const MapContainer = styled.div`
  height: calc(100% - 52px);
  width: 100%;
  position: relative;

  @media only screen and (min-width: ${breakpoints.values.sm}px) {
    height: 100%;
  }
`;

const MapHeaderContainer = styled.div`
  margin: 0;
  border-radius: 0;
  position: relative;
  z-index: 100;

  .MuiPaper-root {
    width: 100%;
    display: flex;
    position: relative;
    align-items: center;
    padding: 1rem;
    padding-top: 0;
    padding-bottom: 0;
    height: 52px;
  }

  .MuiInputBase-root {
    flex: 1;
    margin-bottom: 0;
  }

  @media only screen and (min-width: ${breakpoints.values.sm}px) {
    position: absolute;
    width: calc(100% - 2rem);
    border-radius: 4px;
    margin: 1rem;
    margin-bottom: 0;

    .MuiPaper-root {
      padding-right: 0;
    }
  }

  @media only screen and (min-width: ${breakpoints.values.md}px) {
    max-width: 600px;
  }
`;

const Styled = { MapContainer, AutocompleteContainer, MapHeaderContainer };

export default Styled;
