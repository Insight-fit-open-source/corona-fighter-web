import colors from 'src/app/theme/colors';
import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 100%;
  margin: 3rem 0;
  p.MuiTypography-root.MuiTypography-body1 small {
    display: block;
    opacity: 0.45;
  }

  .MuiExpansionPanelSummary-root.normal {
    border-left: 6px solid ${colors.green};
  }
  .MuiExpansionPanelSummary-root.warn {
    border-left: 6px solid ${colors.orange};
  }
  .MuiExpansionPanelSummary-root.severe {
    border-left: 6px solid ${colors.pink};
  }

  .panel-inner {
    p {
      margin-bottom: 0.75rem;
    }
  }

  .MuiButtonBase-root {
    margin-bottom: 2rem;
  }
`;
export const Item = styled.div`
  display: block;
  position: relative;
  width: 100%;
  padding 0 0 1.5rem;
`;
