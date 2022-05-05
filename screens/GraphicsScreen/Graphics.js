import { View, Text } from 'react-native'
import React from 'react'
import PowerBi from "../../components/PowerBi/powerbi";
import AppBar from '../../components/AppBar/AppBar'


export default function Page2() {
  return (
    <View style={{ flex:1}}>
       <AppBar title = {"Gestion Graficas"}/>
    <PowerBi link ={"https://app.powerbi.com/view?r=eyJrIjoiMGY2NWMyYTAtMGIyYy00ZGZkLWJmM2UtMTk0NWUyZWU0NTExIiwidCI6IjRkZDEzM2ZkLWNhMmEtNDA5OC1hZTkxLTBlYWEwYzU4MjNiOCIsImMiOjR9"}/>
  </View>
  )
}