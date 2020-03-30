import styled from 'styled-components';
import colors from 'src/app/theme/colors';

export default styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  min-width: 2.5rem;
  height: 2.5rem;
  background: ${colors.white};
  border: 2px solid ${colors.greyLight};
  border-radius: 100%;
  margin-right: 0.5rem;
  
    // complete state
  ${({ complete }) =>
    complete &&
    `
    border: 2px solid ${colors.pink};
    color: ${colors.pink};
    svg {
      fill: ${colors.pink};
    }
  `}

  // active state
  ${({ active }) =>
    active &&
    `
    background: ${colors.pink};
    border: 2px solid ${colors.pnik};
    color: ${colors.pink};
    svg {
      fill: ${colors.pink};
    }
  `}
`;
