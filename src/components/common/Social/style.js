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
    display: inline-block;
    margin: 0.75rem;
    padding: 0;
    max-width: 3rem;
    
      ${props =>
  props.left
    ? `
     margin: 0.75rem 0.75rem 0.75rem 0;
     text-align: left;
  `
    : null}
      
        ${props =>
  props.right
    ? `
     margin: 0.75rem 0  0.75rem 0.75rem;
     text-align: right;
  `
    : null}
  }
  svg {
    fill: ${colors.blueDark};
    padding-top: 0.55rem;

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
