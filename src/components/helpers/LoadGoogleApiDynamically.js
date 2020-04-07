import { LoadScript } from '@react-google-maps/api';

class LoadGoogleApiDynamically extends LoadScript {
  componentDidMount() {
    const cleaningUp = true;
    const isBrowser = typeof document !== 'undefined';
    const isAlreadyLoaded =
      window.google &&
      window.google.maps &&
      document.querySelector('body.first-hit-completed'); // AJAX page loading system is adding this class the first time the app is loaded
    if (!isAlreadyLoaded && isBrowser) {
      if (window.google && !cleaningUp) {
        console.error('google api is already presented');
        return;
      }

      this.isCleaningUp().then(this.injectScript);
    }

    if (isAlreadyLoaded) {
      this.setState({ loaded: true });
    }
  }
}

export default LoadGoogleApiDynamically;
