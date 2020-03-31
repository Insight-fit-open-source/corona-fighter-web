import styled from 'styled-components';
import sizes from 'src/app/theme/sizes';
import colors from 'src/app/theme/colors';

const TitleWrap = styled.div`
  width: 100%;
  
    h1,
  p {
    text-align: center;
    color: ${colors.white};
    width: 100%;
    margin: 0 auto 1.5rem;
  }

  h1 {
    font-size: calc(1rem + 1.8vw + 1.2vh);
    line-height: 1.1;
    max-width: 22rem;

    @media only screen and (min-width: 480px) {
      max-width: 34rem;
    }

    @media only screen and (min-width: 1280px) {
      max-width: 44rem;
    }
  }

  p {
    font-size: 14px;
    line-height: 1.5;
    display: none;
    max-width: 30rem;

    @media only screen and (min-height: 540px) {
      display: block;
    }
    @media only screen and (min-width: 480px) {
      font-size: 1rem;
    }
  }

  span {
    font-weight: 700;
  }
`;

const Styled = { TitleWrap };

export default Styled;
