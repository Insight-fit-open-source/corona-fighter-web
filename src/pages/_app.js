import React from 'react';
import Router from 'next/router';
import { Provider } from 'react-redux';
import App from 'next/app';

import withRedux from 'next-redux-wrapper';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { StylesProvider, CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

import FirebaseFactory from 'src/app/lib/firebase';
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

    const getMessagingPermission = async () => {
      const { messaging } = await FirebaseFactory.get();
      if (messaging) {
        messaging
          .requestPermission()
          .then(() => messaging.getToken())
          .then(token => {
            store.dispatch(authActions.messagingTokenReceived({ token }));
          })
          .catch(err => console.log({ err }));
      }
    };

    getMessagingPermission();

    Router.onRouteChangeComplete = async url => {
      try {
        const { analytics } = await FirebaseFactory.get();
        await analytics.logEvent('page_location', {
          url,
        });
      } catch (e) {}
    };
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
