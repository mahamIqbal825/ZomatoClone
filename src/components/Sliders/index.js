import * as React from 'react';
import {
  Text,
  TouchableOpacity,
  Image,
  View,
  FlatList,
  Dimensions
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { offerImgData } from '../../assets/data';
import styles from './Styles/index';

function Sliders(props) {
  const windowWidth = Dimensions.get('window').width;
  const [index, setIndex] = React.useState(0);
  const isCarousel = React.useRef(null);
  let renderOfferItem = ({ item, index }) => (
    <Image
      source={item.image}
      resizeMode="cover"
      style={styles.offerSlideImg}
    />
  );
  const renderItem = ({ item, index }) => (
    <>
      {props.recommandedSlider && (
        <TouchableOpacity
          style={
            index === 0
              ? [styles.recommandedFoodItem, { marginLeft: 28 }]
              : index === props.data.length - 1
                ? [styles.recommandedFoodItem, { marginRight: 28 }]
                : [styles.recommandedFoodItem]
          }
          onPress={() => {
            if (props.onPress) {
              props.onPress();
            }
          }}>
          <LinearGradient
            colors={['rgba(253, 245, 219, 0.8)', 'rgba(253, 245, 219, 0.1)']}
            start={{ x: 0.5, y: 0.5 }}
            end={{ x: 0.5, y: 0 }}
            style={styles.recommandedBgGradiant}
          />
          <Image
            source={item.foodImg}
            resizeMode="contain"
            style={styles.recommandedFoodImgStyle}
          />
          <Text style={styles.recommandedFoodText}>{item.foodName}</Text>
        </TouchableOpacity>
      )}
      {props.repeatSlider && (
        <TouchableOpacity
          style={
            index === 0
              ? [styles.repeatOrderList, { marginLeft: 28 }]
              : index === props.data.length - 1
                ? [styles.repeatOrderList, { marginRight: 28 }]
                : [styles.repeatOrderList]
          }
          onPress={() => {
            if (props.onPress) {
              props.onPress();
            }
          }}>
          <LinearGradient
            colors={['rgba(253, 245, 219, 0.8)', 'rgba(253, 245, 219, 0.1)']}
            start={{ x: 0.5, y: 0.5 }}
            end={{ x: 0.5, y: 0 }}
            style={styles.repeatOrderBgGradiant}
          />
          <Image
            source={item.foodImg}
            resizeMode="contain"
            style={styles.repeatFoodImgStyle}
          />
          <Text style={styles.repeatFoodHeadingText}>{item.foodName}</Text>
          <Text style={styles.repeatFoodParegraphText}>{item.foodTopping}</Text>
          <Text style={styles.repeatFoodPriceText}>{item.foodPrice}</Text>
        </TouchableOpacity>
      )}
    </>
  );
  return (
    <>
      {props.listSlider && (
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={props.data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      )}
      {props.offerSlider && (
        <>
          <Carousel
            ref={(c) => {
              renderOfferItem = c;
            }}
            data={offerImgData}
            renderItem={renderOfferItem}
            sliderWidth={windowWidth}
            itemWidth={windowWidth - 58}
            activeSlideAlignment={'center'}
            onSnapToItem={() => setIndex(renderOfferItem.currentIndex)}
          />
          <View style={styles.carouselSliderPagination}>
            <Pagination
              dotContainerStyle={[styles.dotContainerStyle]}
              carouselRef={isCarousel}
              dotsLength={offerImgData.length}
              activeDotIndex={index}
              dotStyle={styles.paginationActiveDot}
              inactiveDotStyle={styles.paginationInActiveDot}
              inactiveDotOpacity={0.25}
              inactiveDotScale={1}
            />
          </View>
        </>
      )}
      {props.normalSlider && (
        <>
          <Carousel
            ref={(c) => {
              renderOfferItem = c;
            }}
            data={props.data}
            renderItem={renderOfferItem}
            sliderWidth={windowWidth - 58}
            itemWidth={windowWidth - 58}
            onSnapToItem={() => setIndex(renderOfferItem.currentIndex)}
          />
          <View style={styles.carouselSliderPagination}>
            <Pagination
              dotContainerStyle={[styles.dotContainerStyle]}
              carouselRef={isCarousel}
              dotsLength={props.data.length}
              activeDotIndex={index}
              dotStyle={styles.paginationActiveDot}
              inactiveDotStyle={styles.paginationInActiveDot}
              inactiveDotOpacity={0.25}
              inactiveDotScale={1}
            />
          </View>
        </>
      )}
    </>
  );
}

export default Sliders;
