import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

//screens
import Login from '../screens/auth/Login/Login';
import UserInfo from '../screens/auth/UserInfo/UserInfo';

const AuthStack = createStackNavigator();
function AuthRoute(props) {
  return (
    <AuthStack.Navigator initialRouteName="SignIn">
      <AuthStack.Screen
        name="SignIn"
        component={Login}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="Landing"
        component={UserInfo}
        options={{headerShown: false}}
      />
    </AuthStack.Navigator>
  );
}

export default AuthRoute;
