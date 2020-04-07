import styled from 'styled-components';
import { Grid as MuiGrid } from '@material-ui/core';
import breakpoints from 'src/app/theme/breakpoints';

const StatsBox = styled.div`
  border: 1px solid #eee;
  padding: 0.5rem;
  background: #fff;
  box-shadow: 0 5px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;

  h3,
  h4 {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin: 0 !important;
  }
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
  margin: 1.5rem 0;
  width: 100%;
  background: #fff;
  box-shadow: 0 5px 12px rgba(0, 0, 0, 0.1);
`;

const ChartInner = styled.div`
  height: 40vw;
  margin: 0 auto;
  max-width: 80rem;
  width: 100%;
`;

const Styled = { StatsBox, ChartContainer, ChartInner, ChartGrid };

export default Styled;
