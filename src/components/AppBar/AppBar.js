import * as React from "react";
import { Appbar, Text } from "react-native-paper";
import { StyleSheet, View} from "react-native";

const AppBar = ({ title }) => (
  <Appbar style={Styles.bottom}>
    <View style={Styles.ViewTitle}>
    <Text style={Styles.title}> {title} </Text>
    </View>
  </Appbar>
);

export default AppBar;

const Styles = StyleSheet.create({
  bottom: {
    position: "relative",
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: "#253659",
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    alignItems: "center",
  },

  ViewTitle:{
    alignItems:"center",
    width:"100%"
  },
});
