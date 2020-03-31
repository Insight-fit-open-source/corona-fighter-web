import { rgba } from 'polished';
import styled from 'styled-components';
import colors from 'src/app/theme/colors';
import sizes from 'src/app/theme/sizes';
import breakpoints from 'src/app/theme/breakpoints';

export default styled.div`
  display: block;
  position: relative;
  padding: ${sizes.space(1)} ${sizes.space(0.5)};
  height: 100%;
  width: 100%;
  background: ${colors.white};
  border: 1px solid ${rgba(colors.greyLight,0.2)};
  box-shadow: 0 14px 35px rgba(0,10,40,0.12), 0 24px 30px -20px rgba(10,10,0,0.7);
  border-radius: 5px;
  
  @media only screen and (min-width: ${breakpoints.values.md}px) {
    padding: ${sizes.space(1)};
  }
  
    @media only screen and (min-width: ${breakpoints.values.lg}px) {
    padding: ${sizes.space(1.5)};
  }
`;
