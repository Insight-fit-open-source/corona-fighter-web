import DateFnsUtils from '@date-io/date-fns';
import { CssBaseline } from '@material-ui/core';
import { StylesProvider, ThemeProvider } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import withRedux from 'next-redux-wrapper';
import App from 'next/app';
import Router from 'next/router';
import React from 'react';
import { Provider } from 'react-redux';
import FirebaseFactory from 'src/app/lib/firebase';
import theme from 'src/app/theme';
import Notification from 'src/components/Notification';
import 'src/components/Progress';
import 'src/components/Progress/style.css';
import { actions as authActions } from 'src/store/definitions/auth';
import { actions as profileActions } from 'src/store/definitions/profile';
import initStore from '../store';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    return {
      pageProps: Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {},
    };
  }

  state = {
    openNotification: false,
    message: '',
  };

  handleCloseNotification = () => {
    this.setState({ openNotification: false, message: '' });
  };

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
            store.dispatch(profileActions.messagingTokenReceived({ token }));
          })
          .catch(err => console.log({ err }));

        messaging.onMessage(payload => {
          this.setState({
            openNotification: true,
            message: payload.notification.body,
          });
        });
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
    const { message, openNotification } = this.state;

    return (
      <StylesProvider injectFirst>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <CssBaseline />
              <Notification
                message={message}
                openNotification={openNotification}
                handleCloseNotification={this.handleCloseNotification}
              />
              <Component {...pageProps} key={router.route} />
            </MuiPickersUtilsProvider>
          </ThemeProvider>
        </Provider>
      </StylesProvider>
    );
  }
}

export default withRedux(initStore)(MyApp);
