import { createMuiTheme } from '@material-ui/core/styles';

import palette from './palette';
import overrides from './overrides';
import breakpoints from './breakpoints';
import shadows from './shadows';
import sizes from './sizes';
import typography from './typography';

const theme = createMuiTheme({
  // Spacing is the sizes line height, in rems value, divided by 4, which is the minimum we can divide the space
  spacing: number => `${(sizes.lineHeight / sizes.fontSize / 4) * number}rem`,
  palette,
  overrides,
  breakpoints,
  shadows,
  typography,
});

export default theme;
