import styled from 'styled-components';
import colors from 'src/app/theme/colors';

export const Wrapper = styled.div`
max-width: 60rem;
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
`;
export const Item = styled.div`
  display: block;
  position: relative;
  width: 100%;
  padding 0 0 1.5rem;
`;
