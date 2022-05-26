import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Avatar, List, Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import AppBar from '../../components/AppBar/AppBar';
import { gql, useQuery } from "@apollo/client";
import {GET_USER} from "../../core/queries/Queries";

export default function profile() {

  const navigation = useNavigation();

  const {loading,error,data} = useQuery(GET_USER);
  if (loading) return <Text>La informacion del usuario esta cargando</Text>;
  if (error) return <Text>Error!!+${ID}</Text>
  
  return (
    <SafeAreaView style={Styles.SafeAreaViewPerfil}>
      <AppBar title={"Perfil"}/>
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
            
            <Text style={Styles.TextName}>{data.getUserById.name}</Text>
            <Text style={Styles.TextRol}>{data.getUserById.rol_id}</Text>
          </View>
        </Animatable.View>

        <View style={Styles.ViewInformation}>
          <Animatable.View animation="fadeInLeft">
            <List.Item
              title="UserName"
              description={data.getUserById.user_name}
              left={(props) => (
                <List.Icon {...props} icon="account-circle" color="#3C537E" />
              )}
            />

            <List.Item
              title="Email"
              description={data.getUserById.email}
              left={(props) => (
                <List.Icon {...props} color="#3C537E" icon="email" />
              )}
            />

            <List.Item
              title="Phone"
              description={data.getUserById.phoneNumber}
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
    marginTop:"3%",
    marginBottom:"3%",
  },
  ViewInformation: {
    width: "100%",
    height: 350,
    borderBottomRightRadius: 100,
    backgroundColor: "#FFF",
    paddingTop:"5%",
  },

  SafeAreaViewPerfil: {
    flex:1,
    backgroundColor: "#DDDBDC",
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
