import styled from 'styled-components';
import { rgba } from 'polished';

import colors from 'src/app/theme/colors';
import breakpoints from 'src/app/theme/breakpoints';
import sizes from 'src/app/theme/sizes';

const Wrap = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

const BodyWrap = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const Body = styled.div`
  position: relative;
  flex: 1;
  padding: 0;
  overflow-x: hidden;
  overflow-y: auto;
`;

const BodyGeneral = styled.div`
  position: relative;
  flex: 1;
  padding: ${({ isMap }) => (isMap ? '5rem 0 0' : '5rem 1.5rem 3rem')};
  overflow-y: auto;

  .pageHeader {
    height: 4.1rem;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: flex-start;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: ${colors.white};
    padding: 0 0.75rem;
    box-shadow: 0 3px 14px ${rgba(colors.blueDark, 0.07)},
      0 5px 18px ${rgba(colors.blueDark, 0.07)};

    h4 {
      font-size: 1.25rem;
    }

    .hamburger {
      position: relative;
      top: 2px;
      margin-right: 0.75rem;

      svg {
        fill: ${colors.blueDark};
      }
    }
  }

  @media only screen and (min-width: ${breakpoints.values.md}px) {
    .pageHeader {
      position: absolute;
      box-shadow: none;
      padding: 0 1.5rem;
      border-bottom: 1px dotted ${rgba(colors.blueDark, 0.15)};
      h4 {
        font-size: 1.563rem;
      }

      .hamburger {
        display: none;
      }
    }
  }
`;

const AuthBody = styled.div`
  position: relative;
  z-index: 10;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${sizes.space(0.5)} ${sizes.space(0.5)} 10vh;
  background-color: ${colors.blueDark};
  overflow-x: hidden;
  overflow-y: auto;
`;

const Styled = {
  Wrap,
  BodyWrap,
  Body,
  BodyGeneral,
  AuthBody,
};

export default Styled;
