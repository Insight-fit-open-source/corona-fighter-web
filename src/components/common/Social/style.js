import styled from 'styled-components';
import colors from 'src/app/theme/colors';
import breakpoints from 'src/app/theme/breakpoints';

export const SocialWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 20;
  flex-grow: 1;

  ${props =>
    props.right
      ? `
     justify-content: flex-end;
  `
      : null}

  ${props =>
    props.left
      ? `
     justify-content: flex-start;
  `
      : null}

  .react-share__ShareButton {
    width: 2.5rem;
    height: 2.5rem;
    display: inline-block;
    margin: 0.75rem;
    padding: 0;
  }
  svg {
    width: 1.5rem;
    height: 1.5rem;
    fill: ${colors.blueDark};

    ${props =>
      props.invert
        ? `
     fill: ${colors.white};
  `
        : null}
  }

  button {
    padding: 0;
  }

  ${props =>
    props.hideOnMobile
      ? `
     display: none;
     
     @media only screen and (min-width: ${breakpoints.values.md}px) {
      display: flex;
     }
  `
      : null}
`;

export default {
  SocialWrapper,
};
