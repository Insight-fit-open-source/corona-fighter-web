import React from 'react';
import { Provider } from 'react-redux';
import App from 'next/app';
import dynamic from 'next/dynamic';
import { Store } from 'redux';
import withRedux from 'next-redux-wrapper';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { StylesProvider, CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

import { actions as authActions } from 'src/store/definitions/auth';
import theme from 'src/app/theme';

import initStore from '../store';
import 'src/components/Progress';
import 'src/components/Progress/style.css';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    return {
      pageProps: Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {},
    };
  }

  componentDidMount() {
    const { store } = this.props;
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode)
      jssStyles.parentNode.removeChild(jssStyles);

    store.dispatch(authActions.clientSessionStarted());
  }

  render() {
    const { Component, pageProps, store, router } = this.props;
    return (
      <StylesProvider injectFirst>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <CssBaseline />
              <Component {...pageProps} key={router.route} />
            </MuiPickersUtilsProvider>
          </ThemeProvider>
        </Provider>
      </StylesProvider>
    );
  }
}

export default withRedux(initStore)(MyApp);
