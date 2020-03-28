import Router from 'next/router';
import NProgress from 'nprogress';

NProgress.configure({
  minimum: 0.35,
  showSpinner: false,
  easing: 'ease-in',
  speed: 300,
});

const startProgress = () => NProgress.start();
const stopProgress = timer => {
  clearTimeout(timer);
  NProgress.done();
};

const showProgressBar = delay => {
  const timer = setTimeout(startProgress, delay);
  Router.events.on('routeChangeComplete', () => stopProgress(timer));
  Router.events.on('routeChangeError', () => stopProgress(timer));
};

Router.events.on('routeChangeStart', () => showProgressBar(300));
