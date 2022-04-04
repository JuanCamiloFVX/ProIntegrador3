import React from "react";
import CarouselCards from "../components/Carousel/Carousel";
import { StyleSheet, View} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "react-native-paper";
import { head } from "lodash";

const CarouselScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ backgroundColor: "#253659", flex:1}}>
      <View>

      <CarouselCards/>
      <View style={{backgroundColor:'red', flex:1,justifyContent: 'flex-end'}}>

      <Button icon="camera" mode="contained" Style={{ flex:1 }} onPress={() => navigation.navigate("TabNavigation")}>
          Hola
        </Button>
      </View>
    </View>
    </SafeAreaView>
  );
};

export default CarouselScreen;
