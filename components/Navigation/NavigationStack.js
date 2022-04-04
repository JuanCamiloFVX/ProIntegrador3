import React from "react";
import LoginScreen from "../../screens/LoginScreen";
import CarouselScreen from "../../screens/CarouselScreen";
import CarouselCards from '../Carousel/Carousel';
import { enableScreens } from "react-native-screens";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import ButtomTab from "./ButtomTab";

enableScreens();
const Stack = createNativeStackNavigator();

const NavigationStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="LoginScreen"
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="CarouselScreen" component={CarouselScreen} />
      <Stack.Screen name="TabNavigation" component={ButtomTab} />
    </Stack.Navigator>
  );
};

export default NavigationStack;
