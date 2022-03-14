import React, {useEffect, useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {

    const navigation = useNavigation();
  
    useEffect(() => {
        navigation.setOptions({
            headerLargeTitle: true,
            headerTitle: "Proyecto Integrador",
            headerRight: () => (
                <TouchableOpacity
                    onPress={() => navigation.navigate("Login")}
                    style={{
                        backgroundColor: "#04bf9d",
                        width: 90,
                        height: 30,
                        borderRadius: 10,
                        justifyContent: "center",
                    }}
                >
                    <Text
                        style={{
                            fontSize: 20,
                            textAlign: "center",
                            color: "white",
                        }}
                    >Login</Text>
                </TouchableOpacity>
            ),
         
        });
    }, [navigation]);

  
    return (
        <ScrollView>
           
        </ScrollView>
    );
    }

export default HomeScreen;

const styles = StyleSheet.create({
   
});