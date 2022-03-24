import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

//screens
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import LoginScreen from "./screens/LoginScreen";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeStackNavigator = createNativeStackNavigator();

function MyStack() {
    return (
        <HomeStackNavigator.Navigator
            initialRouteName="HomeScreen"
        >
            <HomeStackNavigator.Screen
                name="HomeScreen"
                component={HomeScreen}
            />
            <HomeStackNavigator.Screen
                name="Login"
                component={LoginScreen}
                options={{
                    headerBackTitleVisible: false,
                }}
            />
        </HomeStackNavigator.Navigator>
    )
}   


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions= {{
            tabBarActiveTintColor: '#04bf9d',
        }}
      >
        <Tab.Screen 
            name="bottom" 
            component={MyStack} 
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={30} />
                ),
                tabBarBadge: 10,
                headerShown: false,
            }}
        />
   
    </Tab.Navigator>
    );
}


export default function Navigation() {
  return (
    <NavigationContainer>
      <HomeScreen/>
    </NavigationContainer>
  );
}

