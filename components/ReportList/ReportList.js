import * as React from 'react';
import { View, StyleSheet} from "react-native";
import { RadioButton, List} from 'react-native-paper';

const ReportList = () => {
 const [value, setValue] = React.useState('reporte 1');

  return (
    <View>
    <List.Subheader style={styles.tittle}>Gestiona Tus Reportes</List.Subheader>
    <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
      <RadioButton.Item color= "#03A696" label="Reporte 1" value="reporte 1" />
      <RadioButton.Item color= "#03A696" label="Reporte 2" value="reporte 2" />
      <RadioButton.Item color= "#03A696" label="Reporte 3" value="reporte 3" />
      <RadioButton.Item color= "#03A696" label="Reporte 4" value="reporte 4" />
      <RadioButton.Item color= "#03A696" label="Reporte 5" value="reporte 5" />
      <RadioButton.Item color= "#03A696" label="Reporte 6" value="reporte 6" />
      <RadioButton.Item color= "#03A696" label="Reporte 7" value="reporte 7" />
      <RadioButton.Item color= "#03A696" label="Reporte 8" value="reporte 8" />
      <RadioButton.Item color= "#03A696" label="Reporte 9" value="reporte 9" />
      <RadioButton.Item color= "#03A696" label="Reporte 10" value="reporte 10" />
    </RadioButton.Group>
    </View>
  );
}; 

export default ReportList;
const styles = StyleSheet.create({
    tittle:{
      color:"#253659",
      fontWeight:'bold',
      left:18,
      fontSize:30,
    }
});
