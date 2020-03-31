import styled from 'styled-components';
import colors from 'src/app/theme/colors';
import breakpoints from 'src/app/theme/breakpoints';

export default styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  color: #fff;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow-x: auto;
  padding: 1.5rem;
  transform: ${props =>
    props.layoutActive ? 'translate3d(0, 0%, 0)' : 'translate3d(0, 100%, 0)'};
  transition: transform 0.45s ease-out 0s;

  h1 {
    font-size: calc(1.5rem + 2vw);
    line-height: 1.2;
    margin-bottom: 3rem;
    position: relative;
    text-transform: capitalize;

    &:after {
      content: '';
      width: 3rem;
      height: 0.2rem;
      background-color: ${colors.green};
      position: absolute;
      display: block;
      bottom: -1.6rem;
      left: 0;
    }

    &.severe::after {
      background-color: ${colors.pink};
    }

    &.warn::after {
      background-color: ${colors.orange};
    }
  }

  h4 {
    text-transform: capitalize;
  }

  h5 {
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 1.5rem;
  }

  button {
    max-width: 15rem;
    padding: 0.75rem;
  }

  p {
    margin-bottom: 3rem;
    opacity: 0.75;
  }

  .results {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    padding: 1.5rem;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    height: 100%;

    @media only screen and (min-width: ${breakpoints.values.sm}px) {
      padding: 3rem;
      width: 70%;
    }

    @media only screen and (min-width: ${breakpoints.values.md}px) {
      width: 50%;
    }
  }
`;
