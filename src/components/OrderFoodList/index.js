import * as React from 'react';
import { useState } from 'react';
import { TouchableOpacity, Image, Text, View, FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Images } from '../../theme';
import styles from './Styles/index';

function OrderFoodList(props) {
  const [foodCountOne, setFoodCountOne] = useState(2);
  const [foodCountTwo, setFoodCountTwo] = useState(2);

  const handleIncrementFoodOne = () => {
    setFoodCountOne((prevCount) => prevCount + 1);
  };

  const handleDecrementFoodOne = () => {
    if (foodCountOne <= 0) {
      setFoodCountOne(0);
    } else if (foodCountOne >= 0) {
      setFoodCountOne((prevCount) => prevCount - 1);
    }
  };

  const handleIncrementFoodTwo = () => {
    setFoodCountTwo((prevCount) => prevCount + 1);
  };

  const handleDecrementFoodTwo = () => {
    if (foodCountTwo <= 0) {
      setFoodCountTwo(0);
    } else if (foodCountTwo >= 0) {
      setFoodCountTwo((prevCount) => prevCount - 1);
    }
  };
  const renderItem = ({ item, index }) => (
    <>
      <TouchableOpacity
        style={styles.orderFoodList}
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
        <View>
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
        </View>
        <View style={styles.orderFoodDetails}>
          <View style={styles.orderFoodNamePrice}>
            <Text style={styles.orderFoodHeadingText}>{item.foodName}</Text>
            <Text style={styles.orderFoodPriceText}>{item.foodPrice}</Text>
          </View>
          <Text style={styles.orderFoodParegraphText}>{item.foodToppings}</Text>
          <View style={styles.addItemDeleteBtns}>
            <View style={styles.addItemRow}>
              <TouchableOpacity
                style={styles.minusPluseBtn}
                onPress={() => {
                  if (index === 0) {
                    handleDecrementFoodOne();
                  }
                  if (index === 1) {
                    handleDecrementFoodTwo();
                  }
                }}>
                <Image
                  source={Images.MinusIcon}
                  resizeMode="contain"
                  style={styles.addItemPluseMinusImg}
                />
              </TouchableOpacity>
              <Text style={styles.addItemCountText}>
                {index === 0 ? foodCountOne : foodCountTwo}
              </Text>
              <TouchableOpacity
                style={styles.minusPluseBtn}
                onPress={() => {
                  if (index === 0) {
                    handleIncrementFoodOne();
                  }
                  if (index === 1) {
                    handleIncrementFoodTwo();
                  }
                }}>
                <Image
                  source={Images.PluseIcon}
                  resizeMode="contain"
                  style={styles.addItemPluseMinusImg}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.deleteBtn}>
              <Image
                source={Images.DeleteIcon}
                resizeMode="contain"
                style={styles.addItemdeleteImg}
              />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
  return (
    <>
      <View style={[styles.orderFoodlList, props.containerstyle]}>
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

export default OrderFoodList;
