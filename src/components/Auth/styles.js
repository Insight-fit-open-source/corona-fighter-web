import styled from 'styled-components';
import sizes from 'src/app/theme/sizes';
import colors from 'src/app/theme/colors';

const TitleWrap = styled.div`
  margin: ${sizes.space(4)} 0;

  h1,
  h5 {
    color: ${colors.white};
  }

  span {
    font-weight: 700;
  }
`;

const Styled = { TitleWrap };

export default Styled;
