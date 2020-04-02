import styled from 'styled-components';
import breakpoints from 'src/app/theme/breakpoints';
export default styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;

  h4 {
    margin-bottom: 1.5rem;
    line-height: 1.25;
  }

  @media (max-height: 600px) {
    height: auto;

    h4 {
      font-size: 1.25rem;
    }
  }

  @media only screen and (min-width: ${breakpoints.values.sm}px) {
    h4 {
          font-size: 1.56rem;
        line-height: 2.25rem;
    }
  }
`;
