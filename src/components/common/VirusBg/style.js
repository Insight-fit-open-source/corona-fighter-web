import styled, { keyframes } from 'styled-components';

const slowMo = keyframes`
  0% {
  opacity: 0.8;
  transform: scale3d(1,1,1) rotate(-5deg);
  }
  70% {
  opacity: 0.8;
  transform: scale3d(1.1,1.1,1) rotate(0deg);
  }
  100% {
  opacity: 0.8;
  transform: scale3d(1,1,1) rotate(-5deg);
  }

`;

export default styled.div`
  position: fixed;
  mix-blend-mode: screen;
  bottom: -4%;
  left: 0;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  z-index: 0;
  height: 40vw;
  pointer-events: none;
  transform: translate3d(0, 0, 0);

  svg {
    width: auto;
    height: 100%;
    display: inline-block;
    position: relative;
    margin: 0 auto;
    animation: ${slowMo} 12s ease-in-out infinite;
  }

  @media only screen and (min-width: 600px) {
    bottom: -8%;
  }

  @media only screen and (min-width: 960px) {
    bottom: -18%;
  }
`;
