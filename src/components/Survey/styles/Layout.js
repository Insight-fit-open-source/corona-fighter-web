import styled from 'styled-components';
import colors from 'src/app/theme/colors';
import breakpoints from 'src/app/theme/breakpoints';
import sizes from 'src/app/theme/sizes';

export default styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: ${colors.greyXLight};
  overflow: hidden;
  padding: 0;

  @media only screen and (min-width: ${breakpoints.values.sm}px) {
    padding: ${sizes.space(1)};
  }
`;
