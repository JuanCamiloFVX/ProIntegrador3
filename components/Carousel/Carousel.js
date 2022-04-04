import React from "react";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Carousel, { Pagination } from "react-native-snap-carousel";
import CarouselCardItem, {
  SLIDER_WIDTH,
  ITEM_WIDTH,
} from "./CarouselCardItem";
import data from "../data/data";

const CarouselCards = () => {
  const [index, setIndex] = React.useState(0);
  const isCarousel = React.useRef(null);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.view2}>
        <Carousel
          
         
          layout="tinder"
          layoutCardOffset={9}
          ref={isCarousel}
          data={data}
          renderItem={CarouselCardItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          onSnapToItem={(index) => setIndex(index)}
          useScrollView={true}
        />
        <Pagination
          dotsLength={data.length}
          activeDotIndex={index}
          carouselRef={isCarousel}
          dotStyle={styles.dotActive}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
          tappableDots={true}
        />
      </View>
    </SafeAreaView>
  );
};

export default CarouselCards;

const styles = StyleSheet.create({


  dotActive: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 0,
    backgroundColor: 'white',
    
  },
  safeAreaView: {

    flex: 1,
    backgroundColor: '#253659',
    paddingTop: 60
    
  },

  view2:{

    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
    height: '100%'
  }
});
