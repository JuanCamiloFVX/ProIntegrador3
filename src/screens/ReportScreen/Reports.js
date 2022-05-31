import { View, Text, StyleSheet, ScrollView, SafeAreaView, StatusBar, Alert } from 'react-native'
import React from 'react'
import { useState, useContext } from "react";
import ReportList from '../../components/ReportList/ReportList'
import { Button, Title,  IconButton } from 'react-native-paper'
import * as Animatable from 'react-native-animatable'
import AppBar from '../../components/AppBar/AppBar'
import { useNavigation } from '@react-navigation/native'
import { gql, useMutation } from "@apollo/client";
import { DataContext } from '../../context/DataContext';
import { GET_REPORTS } from "../../core/queries/Queries";


export default function Page1() {

  const navigation = useNavigation();

  const { dato } = useContext(DataContext);

  let id = dato;

  const DELETE_REPORT = gql`
  mutation{
    deleteReport(report:{
      _id:"${id}"
    })
  }
`;

  const [deleteSelectReport] = useMutation(DELETE_REPORT, {
    onError: (error) => Alert.alert("Selection Error","Debes seleccionar un Reporte para Borrar !!"),
  });
   const handleSubmit = () => {
    Alert.alert("Confirma",'¿Estas seguro que deseas borrar este Reporte?.', [
     { 
       text: 'Ok',mode:'cancel',
        onPress:()=>{  
        deleteSelectReport({
        refetchQueries: [{ query: GET_REPORTS }],
       });
      }
    }    
     ], );
  };

  return (
    <SafeAreaView style={styles.safe}>
       <StatusBar backgroundColor="#253659" />
      <AppBar title = {"Gestion Reportes"}/>
      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          <Animatable.View animation="fadeInUpBig">
            <View>
              <View style={styles.report_container}>
                <ReportList />
              </View>
            </View>
          </Animatable.View>
        </View>
      </ScrollView>
      <Animatable.View animation="fadeInLeft">
        <View style={styles.container_buttons}>
          <Button
            style={styles.button1}
            icon="upload"
            mode="contained"
            color="#9E7B2C"
            onPress={() => navigation.navigate("CreateReport")}
          >
            New Report
          </Button>
          <Button
            style={styles.button2}
            icon="signal-cellular-3"
            mode="contained"
            color="#9E7B2C"
            onPress={() => navigation.navigate("Graphics")}
          >
            Show Graph
          </Button>
          <Button
            style={styles.button3}
            icon="delete"
            mode="contained"
            color="#b32821"
            onPress={() =>handleSubmit()}
          >
            Del
          </Button>
        </View>
      </Animatable.View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  safe: {
    backgroundColor: '#DDDBDC',
    height: '100%',
  },
  scroll: {
    backgroundColor: '#DDDBDC',
    height: '92%',
  },
  container_buttons: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: '3%',
    paddingRight: '3%',
    marginTop: 10,
    marginBottom: 20,
  },
  button1: {
    width: 140,
    height: 40,
  },
  button2: {
    width: 140,
    height: 40,
  },
  button3: {
    width: 80,
    height: 40,
  },
  report_container: {
    borderRadius: 20,
    backgroundColor: '#fff',
    marginLeft: '2%',
    marginRight: '2%',
    marginTop:"5%"
  },
  container: {},
})
