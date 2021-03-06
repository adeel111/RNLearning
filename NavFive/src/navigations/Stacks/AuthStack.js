import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../../screens/Login';
import Signup from '../../screens/Signup';

const Stack = createStackNavigator();

function AuthStack(props) {
  return (
    <Stack.Navigator initialRouteName="Login" headerMode="none">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
}

export default AuthStack;
