import styled from 'styled-components';
import colors from 'src/app/theme/colors';
import sizes from 'src/app/theme/sizes';

const Wrap = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

const BodyWrap = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;


const Body = styled.div`
  position: relative;
  flex: 1;
  padding: 0;
  overflow-x: hidden;
  overflow-y: auto;
`;

const BodyGeneral = styled.div`
  position: relative;
  flex: 1;
  padding: 0 1.5rem 3rem;
  overflow-y: auto;
`;

const AuthBody = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${sizes.space(0.75)};
  background-color: ${colors.blueDark};
    overflow-x: hidden;
  overflow-y: auto;
`;


const Styled = {
  Wrap,
  BodyWrap,
  Body,
  BodyGeneral,
  AuthBody,
};

export default Styled;
