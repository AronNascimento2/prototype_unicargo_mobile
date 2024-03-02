import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import {Card} from './components/Card';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons';
import {users} from '../../../services/user';

export const HistoryAttendance: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [refreshing, setRefreshing] = useState(false); // Estado para controlar o estado de atualização

  const onRefresh = () => {
    setRefreshing(true); // Atualize o estado de atualização para verdadeiro
    // Lógica de atualização aqui
    setTimeout(() => {
      setRefreshing(false); // Após a lógica de atualização, defina o estado de atualização de volta para falso
    }, 1000); // Tempo de simulação de atualização de 2 segundos
  };

  const handleClearText = () => {
    setSearchText('');
  };

  const handleSearch = (text: string) => {
    setSearchText(text);
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
              value={searchText}
              onChangeText={handleSearch}
            />
            {searchText.length > 0 && (
              <TouchableOpacity
                onPress={handleClearText}
                style={styles.clearButton}>
                <FontAwesomeIcon icon={faTimesCircle} size={20} color="#999" />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={['#097969']}
          />
        }>
        <View style={styles.cardContainer}>
          <View style={styles.container}>
            {users?.map(user => (
              <Card key={user.id} user={user} />
            ))}
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
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
    padding: 10,
  },
  container: {
    flex: 6,
  },
  text: {
    color: '#097969',
  },
});
