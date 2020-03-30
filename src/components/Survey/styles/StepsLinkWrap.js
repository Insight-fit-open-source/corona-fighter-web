import styled from 'styled-components';
import sizes from 'src/app/theme/sizes';
import colors from 'src/app/theme/colors';

export default styled.div`
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  height: ${sizes.space(3.5)};
  left: -1.25rem;

  a {
    display: inline-block;
    position: relative;
    width: 100%;
    text-decoration: none;
    text-transform: capitalize;
    color: ${colors.white};
    font-size: calc(1rem + 0.25vw);
    line-height: ${sizes.space(3.5)};
    cursor: pointer;
  }
`;
