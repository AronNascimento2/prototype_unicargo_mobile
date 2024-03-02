import {NavigationContainer} from '@react-navigation/native';
import {useAuth} from '../../authContext/authContext';
import {AppNavigator} from './AppNavigator';
import {AuthNavigator} from './AuthNavigator';
import React from 'react';

export const Router: React.FC = () => {
  const {user} = useAuth();
  return (
    <NavigationContainer>
      {user ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};
