import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
    SplashScreen.hide();


  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
