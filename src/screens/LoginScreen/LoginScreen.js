import React, { useEffect, useState } from "react";
import {
  Image,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageView,
  TextInput,
  Platform,
  StatusBar,
  Alert,
} from "react-native";
import { gql, useMutation } from "@apollo/client";
import * as Animatable from "react-native-animatable";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = ({ navigation }) => {
  const Auth_User = gql`
    mutation AuthUser($user_name: String!, $password: String!) {
      authUser(user: { user_name: $user_name, password: $password }) {
        token
      }
    }
  `;

  const [info, setInfo] = React.useState({
    username: "",
    password: "",
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  const [authUser, { loading,error,data }] = useMutation(Auth_User, {
     fetchPolicy: 'no-cache',
    ignoreResults: true,
  });
  if (loading) return <Text>Verificando Perfil</Text>;
  

  const textInputChange = (val) => {
    if (val.trim().length >= 4) {
      setInfo({
        ...info,
        username: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setInfo({
        ...info,
        username: val,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setInfo({
      ...info,
      secureTextEntry: !info.secureTextEntry,
    });
  };

  const handleValidUser = (val) => {
    if (val.trim().length >= 4) {
      setInfo({
        ...info,
        isValidUser: true,
      });
    } else {
      setInfo({
        ...info,
        isValidUser: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    if (val.trim().length >= 8) {
      setInfo({
        ...info,
        password: val,
        isValidPassword: true,
      });
    } else {
      setInfo({
        ...info,
        password: val,
        isValidPassword: false,
      });
    }
  };

  const loginHandle = async (userName, password) => {
    if (info.username.length == 0 || info.password.length == 0) {
      Alert.alert("Wrong Input!", "Usuario o Contraseña no debe estar vacio.", [
        { text: "Okay" },
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require("../../assets/images/logo.png")}
        />
      </View>
      <Animatable.View
        animation="fadeInUpBig"
        style={[
          styles.footer,
          {
            backgroundColor: "white",
          },
        ]}
      >
        <Text
          style={[
            styles.text_footer,
            {
              color: "black",
            },
          ]}
        >
          Usuario
        </Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="black" size={20} />
          <TextInput
            placeholder="Tu Usuario"
            placeholderTextColor="#666666"
            style={[
              styles.textInput,
              {
                color: "black",
              },
            ]}
            autoCapitalize="none"
            onChangeText={(val) => textInputChange(val)}
            onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
          />
          {info.check_textInputChange ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="green" size={20} />
            </Animatable.View>
          ) : null}
        </View>
        {info.isValidUser ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>
              Su Usuario debe tener minimo 4 caracteres
            </Text>
          </Animatable.View>
        )}

        <Text
          style={[
            styles.text_footer,
            {
              color: "black",
              marginTop: 35,
            },
          ]}
        >
          Contraseña
        </Text>
        <View style={styles.action}>
          <Feather name="lock" color="black" size={20} />
          <TextInput
            placeholder="Tu Contraseña"
            placeholderTextColor="#666666"
            secureTextEntry={info.secureTextEntry ? true : false}
            style={[
              styles.textInput,
              {
                color: "black",
              },
            ]}
            autoCapitalize="none"
            onChangeText={(val) => handlePasswordChange(val)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {info.secureTextEntry ? (
              <Feather name="eye-off" color="grey" size={20} />
            ) : (
              <Feather name="eye" color="grey" size={20} />
            )}
          </TouchableOpacity>
        </View>
        {info.isValidPassword ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>
              Su contraseña debe tener minimo 8 caracteres
            </Text>
          </Animatable.View>
        )}

        <TouchableOpacity>
          <Text style={{ color: "#009387", marginTop: 15 }}>
            ¿Olvidaste tu contraseña?
          </Text>
        </TouchableOpacity>
        <View style={styles.button}>
          <TouchableOpacity
            style={[
              styles.signIn,
              {
                borderColor: "#009387",
                borderWidth: 1,
                marginTop: 15,
              },
            ]}
            onPress={async () => {
              loginHandle(info.username, info.password);
                let userName = info.username;
                let password = info.password;
                 authUser({
                  variables: userName,
                  password,
                })
                  console.log(`data: ${userName}`);
                  await AsyncStorage.setItem("@storage_token", data);
                  navigation.navigate("CarouselScreen");
                  
              
            }}
          >
            <Text
              style={[
                styles.textSign,
                {
                  color: "#009387",
                },
              ]}
            >
              Iniciar sesión
            </Text>
          </TouchableOpacity>
          <Image
            style={styles.figure2}
            source={require("../../assets/images/figure2.png")}
          />
        </View>
      </Animatable.View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009387",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
  logo: {
    left: 50,
  },
  figure2: {
    top: 10,
    left: -25,
    width: 450,
    height: 200,
  },
});
