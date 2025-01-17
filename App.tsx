import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
// import Toast from 'react-native-toast-message';
import { Provider } from 'react-redux';
import store  from './src/redux/store';
import SplashScreen from'react-native-splash-screen';
// import { NavigationContainer } from '@react-navigation/native';
const App = () => {
  SplashScreen.hide();
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
