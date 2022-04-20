import { View, Text } from 'react-native'
import React from 'react'
import PowerBi from "../components/PowerBi/powerbi";

export default function Page2() {
  return (
    <View style={{ flex:1}}>
    <PowerBi link ={"https://app.powerbi.com/view?r=eyJrIjoiMGY2NWMyYTAtMGIyYy00ZGZkLWJmM2UtMTk0NWUyZWU0NTExIiwidCI6IjRkZDEzM2ZkLWNhMmEtNDA5OC1hZTkxLTBlYWEwYzU4MjNiOCIsImMiOjR9"}/>
  </View>
  )
}