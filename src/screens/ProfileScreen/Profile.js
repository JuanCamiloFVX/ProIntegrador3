import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Avatar, List, Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import AppBar from '../../components/AppBar/AppBar'
export default function profile() {

  const navigation = useNavigation();

  const [data, setData] = useState({
    UserName: "NSKAELA",
    Name: "Lucas Grover Valdez",
    Email: "lucasGroverValdez@gmail.com",
    Phone: "3227885678",
    Rol: "Administrador",
  });

  const Name = data.Name;
  const UserName = data.UserName;
  const Email = data.Email;
  const Phone = data.Phone;
  const Rol = data.Rol;

  return (
    <SafeAreaView style={Styles.SafeAreaViewPerfil}>
      <View style={Styles.ViewProfile}>
        <Animatable.View animation="fadeInLeft">
          <View style={Styles.ViewImage}>
            <Avatar.Image
              style={Styles.Image}
              size={120}
              source={{
                uri: "https://us.123rf.com/450wm/kritchanut/kritchanut1406/kritchanut140600114/29213224-hombre-foto-de-perfil-silueta-avatar.jpg?ver=6",
              }}
            />

            <Text style={Styles.TextName}>{Name}</Text>
            <Text style={Styles.TextRol}>{Rol}</Text>
          </View>
        </Animatable.View>

        <View style={Styles.ViewInformation}>
          <Animatable.View animation="fadeInLeft">
            <List.Item
              title="UserName"
              description={UserName}
              left={(props) => (
                <List.Icon {...props} icon="account-circle" color="#3C537E" />
              )}
            />

            <List.Item
              title="Email"
              description={Email}
              left={(props) => (
                <List.Icon {...props} color="#3C537E" icon="email" />
              )}
            />

            <List.Item
              title="Phone"
              description={Phone}
              left={(props) => (
                <List.Icon {...props} icon="phone" color="#3C537E" />
              )}
            />
          </Animatable.View>
          <View style={Styles.ViewButtonEdit}>
            <Button
              style={Styles.ButtonEdit}
              onPress={() => navigation.navigate("EditProfile")}
              color="#3C537E"
            >
              Editar Informacion
            </Button>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  ViewProfile: {
    alignItems: "center",
    backgroundColor: "#253659",
    borderBottomRightRadius: 100,
    borderTopLeftRadius: 100,
    justifyContent: "flex-end",
    height: "90%",
    width: "90%",
  },
  ViewInformation: {
    width: "100%",
    height: 350,
    borderBottomRightRadius: 100,
    backgroundColor: "#FFF",
    marginBottom: "0%",
  },

  SafeAreaViewPerfil: {
    backgroundColor: "#DDDBDC",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  ViewImage: {
    alignItems: "center",
    width: "70%",
    padding: "6%",
  },

  Image: {
    margin: "5%",
  },

  TextName: {
    fontSize: 20,
    paddingTop: 15,
    paddingBottom: 5,
    color: "#FFF",
    fontWeight: "bold",
  },

  TextRol: {
    fontSize: 12,
    color: "#B0B5BF",
  },

  ButtonEdit: {
    width: "60%",
    alignContent: "center",
    alignItems: "center",
    marginTop: "15%",
    borderRadius:30,
  },
  ViewButtonEdit: {
    alignItems: "center",
    alignContent: "center",
  },
});
