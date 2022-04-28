import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import ReportList from '../../components/ReportList/ReportList'
import { Button, Title } from 'react-native-paper'
import * as Animatable from 'react-native-animatable'

export default function Page1({ navigation }) {
  return (
    <SafeAreaView style={styles.safe}>
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
      <Animatable.View animation="fadeInUpBig">
        <View>
          <View style={styles.title_container}>
            <Title style={styles.title}>Gestiona tus Reportes</Title>
          </View>
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
              color="#03A696"
              onPress={() => console.log('Pressed')}
            >
              Nuevo Reporte
            </Button>
            <Button
              style={styles.button2}
              icon="signal-cellular-3"
              mode="contained"
              color="#03A696"
              onPress={() => console.log('Pressed')}
            >
              Mostrar Grafica
            </Button>
           
          </View>
          </Animatable.View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  safe:{
    backgroundColor:"#253659",
    height:"100%"
  },
  scroll: {
    backgroundColor:"#253659",
    height:"92%"

  },
  container_buttons: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: "3%",
    paddingRight: "3%",
    marginTop:10,
    marginBottom:20
  },
  button1: {
    width: 180,
    height: 40,
  },
  button2: {
    width: 180,
    height: 40,
  },
  title:{
    marginTop:10,
    fontSize:30,
    color:"#fff",
    textAlign:'center',
    fontWeight:"bold"
  }, 
  title_container:{
    marginTop:10,
    marginBottom:10,
    backgroundColor:"#04bf9d", 
    height:50,
    borderRadius:50,
    marginLeft:"2%",
    marginRight:"2%"
  },
report_container:{
  borderRadius:20,
  backgroundColor:"#fff",
  marginLeft:"2%",
  marginRight:"2%"
}, 
container:{
},
})
