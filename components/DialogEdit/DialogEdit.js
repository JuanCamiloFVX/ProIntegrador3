import React, { useState } from "react";
import {
  Button,
  Dialog,
  Portal,
  Provider,
  TextInput,
} from "react-native-paper";
import { View, StyleSheet } from "react-native";

const DialogEdit = ({ data, setData }) => {
  const [visible, setVisible] = useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  const EditUserName = (text) => {
    setData({ ...data, UserName: text });
  };

  const EditEmail = (text) => {
    setData({ ...data, Email: text });
  };

  const EditPhone = (text) => {
    setData({ ...data, Phone: text });
  };


  return (
    <Provider DialogEdit={DialogEdit}>
      <View>
        <Button style={Styles.ButtonEdit} color= '#3C537E'onPress={showDialog}> Editar Informacion</Button>
        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog} style={Styles.DialogEdit}>
            <Dialog.Content>
              <TextInput
                label="UserName"
                value={data.UserName}
                onChangeText={(text) => EditUserName(text)}
              />
              <TextInput
                style= {Styles.TestsInput}
                label="Email"
                value={data.Email}
                onChangeText={(text) => EditEmail(text)}
              />
              <TextInput

                style= {Styles.TestsInput}
                label="Phone"
                value={data.Phone}
                onChangeText={(text) => EditPhone(text)}
              />
            </Dialog.Content>
            <Dialog.Actions>
              <Button color = '#03A696' onPress={hideDialog}>ok</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    </Provider>
  );
};

export default DialogEdit;

const Styles = StyleSheet.create({


    TestsInput:{
        marginTop:20,
    },
    ButtonEdit:{
      marginTop:'20%',
    },

    DialogEdit:{

      backgroundColor:'#253659',
      width:300,
      alignSelf:'center',
    }

});
