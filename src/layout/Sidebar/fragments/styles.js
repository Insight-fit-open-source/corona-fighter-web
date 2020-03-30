import styled from 'styled-components';

import colors from 'src/app/theme/colors';
import sizes from 'src/app/theme/sizes';

const Sidebar = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  height: 100%;
  background-color: ${colors.blueDark};
  color: ${colors.white};
  border-right: 1px solid ${colors.blueMid};
  overflow-y: auto;
  position: relative;
  width: 30%;
  min-width: 15rem;
  max-width: 22rem;

  .branding {
    padding-left: 1.5rem;
  }

  .main-nav,
  .secondary-nav {
    width: 100%;
  }

  .main-nav {
    margin-bottom: auto;
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
      background: rgba(0, 0, 0, 0.25);
      border-left: 0.75rem solid deeppink;
    }
  }

  .sign-out {
    background-color: inherit;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: ${sizes.space(0.75)} ${sizes.space(1)};
    width: 100%;

    button {
      &:not(:last-of-type) {
        margin-bottom: ${sizes.space(0.75)};
      }
    }
  }
`;

export default {
  Sidebar,
};
