import React from "react";
import LoginScreen from "../../screens/LoginScreen/LoginScreen";
import CarouselScreen from "../../screens/CarouselScreen/CarouselScreen";
import { EditProfile } from "../../screens/EditProfileScreen/EditProfile";
import { enableScreens } from "react-native-screens";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import NavigationButtomTab from "./NavigationButtomTab";

enableScreens();
const Stack = createNativeStackNavigator();

const NavigationStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown:false}}
      initialRouteName="LoginScreen"
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="CarouselScreen" component={CarouselScreen} />
      <Stack.Screen name="Tab" component={NavigationButtomTab} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
    </Stack.Navigator>
  );
};

export default NavigationStack;
