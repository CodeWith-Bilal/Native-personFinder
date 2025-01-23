import React from 'react';
import Navigation from './src/navigation/Navigation';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  SplashScreen.hide();
  return (

    <Provider store={store}>
    <Navigation />

  </Provider>

  );
};

export default App;

