import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen} from '../screens';
import React from 'react';

export const AuthNavigator: React.FC = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
