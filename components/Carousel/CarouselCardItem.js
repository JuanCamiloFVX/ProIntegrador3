import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from "react-native"
import { Button } from 'react-native-paper'

export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.63)

const CarouselCardItem = ({ item, index}) => {
  
  return (
    <View style={styles.container} key={index}>
      <Image
        source={{ uri: item.imgUrl }}
        style={styles.image}
      />
      <Text style={styles.header}>{item.title}</Text>

    </View>
  )
}
const styles = StyleSheet.create({


  container: {

    display: 'flex',
    justifyContent: 'center', 
    backgroundColor: '#253659',
    borderRadius: 5,
    width:330,
    height:'100%',
    paddingBottom: 20,
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  image: {

    height: 200,
    width: 200,
    alignSelf:'center',
    position:'absolute',
    top: 130,
  },
  header: {
    color: "#fff", 
    fontSize: 34,
    position: 'absolute',
    bottom:60,
    alignSelf:'center',
    fontWeight: "bold",
    textAlign:'center',
  },
})

export default CarouselCardItem