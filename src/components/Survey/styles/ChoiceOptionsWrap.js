import styled from 'styled-components';
import sizes from 'src/app/theme/sizes';
import breakpoints from 'src/app/theme/breakpoints';

const grids = {
  'atypical-symptoms': '1fr 1fr',
};

export default styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-gap: 1rem 2rem;
  width: 100%;
  min-height: 40%;
  margin-bottom: 1.5rem;

  @media only screen and (min-width: ${breakpoints.values
      .md}px) and (min-height: 650px) {
    width: 80%;
    grid-template-columns: ${({ step }) => grids[step] || 'auto'};
    height: 100%;
    max-height: 100%;
  }
`;
