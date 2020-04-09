import styled from 'styled-components';

const Container = styled.div`
  width: 100%;

  & > * + *: {
    margin-top: 1rem;
  }
`;

const Styled = {
  Container,
};

export default Styled;
