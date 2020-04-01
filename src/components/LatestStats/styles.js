import styled from 'styled-components';
import { Grid as MuiGrid } from '@material-ui/core';
import breakpoints from 'src/app/theme/breakpoints';

const StatsBox = styled.div`
  border: 1px solid #eee;
  padding: 1rem;
  text-align: center;
`;

const ChartGrid = styled(MuiGrid)`
  display: none;

  @media only screen and (min-width: ${breakpoints.values.sm}px) {
    display: block;
  }
`;

const ChartContainer = styled.div`
  border: 1px solid #eee;
  padding: 1rem;
  width: 100%;
`;

const ChartInner = styled.div`
  height: 40vw;
  margin: 0 auto;
  max-width: 80rem;
  width: 100%;
`;

const Styled = { StatsBox, ChartContainer, ChartInner, ChartGrid };

export default Styled;
