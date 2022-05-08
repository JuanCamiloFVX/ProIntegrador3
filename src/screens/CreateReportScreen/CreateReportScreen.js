import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  StatusBar,
  Image,
} from "react-native";
import { TextInput, Button } from "react-native-paper";
import { gql, useMutation } from "@apollo/client";
import { useNavigation } from "@react-navigation/native";
import AppBar from "../../components/AppBar/AppBar";
import { SafeAreaView } from "react-native-safe-area-context";

export const CreateReport = () => {

  const navigation = useNavigation();

  const [dataReport, setDataReport] = useState({
    Title: "",
    Descripcion: "",
    Url: "",
  });


  const Titleform = (text) => {
    setDataReport({ ...dataReport, Title: text });
  };

  const Descripcionform = (text) => {
    setDataReport({ ...dataReport, Descripcion: text });
  };

  const Urlform = (text) => {
    setDataReport({ ...dataReport, Url: text });
  };
  console.log({ data });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor="#253659" />
      <AppBar title={"Crear Reporte"} />

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={Styles.ViewContainer}>
          <View style={Styles.ViewImage}>
            <Image
              style={Styles.Image}
              source={require("../../assets/images/logo.png")}
            />
          </View>

          <View style={Styles.ViewTextInput}>
            <TextInput
              mode="outlined"
              style={Styles.TextInput}
              label="Titulo"
              value={dataReport.Title}
              onChangeText={(text) => Titleform(text)}
              outlineColor="#03A696"
              activeOutlineColor="#9E7B2C"
            />

            <TextInput
              mode="outlined"
              style={Styles.TextInput}
              label="Descripcion"
              value={dataReport.Descripcion}
              onChangeText={(text) => Descripcionform(text)}
              outlineColor="#03A696"
              activeOutlineColor="#9E7B2C"
            />

            <TextInput
              mode="outlined"
              style={Styles.TextInput}
              label="Url"
              value={dataReport.Url}
              onChangeText={(text) => Urlform(text)}
              outlineColor="#03A696"
              activeOutlineColor="#9E7B2C"
            />
            <View style={Styles.ViewButtom}>
              <Button
                onPress={() => navigation.goBack()}
                color="#FFF"
                style={Styles.Buttom}
              >
                Crear
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
