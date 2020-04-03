import styled from 'styled-components';
import colors from 'src/app/theme/colors';
import breakpoints from 'src/app/theme/breakpoints';

const OnBoardingContent = styled.div`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${colors.greyXLight};
  transition: transform 0.365s ease-in;

  .MuiFormControl-root.MuiTextField-root {
      width: 100%;
  }
  
  form button {
    line-height: 3rem;
    padding: 0 3rem;
  }
`;

const OnBoardingBody = styled.div`
  display: block;
  padding: 1.5rem;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 50;
  background: ${colors.greyXLight};
  overflow-y: scroll;

  @media only screen and (min-width: ${breakpoints.values.md}px) and  (min-height: 600px) {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    padding: 3rem 40% 3rem 3rem;
    width: 100%;
  }

  @media only screen and (min-width: ${breakpoints.values.lg}px) {
    padding: 3rem 50% 3rem 3rem;
    width: 100%;
  }

  h2 {
    margin: 3rem 0;
    position: relative;
    font-size: calc(1.5rem + 2.5vw);
    line-height: 1;

    @media only screen and (min-width: ${breakpoints.values.md}px) {
      font-size: 3rem;
      margin: 0.7.5rem 0 3rem 0;
    }

    &:after {
      content: '';
      width: 3rem;
      height: 0.2rem;
      background-color: ${colors.pink};
      position: absolute;
      display: block;
      bottom: -1.6rem;
      left: 0;
    }
  }

  p {
    opacity: 0.75;
    font-weight: 300;
    margin-bottom: 1.5rem;
  }

  button:first-of-type {
    margin-top: 4.5rem;
  }

  button {
    width: 100%;
    max-width: 20rem;
    padding: 0.75rem 0;
    margin-top: 1rem;
  }
`;

export default {
  OnBoardingContent,
  OnBoardingBody,
};
