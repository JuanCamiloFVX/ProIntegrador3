import { View, Text, StyleSheet, ScrollView, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import ReportList from '../../components/ReportList/ReportList'
import { Button, Title,  IconButton } from 'react-native-paper'
import * as Animatable from 'react-native-animatable'
import AppBar from '../../components/AppBar/AppBar'
import { useNavigation } from '@react-navigation/native'


export default function Page1() {

  const navigation = useNavigation();
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
            Nuevo Reporte
          </Button>
          <Button
            style={styles.button2}
            icon="signal-cellular-3"
            mode="contained"
            color="#9E7B2C"
            onPress={() => navigation.navigate("Graphics")}
          >
            Mostrar Grafica
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
    width: 180,
    height: 40,
  },
  button2: {
    width: 180,
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
