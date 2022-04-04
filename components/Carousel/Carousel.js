import React from "react";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Carousel, { Pagination } from "react-native-snap-carousel";
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from "./CarouselCardItem";
import data from "../data/data";
import { Button } from "react-native-paper";

const CarouselCards = () => {
  const [index, setIndex] = React.useState(0);
  const isCarousel = React.useRef(null);

  return (
    <View style={styles.view2}>
      <View style={styles.view3}>
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
      </View>
      <View>
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
    </View>
  );
};

export default CarouselCards;

const styles = StyleSheet.create({
  dotActive: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 0,
    backgroundColor: "white",
  },
  safeAreaView: {
    flex: 1,
    backgroundColor: "#253659",
  },

  view2: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "94%",
  },
  view3: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    left:-16
  }
});
