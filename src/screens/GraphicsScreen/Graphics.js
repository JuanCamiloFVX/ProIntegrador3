import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import PowerBi from "../../components/PowerBi/powerbi";
import AppBar from '../../components/AppBar/AppBar'
import { DataContext } from '../../context/DataContext';
import { gql, useQuery } from "@apollo/client";

export default function Page2() {

  const { dato } = useContext(DataContext);
  let link = dato;

  const GET_BY_ID = gql`
  query{
    getReportById(_id:"${link}"){
      url
    }
  }
  `;

  const { loading, error, data } = useQuery(GET_BY_ID);
  if (loading) return <Text>Su reporte esta cargando</Text>;
  if (error) return <Text>Error!!+${dato}</Text>;
console.log(data.getReportById.url);
  return (
    <View style={{ flex: 1 }}>
      <AppBar title={"Gestion Graficas"} />
      <PowerBi link={data.getReportById.url} />  
    </View>
  )
}