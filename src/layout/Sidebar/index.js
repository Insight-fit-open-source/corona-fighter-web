import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import colors from 'src/app/theme/colors';
import Styled from './fragments/styles';

import SidebarInner from './SidebarInner';

const darkTheme = theme => {
  return createMuiTheme({
    ...theme,
    palette: {
      ...theme.palette,
      type: 'dark',
      primary: {
        main: colors.white,
      },
    },
    overrides: {
      ...theme.overrides,
      MuiInputBase: {
        root: {
          color: colors.white,
        },
      },
      MuiFormLabel: {
        root: {
          color: colors.greyLight,
        },
      },
      MuiFormControlLabel: {
        label: {
          '&$disabled': { color: colors.greyLight },
        },
      },
      MuiSelect: {
        root: {
          color: colors.white,
        },
      },
      MuiSvgIcon: {
        root: {
          color: colors.white,
        },
      },
      MuiAppBar: {
        root: {
          color: colors.white,
        },
      },
      MuiPaper: {
        root: {
          color: colors.blueDark,
        },
      },
      MuiTab: {
        root: {
          backgroundColor: colors.blueDark,
        },
        wrapper: {
          color: colors.white,
        },
        textColorInherit: {
          opacity: 1,
        },
      },
      MuiSlider: {
        rail: {
          color: colors.greyLight,
        },
        markLabel: {
          color: colors.greyLight,
        },
        markLabelActive: {
          color: colors.greyLight,
        },
        thumb: {
          color: colors.pink,
        },
        track: {
          color: colors.pink,
        },
      },
    },
  });
};

const Sidebar = ({ children }) => (
  <Styled.Sidebar>
    <ThemeProvider theme={theme => darkTheme(theme)}>
      <SidebarInner />
    </ThemeProvider>
  </Styled.Sidebar>
);

export default Sidebar;
