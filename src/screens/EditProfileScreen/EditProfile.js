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
} from "react-native";
import { TextInput, Button } from "react-native-paper";
import { gql, useQuery } from "@apollo/client";
import { useNavigation } from "@react-navigation/native";
import AppBar from '../../components/AppBar/AppBar';
import { SafeAreaView } from "react-native-safe-area-context";

const GET_USER = gql`
  query {
    users {
      _id
      user_name
      email
      phoneNumber
    }
  }
`;

export const EditProfile = () => {

  const navigation = useNavigation();

  const { loading, error, data } = useQuery(GET_USER);

  console.log(data)
  const [dataUser, setDataUser] = useState({
    UserName: "NSKAELA",
    Email: "lucasGroverValdez@gmail.com",
    Phone: "3227885678",
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

    <SafeAreaView style={{flex:1}}>
      <StatusBar backgroundColor="#253659" />
        <AppBar title={"Editar Perfil"}/>
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={Styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={Styles.ViewContainer}>
        
          <View style={Styles.ViewTextInput}>
          

            <TextInput
              mode="outlined"
              style={Styles.TextInput}
              label="UserName"
              value={dataUser.UserName}
              onChangeText={(text) => EditUserName(text)}
              outlineColor= "#04bf9d"
              activeOutlineColor="#03A696"
            />

            <TextInput
              mode= "outlined"
              style={Styles.TextInput}
              label="Email"
              value={dataUser.Email}
              onChangeText={(text) => EditEmail(text)}
              outlineColor= "#04bf9d"
              activeOutlineColor="#03A696"
              
            />

            <TextInput
              mode= "outlined"
              style={Styles.TextInput}
              label="Phone"
              value={dataUser.Phone}
              onChangeText={(text) => EditPhone(text)}
              outlineColor= "#04bf9d"
              activeOutlineColor="#03A696"
              
            />
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
          
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  TextInput: {
    marginTop: "5%",
    width: "85%",
    borderRadius:20,
    elevation:15,
    shadowColor:"#253659",
  },
  container: {
    flex: 1,
  },

  Buttom: {
    marginEnd: 6,
    marginStart: 6,
    elevation:15,
    shadowColor:"#253659",
    backgroundColor: "#03A696",
    borderRadius:30,
    width:150,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },

  header:{
    alignItems:"center",
    backgroundColor:"#03A696",
    borderBottomEndRadius:20,
    borderBottomStartRadius:20,
    height:"10%",
    justifyContent:"center",
    width:"100%",
    marginBottom:"30%",
    
  },

  Text:{
    fontSize: 30,
    color: "#FFF",
    fontWeight: "bold",
  },

  ImageContainer:{
    backgroundColor:"#253659",
    width:"100%",
    alignItems:"center",
    height:"40%",
  },

  ViewButtom: {
    display: "flex",
    flexDirection: "row",
    marginTop: "30%",
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },

  ViewTextInput: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },

  ViewContainer: {
    flex: 1,
  },

});
