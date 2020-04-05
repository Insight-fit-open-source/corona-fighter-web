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
  
  label.MuiFormLabel-root.MuiInputLabel-root.MuiInputLabel-animated {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    line-height: 1.35;
}

  form {
    button {
      line-height: 1.2;
      padding: 0.75rem 3rem;
    }

    .MuiInput-root {
      margin-bottom: 0;
    }

    .MuiFormControl-root {
      width: 100%;
    }

    .custom-helper-text {
      opacity: 0.4;
      font-size: 95%;
      margin-top: 0.3rem;
    }

    .custom-label {
      font-size: 95%;
      opacity: 0.9;
    }

    input.location-search-input.form-control {
      width: 100%;
      height: 2.5rem;
      line-height: 2.5rem;
      font-size: 1rem;
      background: none;
      border: none;
      border-bottom: 1px solid ${colors.blueDark};
      color: v ${colors.blueDark};
      position: relative;

      &:focus {
        box-shadow: none;
        outline: none;
        border-bottom: 2px solid ${colors.pink};
      }
    }

    .location-wrap {
      position: relative;
    }

    .autocomplete-dropdown-container {
      position: absolute;
      top: 100%;
      left: 0%;
      width: 100%;
      background: #fff;
      font-size: 1rem;
      line-height: 2.25rem;
      color: ${colors.blueDark};
      box-shadow: 0 2px 8px rgba(0, 0, 20, 0.2);
      z-index: 20;

      span {
        padding: 0 0.75rem;
      }
    }
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

  @media only screen and (min-width: ${breakpoints.values
      .md}px) and (min-height: 600px) {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    padding: 3rem 25% 3rem 3rem;
    width: 100%;
  }

  @media only screen and (min-width: ${breakpoints.values.lg}px) {
    padding: 3rem 45% 3rem 3rem;
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

  button {
    margin: 1.5rem 0 0 0;
    width: 100%;
  }

  @media only screen and (min-width: ${breakpoints.values.md}px) {
    button {
      max-width: 20rem;
      padding: 0.75rem 0;
      margin: 1rem 1rem 3rem 0;
    }
  }
`;

export default {
  OnBoardingContent,
  OnBoardingBody,
};
