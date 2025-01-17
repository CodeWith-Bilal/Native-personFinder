import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import Toast from 'react-native-toast-message';
import { Provider } from 'react-redux';
import store  from './src/redux/store';
import Splashscreen from 'react-native-splash-screen';
const App = () => {
  Splashscreen.hide();
  return (
    <Provider store={store}>
        <AppNavigator />
      <Toast />
    </Provider>
  );
};

export default App;
