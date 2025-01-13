import React from 'react';
import { View, Text } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

SplashScreen.hide();
const App = () => {
  return (
    <View style={{backgroundColor:'#ffff',flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize:100}}>HELLO</Text>
    </View>
  );
};

export default App;
