import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Avatar, List, Card, Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import DialogEdit from "../components/DialogEdit/DialogEdit";

export default function profile() {

  const [data, setData] = useState({
    UserName: "NSKAELA",
    Name: "lucas Grover Valdez",
    Email: "lucasGroverValdez@gmail.com",
    Phone: "3227885678",
  });

  const Name = data.Name;
  const UserName = data.UserName;
  const Email = data.Email;
  const Phone = data.Phone;


  return (
    <SafeAreaView style={Styles.SafeAreaViewPerfil}>
      <View style={Styles.ViewProfile}>
      
      <View style={Styles.ViewImage}>
        <Avatar.Image

            style={Styles.Image}
            size={120}
            source={{
            uri: "https://www.teahub.io/photos/full/20-205382_beast-ape-wallpapers-hd-quality-para-perfil-de.jpg",
            }}
          />
          <Text style={Styles.TextName}>{Name}</Text>
        </View>
        <View style={Styles.ViewInformation}>
          <List.Item
            title="UserName"
            description={UserName}
            left={(props) => <List.Icon {...props} icon="account-circle" color= '#3C537E'/>}
          />

          <List.Item
            title="Email"
            description={Email}
            left={(props) => <List.Icon {...props} color="#3C537E" icon="email" />}
          />

          <List.Item
            title="Phone"
            description={Phone}
            left={(props) => <List.Icon {...props} icon="phone" color= '#3C537E'/>}
          />
              <DialogEdit data = {data} setData = {setData}/>
          </View>
            
        </View>
        
        
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({

  ViewProfile: {
    alignItems: "center",
    backgroundColor: '#253659',
    borderRadius: 20,
    justifyContent:'flex-end',  
    height: '90%',
    width: '90%',
  
  },
  ViewInformation: {

    width: "89%",
    height: 350,
    borderRadius:0,
    backgroundColor:'#03A696',
    marginBottom:'5%',

  },
  
  SafeAreaViewPerfil:{
    backgroundColor: '#04bf9d',
    width: '100%',
    height: '100%',
    justifyContent:'center',
    alignItems:'center',
  },

  ViewImage:{
    alignItems: 'center',
    width:'70%',
    padding:'6%',
  },

  Image:{
      margin:'5%',
  },

  TextName: {
    fontSize: 20,
    paddingTop: 15,
    paddingBottom:15,
    color: '#04bf9d',
  },

});
