import React from 'react';
import {Text, View, StyleSheet, TouchableHighlight} from 'react-native';
import {User} from '../../../../../services/user';

interface HistoryCard {
  user: User;
}

export const Card: React.FC<HistoryCard> = ({user}) => {
  return (
    <TouchableHighlight>
      <View style={styles.cardContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.clientName}>{user.name}</Text>
          <Text style={styles.codigo}>{user.id}</Text>
        </View>
        <View style={styles.containerInfos}>
          <View style={styles.history}>
            <View style={styles.historyInfo}>
              <Text style={styles.title}>CPF:</Text>
              <Text style={styles.info}>{user.cpf}</Text>
            </View>
            <View style={styles.historyInfo}>
              <Text style={styles.title}>Data do atendimento:</Text>
              <Text style={styles.info}>{user.date}</Text>
            </View>
          </View>
          <View style={styles.history}>
            <View style={styles.historyInfo}>
              <Text style={styles.title}>Motivo do contato:</Text>
              <Text style={styles.info}>{user.reason}</Text>
            </View>
            <View style={styles.historyInfo}>
              <Text style={styles.title}>Finalizado por</Text>
              <Text style={styles.info}>{user.finishedBy}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  address: {
    flex: 1,
  },
  nameCodeContainer: {
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    gap: 5,
  },

  nameContainer: {
    height: 60,
    padding: 10,
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    gap: 5,
    backgroundColor: '#097969',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  history: {
    width: '100%',

    marginBottom: 5,
  },
  cardContainer: {
    height: 180,
    width: '100%',
    borderColor: 'black',
    display: 'flex',
    backgroundColor: '#fff',
    marginBottom: 5,
    elevation: 5,
  },

  clientName: {
    fontSize: 18,
    fontWeight: 'bold',

    color: '#fff',
  },
  codigo: {
    display: 'flex',
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  horizontal: {
    flex: 1,
    justifyContent: 'center',
  },
  containerInfos: {
    padding: 10,

    display: 'flex',
  },
  title: {
    color: '#097969',
    fontWeight: 'bold',
    marginRight: 5,
  },
  info: {
    color: 'black',
  },
  historyInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
});
