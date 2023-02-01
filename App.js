import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthRoute from './src/navigatons/AuthRoute';
function App(props) {
  return (
    <NavigationContainer>
      <AuthRoute />
    </NavigationContainer>
  );
}

export default App;
