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
  width: 80%;
  min-height: 65%;
  margin-bottom: 1.5rem;

  @media only screen and (min-width: ${breakpoints.values.md}px) {
    grid-template-columns: ${({ step }) => grids[step] || 'auto'};
  }
`;
