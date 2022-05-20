import React, { useState} from "react";
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
import { gql, useMutation, useQuery } from "@apollo/client";
import { useNavigation } from "@react-navigation/native";
import AppBar from "../../components/AppBar/AppBar";
import { SafeAreaView } from "react-native-safe-area-context";
import { GET_USER_ID, GET_USER } from "../../core/queries/Queries";


const IDD = "624b7105672e125fd1b7f93f";

export const SET_USER = gql`

  mutation update(
    $user_name: String!
    $email: String!
    $phoneNumber: String!
    
  ) {
    updateUser(
      user: {
        _id: "${IDD}"
        user_name: $user_name
        email: $email
        phoneNumber: $phoneNumber
      }
    ) {
      _id
      user_name
      email
      phoneNumber
      name
      rol_id
      
    }
  }
`;

export const EditProfile = () => {
  const navigation = useNavigation();

  const { loading, error, data } = useQuery(GET_USER_ID);
  if (loading) return <Text>La informacion del usuario esta cargando</Text>;
  if (error) return <Text>Error!!+${ID}</Text>;

  const [updateUs] = useMutation(SET_USER);

  const [User_name, setUsername] = useState(data.getUserById.user_name);
  const [Email, setEmail] = useState(data.getUserById.email);
  const [PhoneNumber, setPhoneNumber] = useState(data.getUserById.phoneNumber);

  const handleSubmit = (e) => {
    e.preventDefault();

      updateUs({ 
        variables: {User_name, Email, PhoneNumber}
      })
    
      navigation.navigate("Profile")

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
                value={User_name}
                onChangeText={(text) => setUsername(text)}
                outlineColor="#03A696"
                activeOutlineColor="#9E7B2C"
              />

              <TextInput
                mode="outlined"
                style={Styles.TextInput}
                label="Email"
                value={Email}
                onChangeText={(text) => setEmail(text)}
                outlineColor="#03A696"
                activeOutlineColor="#9E7B2C"
              />

              <TextInput
                mode="outlined"
                style={Styles.TextInput}
                label="Phone"
                value={PhoneNumber}
                onChangeText={(text) => setPhoneNumber(text)}
                outlineColor="#03A696"
                activeOutlineColor="#9E7B2C"
              />
              <View style={Styles.ViewButtom}>
                <Button
                  onPress={handleSubmit}
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
          </KeyboardAvoidingView>
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
    height: "12%",
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
    justifyContent: "center",
    flexDirection: "row",
    paddingLeft: "9%",
    paddingRight: "9%",
    paddingTop: "36%",
    marginTop: 10,
    marginBottom: "15%",
    backgroundColor: "#DDDBDC",
    height: "100%",
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
