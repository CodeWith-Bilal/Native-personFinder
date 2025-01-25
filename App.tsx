import React from 'react';
import Navigation from './src/navigation/Navigation';
import { Provider } from 'react-redux';
// import { store } from './src/redux/store';
import SplashScreen from 'react-native-splash-screen';
import { store } from './src/redux/store';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const App = () => {
  SplashScreen.hide();
  GoogleSignin.configure({
    webClientId: process.env.GOOGLE_CLIENT_ID, // Replace with your client ID
    offlineAccess: true, // If you need server-side authentication
  });
  return (

  <Provider store={store}>
     <Navigation />

  </Provider>

  );
};

export default App;

