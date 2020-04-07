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
  height: 100%;
  overflow: hidden;
  padding: 1.5rem;
  z-index: 5;
  transform: ${props =>
    props.layoutActive ? 'translate3d(0, 0%, 0)' : 'translate3d(0, 100%, 0)'};
  transition: transform 0.45s ease-out 0s;

  h1 {
    font-size: calc(1.5rem + 2vw);
    line-height: 1.2;
    margin-bottom: 3rem;
    position: relative;
    text-transform: none;

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
    width: 100%;
    max-width: 15rem;
    padding: 0.75rem;
    margin: 0 1rem 1rem 0;
    position: relative;
    z-index: 100;
  }

  p {
    margin-bottom: 3rem;
    opacity: 0.75;
  }

  .results {
    display: block;
    flex-flow: column nowrap;
    justify-content: center;
    padding: 1.5rem;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    height: 100%;
    z-index: 20;
    overflow-y: auto;

    .social-wrap {
      justify-self: flex-end;
      padding: 1.5rem 0 1rem 0;
      flex: 1;
      align-items: flex-end;

      h5 {
        margin: 0;
        font-size: 1rem;
        opacity: 0.75;
      }

      @media only screen and (min-height: 750px) and (min-width: ${breakpoints
          .values.md}px) {
        display: block;
        position: fixed;
        bottom: 0;
        left: 3rem;
        right: 0;
      }
    }

    @media only screen and (min-width: ${breakpoints.values.md}px) {
      display: flex;
      padding: 3rem 30% 3rem 3rem;
    }

    @media only screen and (min-width: ${breakpoints.values.lg}px) {
      padding: 3rem 50% 3rem 3rem;
    }

    @media (max-height: 750px) {
      overflow-y: scroll;
      display: block;
    }
  }
`;
