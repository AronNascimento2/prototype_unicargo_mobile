import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text, Image} from 'react-native';
import {
  faHistory,
  faPeopleGroup,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

export const HomeScreen: React.FC = () => {
  const navigation = useNavigation();

  const filteredRoutes = [
    {
      id: 5,
      path: 'history',
      label: 'historico',
      icon: faHistory,
    },
    {
      id: 6,
      path: 'profile',
      label: 'perfil',
      icon: faUser,
    },
    {
      id: 7,
      path: 'customers',
      label: 'clientes',
      icon: faPeopleGroup,
    },
  ];
  const handleIconPress = (path: string) => {
    navigation.navigate(path);
  };

  const renderIcons = () => {
    const icons = filteredRoutes.map(route => {
      return (
        <View key={route.path} style={styles.iconTextContainer}>
          <TouchableOpacity
            style={[styles.iconContainer]}
            onPress={() => {
              handleIconPress(route.path);
            }}>
            <FontAwesomeIcon
              size={25}
              icon={route.icon as IconProp}
              style={styles.icon}
            />
          </TouchableOpacity>
          <Text style={[styles.text]}>{route?.label}</Text>
        </View>
      );
    });

    return icons;
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={require('../../../assets/erplogo.png')}
        />
      </View>
      <View style={styles.wrapper}>{renderIcons()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconTextContainer: {
    alignItems: 'center',
  },
  icon: {
    color: '#fff',
  },

  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },

  iconContainer: {
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 70,
    borderRadius: 60,
    backgroundColor: '#097969',
  },
  disabledIcon: {
    backgroundColor: '#ccc',
    color: '#999',
  },
  disabledText: {
    color: '#999',
  },
  text: {
    fontSize: 16,
    color: '#097969',
  },

  container: {
    flex: 1,

    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 45,
  },
  containerLogo: {
    height: 150,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    gap: 13,
    flexWrap: 'nowrap',
    paddingTop: 60,
    flex: 1,
    flexDirection: 'row',
  },
});
