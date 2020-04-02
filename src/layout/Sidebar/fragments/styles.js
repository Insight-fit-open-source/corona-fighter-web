import styled from 'styled-components';
import { rgba } from 'polished';
import colors from 'src/app/theme/colors';
import breakpoints from 'src/app/theme/breakpoints';

const Sidebar = styled.div`
  will-change: 'transform';
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: space-between;
  height: 100%;
  background-color: ${colors.blueDark};
  color: ${colors.white};
  border-right: 1px solid ${colors.blueMid};
  overflow-y: auto;
  width: 100%;
  max-width: inherit;
  position: fixed;
  z-index: 200;
  transition: transform 0.365s linear;
  transition-delay: 0.24s;
  transform: translate3d(-100%, 0, 0);
  ${props => props.active && 'transform: translate3d(-0%, 0, 0)'};

  @media only screen and (min-width: ${breakpoints.values.md}px) {
    width: 30%;
    min-width: 15rem;
    max-width: 22rem;
    position: sticky;
    transition: none;
    transform: translate3d(-0%, 0, 0);
    box-shadow: 3px 0px 14px ${rgba(colors.blueDark, 0.07)};
  }

  .branding {
    padding: 0.75rem 1.5rem 1.5rem;
    width: 14rem;
  }

  .main-nav,
  .secondary-nav {
    width: 100%;
  }

  .main-nav {
    flex: 2;
  }

  a {
    display: block;
    width: 100%;
    text-decoration: none;
    color: inherit;
    line-height: 1.5rem;
    padding: 0.75rem 0 0.75rem 1.5rem;
    text-transform: uppercase;

    &.active {
      background: rgba(0, 0, 0, 0.5);
      border-left: 0.75rem solid ${colors.pink};
    }
  }

  .secondary-nav a.active {
    border-left: 0.75rem solid ${colors.orange};
  }

  .sign-out {
    padding-top: 0.75rem;
    border-top: 1px dotted rgba(255, 100, 120, 0.5);
    margin-top: 0.75rem;

    button {
      padding: 0.75rem 0 1.5rem 1.5rem;
    }
  }
`;

export default {
  Sidebar,
};
