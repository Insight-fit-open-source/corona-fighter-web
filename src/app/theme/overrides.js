import sizes from './sizes';

const overrides = {
  MuiInputBase: {
    root: {
      marginBottom: sizes.space(1),
    },
    marginDense: {
      marginBottom: sizes.space(0.25),
    },
  },
  MuiTypography: {
    body1: {
      '&.MuiTypography-gutterBottom': {
        marginBottom: sizes.space(1),
      },
    },
    h1: {
      '&.MuiTypography-gutterBottom': {
        marginBottom: sizes.space(1),
      },
    },
    h2: {
      '&.MuiTypography-gutterBottom': {
        marginBottom: sizes.space(1),
      },
    },
    h3: {
      '&.MuiTypography-gutterBottom': {
        marginBottom: sizes.space(0.5),
      },
    },
    h4: {
      '&.MuiTypography-gutterBottom': {
        marginBottom: sizes.space(0.5),
      },
    },
    h5: {
      '&.MuiTypography-gutterBottom': {
        marginBottom: sizes.space(0.75),
      },
    },
    h6: {
      '&.MuiTypography-gutterBottom': {
        marginBottom: sizes.space(0.5),
      },
    },
    subtitle1: {
      '&.MuiTypography-gutterBottom': {
        marginBottom: sizes.space(0.5),
      },
    },
    subtitle2: {
      '&.MuiTypography-gutterBottom': {
        marginBottom: sizes.space(1),
      },
    },
    overline: {
      '&.MuiTypography-gutterBottom': {
        marginBottom: sizes.space(0.5),
      },
    },
  },
};

export default overrides;
