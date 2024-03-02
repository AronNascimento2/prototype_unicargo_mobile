import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useAuth} from '../../../authContext/authContext';

export const LoginScreen = () => {
  const {signIn} = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    signIn({username, password})
      .then(() => {})
      .catch(error => {
        console.error('Erro ao fazer login:', error.message);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.containerLogo}>
          <Image
            resizeMode="contain"
            style={styles.image}
            source={require('../../../assets/erplogo.png')}
          />
        </View>

        <TextInput
          placeholderTextColor="black"
          style={styles.input}
          value={username}
          onChangeText={setUsername}
          placeholder="Usuario"
        />
        <TextInput
          placeholderTextColor="black"
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <View style={styles.wrapperButtons}>
          <TouchableOpacity
            onPress={handleLogin}
            style={styles.button}
            activeOpacity={0.8}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              {backgroundColor: '#ccc', borderColor: '#999'},
            ]}
            activeOpacity={0.8}
            disabled={true}>
            <Text style={styles.buttonText}>Esqueci a senha</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerLogo: {
    height: 150,
    width: '100%',
    marginBottom: 30,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  wrapper: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapperButtons: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  input: {
    height: 50,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    width: '80%',
    color: 'black',
  },
  button: {
    height: 50,
    backgroundColor: '#097969',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    width: '80%',
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  wrapperBiometricToggle: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-between',
    alignItems: 'center',
    display: 'flex',
  },
});
