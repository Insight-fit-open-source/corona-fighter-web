import styled from 'styled-components';

import colors from 'src/app/theme/colors';
import sizes from 'src/app/theme/sizes';

const Sidebar = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: space-between;
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
  
   .main-nav, .secondary-nav {
    padding-bottom: 3rem;
    width: 100%;
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
      background: rgba(0,0,0,0.25);
      border-left: 0.75rem solid deeppink;
    }
  }
`;

export default {
  Sidebar,
};
