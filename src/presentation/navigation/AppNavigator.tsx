import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, TouchableOpacity} from 'react-native';
import {useAuth} from '../../authContext/authContext';
import {ROUTES_PATHS} from './routesPaths'; // Importe as rotas aqui
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  const {signOut} = useAuth();

  const logout = () => {
    signOut();
  };

  return (
    <Stack.Navigator>
      {ROUTES_PATHS.map(route => (
        <Stack.Screen
          key={route.path}
          name={route.title}
          component={route.element}
          options={({navigation}) => ({
            headerLeft: () => null,
            headerTitle: '',
            headerRight: () => (
              <TouchableOpacity onPress={logout} style={{marginRight: 30}}>
                <Text style={{color: '#fff', fontWeight: '600'}}>Sair</Text>
              </TouchableOpacity>
            ),
            headerStyle: {
              borderBottomColor: '#097969',
              backgroundColor: '#097969', // Defina a cor de fundo do cabeçalho aqui
            },
            headerShown: navigation.isFocused(),
          })}
        />
      ))}
    </Stack.Navigator>
  );
};

export const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#097969', // Define a cor ativa
        tabBarInactiveTintColor: '#666', // Define a cor inativa
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: (
            {color, size}, // Define a propriedade tabBarIcon
          ) => (
            <FontAwesomeIcon icon={faHome} color={color} size={size} /> // Usa o ícone FontAwesome5
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};
