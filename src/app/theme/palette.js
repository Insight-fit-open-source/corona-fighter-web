import { rgba } from 'polished';
import colors from './colors';

const palette = {
  primary: {
    main: colors.pink,
  },
  secondary: {
    main: colors.orange,
  },
  background: {
    paper: colors.white,
    default: '#fefefe',
  },
  "text": {
    "primary": rgba(colors.blueDark, 0.95),
    "secondary": rgba(colors.blueDark, 0.75),
    "disabled": "rgba(68, 85, 95, 0.7)",
    "hint": "rgba(0, 20, 40, 0.38)",
  }
};

export default palette;
