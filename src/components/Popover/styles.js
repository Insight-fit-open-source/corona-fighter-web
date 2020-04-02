import styled from 'styled-components';
import colors from 'src/app/theme/colors';
import breakpoints from 'src/app/theme/breakpoints';

const PopoverContent = styled.div`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${colors.blueDark};
  transition: transform 0.365s ease-in;
`;

const PopoverBody = styled.div`
  display: block;
  padding: 1.5rem;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 50;
  background: ${colors.blueDark};
  color: ${colors.white};

  @media only screen and (mxa-height: 600px) {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
  }

  @media only screen and (min-width: ${breakpoints.values.sm}px) {
    padding: 3rem 40% 3rem 3rem;
  }

  @media only screen and (min-width: ${breakpoints.values.md}px) {
    padding: 3rem 50% 3rem 3rem;
  }

  h1 {
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
    max-width: 20rem;
    padding: 0.75rem 0;
    margin-top: 1rem;
  }
`;

export default {
  PopoverContent,
  PopoverBody,
};
