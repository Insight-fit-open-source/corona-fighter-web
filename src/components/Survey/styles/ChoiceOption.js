import breakpoints from 'src/app/theme/breakpoints';
import colors from 'src/app/theme/colors';
import sizes from 'src/app/theme/sizes';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

export default styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: 1px solid ${colors.greyLight};
  background-color: ${colors.white};
  animation: ${fadeIn} 1s linear none;
  transform: scale(1.05);
  transition: transform 165ms ease-in;
  opacity: 0.75;
  max-height: 7rem;

  h5 {
    font-weight: 300;
    text-align: center;
  }

  svg {
    width: 30%;
    margin-bottom: ${sizes.space(1)};
    fill: ${colors.greyMid};
  }

  .reveal-description {
    position: absolute;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    padding: ${sizes.space(0.5)};
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${colors.blueDark};
    color: ${colors.white};
    transition: opacity 0.225s ease-in-out;
    opacity: 0;

    p {
      font-size: 90%;
      line-height: 1.35;
    }
  }

  @media only screen and (min-width: ${breakpoints.values.md}px) {
    &:hover {
      border: 1px solid ${colors.blueLight};
      background-color: rgba(186, 232, 232, 0.25);

      .reveal-description {
        opacity: 0.8;
      }
    }
  }

  &:active {
    border: none;
    .reveal-description {
      opacity: 0;
    }
  }

  ${({ selected }) =>
    selected &&
    `
    opacity: 1;
    color: ${colors.blueDark};
    background-color: ${colors.blueLight};
    border: 1px solid ${colors.blueLight};
    box-shadow: 0px 5px 10px rgba(60, 30, 40, 0.15);
    transform: scale(1.08);

    svg {
      fill: ${colors.blueDark};
    }
  `}
`;
