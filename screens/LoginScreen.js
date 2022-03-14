import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { Button, TextInput } from "react-native-paper";


const LoginScreen = () => {

  const [text1, setText1] = React.useState("");
  const [text2,setText2] = React.useState("");
  return (
    <ScrollView style={styles.fond}>
      <View>
        <Image
          style={styles.figure1}
          source={require("../assets/figure1.png")}
        />
        <Image style={styles.logo} source={require("../assets/logo.png")} />
        <TextInput
          style={styles.input1}
          label="Email"
          value={text1}
          onChangeText={(text1) => setText1(text1)}
        />
        <TextInput
          style={styles.input2}
          label="Password"
          value={text2}
          secureTextEntry
          onChangeText={(text2) => setText2(text2)}
          right={<TextInput.Icon name="eye" />}
        />
        <Button
          style={styles.button}
          mode="contained"
          onPress={() => console.log("Pressed")}
        >
          <Text style={styles.text1}>Login</Text>
        </Button>
        <Image style={styles.figure2} source={require("../assets/figure2.png")} />
      </View>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  fond: {
    backgroundColor: "#253659",
  },
  figure1: {
    top: -30,
    width: "100%",
    height: 200,
  },
  logo: {
    top: -50,
    left: 60,
  },
  input1: {
    backgroundColor: "#FFFFFF50",
    width: 300,
    height: 50,
    left: 50,
  },
  input2: {
    backgroundColor: "#FFFFFF50",
    width: 300,
    height: 50,
    left: 50,
    marginTop: 10,
  },
  text1: { 
      color: "#253659" 
  },
  button: {
    backgroundColor: "#fff",
    width:300,
    left:50,
    marginTop: 30,

  },
  figure2:{
    top:30,
    left:-80,
    width:500, 
    height:200
  }
});
