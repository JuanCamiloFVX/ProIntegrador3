import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  StatusBar,
  Image,
} from "react-native";
import { TextInput, Button } from "react-native-paper";
import { gql, useQuery } from "@apollo/client";
import { useNavigation } from "@react-navigation/native";
import AppBar from "../../components/AppBar/AppBar";
import { SafeAreaView } from "react-native-safe-area-context";

export const EditProfile = () => {

  let ID = "624b7105672e125fd1b7f93f";
  const GET_USER_ID = gql`
    query{
      getUserById(_id:"${ID}"){
        user_name
        email
        phoneNumber
      }
    }
    `;

  const navigation = useNavigation();

  const { loading, error, data } = useQuery(GET_USER_ID);
  if (loading) return <Text>La informacion del usuario esta cargando</Text>;
  if (error) return <Text>Error!!+${ID}</Text>

  const [dataUser, setDataUser] = useState({
    UserName: data.getUserById.user_name,
    Email: data.getUserById.email,
    Phone: data.getUserById.phoneNumber,
  });

  const EditUserName = (text) => {
    setDataUser({ ...dataUser, UserName: text });
  };

  const EditEmail = (text) => {
    setDataUser({ ...dataUser, Email: text });
  };

  const EditPhone = (text) => {
    setDataUser({ ...dataUser, Phone: text });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor="#253659" />
      <AppBar title={"Editar Perfil"} />

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={Styles.ViewContainer}>
          <View style={Styles.ViewImage}>
            <Image
              style={Styles.Image}
              source={require("../../assets/images/logo.png")}
            />
          </View>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : null}
            style={Styles.container}
          >
            <View style={Styles.ViewTextInput}>
              <TextInput
                mode="outlined"
                style={Styles.TextInput}
                label="UserName"
                value={dataUser.UserName}
                onChangeText={(text) => EditUserName(text)}
                outlineColor="#03A696"
                activeOutlineColor="#9E7B2C"
              />

              <TextInput
                mode="outlined"
                style={Styles.TextInput}
                label="Email"
                value={dataUser.Email}
                onChangeText={(text) => EditEmail(text)}
                outlineColor="#03A696"
                activeOutlineColor="#9E7B2C"
              />

              <TextInput
                mode="outlined"
                style={Styles.TextInput}
                label="Phone"
                value={dataUser.Phone}
                onChangeText={(text) => EditPhone(text)}
                outlineColor="#03A696"
                activeOutlineColor="#9E7B2C"
              />
            </View>
          </KeyboardAvoidingView>
          <View style={Styles.ViewButtom}>
            <Button
              onPress={() => navigation.goBack()}
              color="#FFF"
              style={Styles.Buttom}
            >
              Editar
            </Button>
            <Button
              onPress={() => navigation.goBack()}
              color="#FFF"
              style={Styles.Buttom}
            >
              Cancelar
            </Button>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  TextInput: {
    marginTop: "5%",
    width: "85%",
    borderRadius: 20,
    elevation: 15,
    shadowColor: "#253659",
  },
  container: {
    flex: 1,
  },

  Buttom: {
    marginEnd: 6,
    marginStart: 6,
    elevation: 15,
    shadowColor: "#253659",
    backgroundColor: "#03A696",
    borderRadius: 30,
    width: 150,
  },

  Text: {
    fontSize: 30,
    color: "#FFF",
    fontWeight: "bold",
  },

  Image: {
    marginTop: "5%",
    marginBottom: "5%",
  },
  ViewButtom: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingLeft: "9%",
    paddingRight: "9%",
    marginTop: 10,
    marginBottom: "15%",
    backgroundColor: "#DDDBDC",
  },

  ViewTextInput: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#DDDBDC",
  },

  ViewContainer: {
    flex: 1,
    backgroundColor: "#DDDBDC",
  },

  ViewImage: {
    alignItems: "center",
    backgroundColor: "#03A696",
    borderBottomStartRadius: 90,
    borderBottomEndRadius: 90,
  },
});
