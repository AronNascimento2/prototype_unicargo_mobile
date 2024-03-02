import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  Text,
  RefreshControl,
  Image,
} from 'react-native';
import {users} from '../../../services/user';

export const CustomersScreen: React.FC = () => {
  const [refreshing, setRefreshing] = useState(false); // Estado para controlar o estado de atualização

  const onRefresh = () => {
    setRefreshing(true); // Atualize o estado de atualização para verdadeiro
    // Lógica de atualização aqui
    setTimeout(() => {
      setRefreshing(false); // Após a lógica de atualização, defina o estado de atualização de volta para falso
    }, 1000); // Tempo de simulação de atualização de 2 segundos
  };

  return (
    <>
      <View>
        <View style={styles.containerInput}>
          <View style={styles.searchInputContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Buscar por cliente"
              placeholderTextColor="#999"
            />
          </View>
        </View>
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        } // Adicionando refreshControl
      >
        <View style={styles.cardContainer}>
          {users.map(person => {
            return (
              <View key={person.name} style={styles.container}>
                <View style={styles.person}>
                  <View style={styles.circle}>
                    <Image
                      resizeMode="stretch"
                      source={require('../../../assets/avatar.png')}
                      style={styles.image}
                    />
                  </View>

                  <Text style={{color: 'black'}}>{person.name}</Text>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '80%',
    height: '80%',
  },
  person: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    width: 50,
    height: 50,
    backgroundColor: '#cccccc',
    borderRadius: 100,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 40,
    borderColor: 'gray',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    height: 40,
  },
  clearButton: {
    padding: 5,
  },
  cardContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchInput: {
    width: '90%',
    height: 80,
    borderColor: 'transparent',
    paddingHorizontal: 10,
    color: 'black',
    margin: 0,
  },
  containerInput: {
    backgroundColor: '#097969',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContainer: {
    backgroundColor: '#fff',
    flexGrow: 1,
    color: 'black',
  },
  container: {
    height: 78,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    justifyContent: 'center',
    paddingLeft: 10,
  },
  text: {
    color: '#097969',
  },
});
