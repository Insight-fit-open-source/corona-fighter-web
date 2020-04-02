import styled from 'styled-components';
import breakpoints from 'src/app/theme/breakpoints';

export default styled.div`
  will-change: 'transofrm';
  background-color: transparent;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-around;
  transform: ${props =>
    props.layoutActive ? 'translate3d(0, 0%, 0)' : 'translate3d(0, -150%, 0)'};
  transition: transform 0.45s ease-out 0.085s;

  @media (max-height: 600px) {
    overflow-y: scroll;
    display: block;
  }

  @media only screen and (min-width: ${breakpoints.values.md}px) {
    width: 80vw;
    height: 70vh;
  }

  @media only screen and (min-width: ${breakpoints.values.lg}px) {
    width: 70vw;
    height: 70vh;
  }
`;
