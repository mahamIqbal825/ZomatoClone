import * as React from 'react';
import { TouchableOpacity, Image, Text, View, FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Images } from '../../theme';
import styles from './Styles/index';

function AddCartFoodList(props) {
  const renderItem = ({ item, index }) => (
    <>
      <TouchableOpacity
        style={[
          props.sliderView
            ? index === 0
              ? [styles.addCartFoodSlider, { marginLeft: 28 }]
              : index === props.data.length - 1
                ? [styles.addCartFoodSlider, { marginRight: 28 }]
                : [styles.addCartFoodSlider]
            : styles.addCartFoodList,
          props.addCartFoodContentStyle
        ]}
        onPress={() => {
          if (props.onPress) {
            props.onPress();
          }
        }}>
        <LinearGradient
          colors={['rgba(253, 245, 219, 0.8)', 'rgba(253, 245, 219, 0.1)']}
          start={{ x: 0.5, y: 0.5 }}
          end={{ x: 0.5, y: 0 }}
          style={styles.addCartFoodBgGradiant}
        />
        <Image
          source={item.foodImage}
          resizeMode="cover"
          style={
            props.sliderView
              ? styles.addCartFoodSliderImgStyle
              : styles.addCartFoodImgStyle
          }
        />
        <Image
          source={item.vegNonVegImg}
          resizeMode="cover"
          style={
            props.sliderView ? styles.vegNonVegSliderImg : styles.vegNonVegImg
          }
        />
        <Text style={styles.addCartFoodHeadingText}>{item.foodName}</Text>
        <Text style={styles.addCartFoodParegraphText}>{item.foodToppings}</Text>
        <View
          style={
            props.sliderView
              ? styles.addCartFoodSliderPrice
              : styles.addCartFoodPrice
          }>
          <Text style={styles.addCartFoodPriceText}>{item.foodPrice}</Text>
          {props.addCartBtn && (
            <TouchableOpacity
              style={styles.addCartAddBtn}
              onPress={() => {
                if (props.onAddBtnPress) {
                  props.onAddBtnPress();
                }
              }}>
              <Text style={styles.addCartFoodAddText}>Add</Text>
              <Image
                source={Images.PluseIcon}
                resizeMode="contain"
                style={styles.addCartPluseImg}
              />
            </TouchableOpacity>
          )}
          {props.likeBtn && (
            <TouchableOpacity
              style={styles.likeBtn}
              onPress={() => {
                if (props.onLikeBtnPress) {
                  props.onLikeBtnPress();
                }
              }}>
              <Image
                source={Images.LikeYellowBtn}
                resizeMode="contain"
                style={styles.likeBtnImg}
              />
            </TouchableOpacity>
          )}
        </View>
      </TouchableOpacity>
    </>
  );
  return (
    <>
      <View style={[styles.restaurantDetailFoodlList, props.containerstyle]}>
        {props.listView && (
          <FlatList
            bounces={false}
            numColumns={2}
            data={props.data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        )}
        {props.sliderView && (
          <FlatList
            horizontal
            data={props.data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        )}
      </View>
    </>
  );
}

export default AddCartFoodList;
