import styled from 'styled-components';
import colors from 'src/app/theme/colors';
import breakpoints from 'src/app/theme/breakpoints';

const Wrap = styled.div`
  display: block;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  padding: 5.5rem 1.5rem 3.5rem 1.5rem;
  background-color: ${colors.greyXLight};
  z-index: 100;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.365s;
  overflow: scroll;

  ${props =>
    props.open &&
    `
      opacity: 1;
      pointer-events: all;
  `}
`;

const PageHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  height: 3.5rem;
  background-color: ${colors.greyXLight};
  z-index: 10;
  padding: 0 1.5rem;
`;

const Content = styled.div`
  display: block;
  position: relative;
  overflow: hidden;§

  @media only screen and (min-width: ${breakpoints.values.md}px) {
    padding-right: 20%;
  }

  @media only screen and (min-width: ${breakpoints.values.lg}px) {
    padding-right: 35%;
  }
`;
const CloseButton = styled.button`
  background: none;
  border: none;
  width: initial;
  max-width: 3.5rem!important;
  height: 3.5rem!important;
  margin: 0!important;
  position: relative;
  top: 3px;
`;

export default {
  Wrap,
  PageHeader,
  Content,
  CloseButton,
};
