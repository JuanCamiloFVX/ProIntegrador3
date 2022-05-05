import React from "react";
import CarouselCards from "../../components/Carousel/Carousel";
import { StyleSheet, View , Text} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "react-native-paper";

const CarouselScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ backgroundColor: "#03A696", flex:1}}>
      <View style= {{paddingTop: 70}}>

      <CarouselCards/>
      <View style={{flex:1,justifyContent: 'flex-end' , top: 20, alignContent: "center"}}>

      <Button color="#253659" mode= 'outlined' style={{ width:160, position:"absolute", left:115}} onPress={() => navigation.navigate("Tab")}>
          <Text style = {{color:'white'}} > Get Started </Text>
        </Button>
      </View>
    </View>
    </SafeAreaView>
  );
};

export default CarouselScreen;
