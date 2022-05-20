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
import { gql,useMutation } from "@apollo/client";
import { useNavigation } from "@react-navigation/native";
import AppBar from "../../components/AppBar/AppBar";
import { SafeAreaView } from "react-native-safe-area-context";
import { GET_REPORTS} from "../../core/queries/Queries";

const SET_REPORT = gql`
  mutation addreport($title: String!, $description: String!, $url: String!) {
    createReport(
      report: { title: $title, description: $description, url: $url }
    ) {
      title
      description
      url
    }
  }
`;


export const CreateReport = () => {
  
  const navigation = useNavigation();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");

  const [createRe] = useMutation(SET_REPORT,{onError:(error)=> alert(error.message)});

  const handleSubmit = (e) => {
    e.preventDefault();

    createRe({ variables: { title, description, url }, refetchQueries:[{query:GET_REPORTS}] });

    

    setTitle("");
    setDescription("");
    setUrl("");

    navigation.navigate('Reports')
  };

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
              value={title}
              onChangeText={(text) => setTitle(text)}
              outlineColor="#03A696"
              activeOutlineColor="#9E7B2C"
            />

            <TextInput
              mode="outlined"
              style={Styles.TextInput}
              label="Descripcion"
              value={description}
              onChangeText={(text) => setDescription(text)}
              outlineColor="#03A696"
              activeOutlineColor="#9E7B2C"
            />

            <TextInput
              mode="outlined"
              style={Styles.TextInput}
              label="Url"
              value={url}
              onChangeText={(text) => setUrl(text)}
              outlineColor="#03A696"
              activeOutlineColor="#9E7B2C"
            />
            <View style={Styles.ViewButtom}>
              <Button 
              onPress={handleSubmit}
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

