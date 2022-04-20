import { View, Text, StyleSheet } from "react-native";
import React from "react";
import ReportList from "../components/ReportList/ReportList";
import { Button} from "react-native-paper";
import * as Animatable from 'react-native-animatable';

export default function Page1({ navigation }) {
  return (
    <Animatable.View
    animation="fadeInUpBig"
    >
    <View>
      <ReportList />
      <View style= {styles.button1}>
        <Button
          icon="upload"
          mode="contained"
          color="#253659"
          onPress={() => console.log("Pressed")}
        >
         Nuevo Reporte
        </Button>
              <View style= {styles.button2}>
        <Button
          icon="signal-cellular-3"
          mode="contained"
          color="#F27457"
          onPress={() => console.log("Pressed")}
        >
         Mostrar Grafica
        </Button>
      </View>
      </View>
    </View>
    </Animatable.View>
  );
}
const styles = StyleSheet.create({
  button1:{
    paddingTop:20,
    left:10,
    width:180, 
    marginTop:10
  },
  button2:{
    paddingTop:20,
    position:"absolute",
    width:180, 
    left:190
  }
});
