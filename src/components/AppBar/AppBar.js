import * as React from 'react';
import { Appbar, Text } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const AppBar = ({title}) => (
 <Appbar style={styles.bottom}>
<Text style={styles.title}>{title}</Text>
  </Appbar>
 );

export default AppBar

const styles = StyleSheet.create({
  bottom: {
    position: 'relative',
    left: 0,
    right: 0,
    top:0, 
    backgroundColor:"#253659", 
  },
  title:{
      color:"#fff", 
      fontWeight:"bold",
      fontSize:20, 
      marginLeft:"30%"
      
  }
});