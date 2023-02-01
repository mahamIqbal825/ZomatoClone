import * as React from 'react';
import { TouchableOpacity, Image, Text, View, FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './Styles/index';

function MyOrderList(props) {
  const renderItem = ({ item, index }) => (
    <>
      <TouchableOpacity
        style={
          index === props.data.length - 1
            ? styles.orderLastList
            : styles.orderList
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
          style={styles.orderFoodBgGradiant}
        />
        <Image
          source={item.foodImage}
          resizeMode="cover"
          style={styles.orderFoodImgStyle}
        />
        <Image
          source={item.vegNonVegImg}
          resizeMode="cover"
          style={styles.vegNonVegImg}
        />
        <View style={styles.orderRightText}>
          <View style={styles.orderDateItemPriceText}>
            <Text style={styles.orderDateItemText}>{item.foodItemTime}</Text>
            <Text style={styles.orderFoodPriceText}>{item.foodPrice}</Text>
          </View>
          <Text style={styles.orderFoodHeadingText}>{item.foodName}</Text>
          <Text style={styles.orderFoodParegraphText}>{item.foodLocation}</Text>
          <View style={styles.orderFoodStatusBtn}>
            <View style={styles.orderStatusShap} />
            <Text style={styles.orderStatusText}>{item.orderStatus}</Text>
            <TouchableOpacity style={styles.reOrderBtn}>
              <Text style={styles.reOrderBtnText}>Re-Order</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
  return (
    <>
      <View style={[styles.restaurantDetailFoodlList, props.containerstyle]}>
        <FlatList
          bounces={false}
          data={props.data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </>
  );
}

export default MyOrderList;
