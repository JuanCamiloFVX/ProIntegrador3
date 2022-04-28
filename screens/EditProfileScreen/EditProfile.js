import React, {useState} from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Text, } from "react-native-paper";
import { gql, useQuery } from '@apollo/client';


export const EditProfile = () => {

    const [dataUser, setDataUser] = useState({

        UserName: "NSKAELA",
        Email: "lucasGroverValdez@gmail.com" ,
        Phone: "3227885678" ,
        
      });

    const EditUserName = (text) => {
        setDataUser({ ...dataUser, UserName: text });
      };
    
      const EditEmail = (text) => {
        setDataUser({ ...dataUser, Email: text });
      };
    
      const EditPhone = (text) => {
        setDataUser({ ...dataUser, Phone: text });
      };

  return (
   
      <View style={Styles.ViewTextInput}>
        <Text>EditProfile</Text>

        <TextInput
          style={Styles.TextInput}
          label="UserName"
          value={data.UserName}
          onChangeText={(text) => EditUserName(text)}
        />

        <TextInput
          style={Styles.TextInput}
          label="Email"
          value={data.Email}
          onChangeText={(text) => EditEmail(text)}
        />

        <TextInput
          style={Styles.TextInput}
          label="Phone"
          value={data.Phone}
          onChangeText={(text) => EditPhone(text)}
        />
      </View>
  );
};

const Styles = StyleSheet.create({
  TextInput: {
    marginTop: "5%",
    width: "90%",
  },

  ViewTextInput: {
    alignItems: "center",
  },
});
