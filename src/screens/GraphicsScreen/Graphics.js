import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import PowerBi from "../../components/PowerBi/powerbi";
import AppBar from '../../components/AppBar/AppBar'
import {DataContext} from '../../context/DataContext';


export default function Page2() {

  const {data} = useContext(DataContext);

  console.log(data);

  return (
    <View style={{ flex:1}}>
       <AppBar title = {"Gestion Graficas"}/>
       <Text>{data}</Text>
    {/* <PowerBi link ={"https://app.powerbi.com/view?r=eyJrIjoiMGY2NWMyYTAtMGIyYy00ZGZkLWJmM2UtMTk0NWUyZWU0NTExIiwidCI6IjRkZDEzM2ZkLWNhMmEtNDA5OC1hZTkxLTBlYWEwYzU4MjNiOCIsImMiOjR9"}/> */}
  </View>
  )
}