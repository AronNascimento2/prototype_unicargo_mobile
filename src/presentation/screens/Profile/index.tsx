import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

export const ProfileScreen: React.FC = () => {
  const infos = [
    {
      username: "mockUser",
      email: "mock@email.com",
      phone: "(11)00000-0000",
      birthDate: "00/00/0000",
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <View style={styles.circle}>
          <Image
            resizeMode="stretch"
            source={require("../../../assets/avatar.png")}
            style={styles.image}
          />
        </View>
      </View>
      <View style={styles.wrapper}>
        {infos.map((info) => {
          return (
            <>
              <View style={styles.wrapperInfos}>
                <Text style={styles.title}>Username</Text>
                <Text style={styles.decription}>{info.username}</Text>
              </View>
              <View style={styles.wrapperInfos}>
                <Text style={styles.title}>Email</Text>
                <Text style={styles.decription}>{info.email}</Text>
              </View>
              <View style={styles.wrapperInfos}>
                <Text style={styles.title}>Telefone</Text>
                <Text style={styles.decription}>{info.phone}</Text>
              </View>
              <View style={styles.wrapperInfos}>
                <Text style={styles.title}>Data de nascimento</Text>
                <Text style={styles.decription}>{info.birthDate}</Text>
              </View>
            </>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "#ccc",
    fontWeight: "600",
    paddingBottom: 5,
  },
  decription: {
    fontWeight: "600",
    fontSize: 16,
    paddingBottom: 10,
    color: "black",
  },
  circle: {
    height: 184,
    width: 184,
    borderRadius: 100,
    overflow: "hidden",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "80%",
    height: "80%",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  avatarContainer: {
    height: 324,
    backgroundColor: "#097969",
    justifyContent: "center",
    alignItems: "center",
  },

  wrapper: {
    flex: 1, // Faz o wrapper ocupar o restante da tela
    padding: 10,
    alignItems: "center",
    paddingTop: 30,
  },
  wrapperInfos: {
    width: 280,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 25,
  },
});
