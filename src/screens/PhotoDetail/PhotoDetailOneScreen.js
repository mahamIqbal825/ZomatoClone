import * as React from 'react';
import { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Share,
  FlatList
} from 'react-native';
import { Container, Content, Header } from '../../components';
import { Images } from '../../theme';
import CommonBtn from '../../components/CommonBtn';
import styles from './Styles/PhotoDetailStyle';
import LinearGradient from 'react-native-linear-gradient';
import { quantityFoodList } from '../../assets/data';

function PhotoDetailOneScreen({ navigation }) {
  const [foodCount, setFoodCount] = useState(1);
  const [radioBtn, setRadioBtn] = useState({});

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'https://zluck.com'
      });
    } catch (error) {
      // alert(error.message);
    }
  };

  const handleIncrementFood = () => {
    setFoodCount((prevCount) => prevCount + 1);
  };

  const handleDecrementFood = () => {
    if (foodCount <= 0) {
      setFoodCount(0);
    } else if (foodCount >= 0) {
      setFoodCount((prevCount) => prevCount - 1);
    }
  };

  const renderItem = ({ item, index }) => (
    <>
      <TouchableOpacity
        style={
          index === -1
            ? [styles.quantityFoodList, { marginBottom: 0 }]
            : styles.quantityFoodList
        }
        onPress={() => setRadioBtn(item.id)}>
        <Text style={styles.quantityFoodText}>{item.quantityFood}</Text>
        <Text style={styles.quantityFoodExtraPriceText}>
          {item.quantityFoodExtraPrice}
        </Text>
        <View style={styles.radioBtnOutSide} />
        <View style={radioBtn === item.id ? styles.radioBtnInSideActive : ''} />
      </TouchableOpacity>
    </>
  );
  return (
    <>
      <Container statusBarColorWhite conatinerStyle={styles.conatinerStyle}>
        <Header
          hasBackBtn
          hasShareLike
          onBackPress={() => navigation.goBack()}
          onSharePress={onShare}
        />
        <Content contentContainerStyle={styles.container}>
          <View style={styles.customContainer}>
            <Image
              source={Images.restaurantImgOne}
              resizeMode="cover"
              style={styles.foodCoverImg}
            />
          </View>
          <View style={styles.photoDetaileBottomContent}>
            <LinearGradient
              colors={['rgba(253, 245, 219, 0.1)', 'rgba(253, 245, 219, 0.8)']}
              start={{ x: 0.5, y: 0.9 }}
              end={{ x: 0.5, y: 0.3 }}
              style={styles.bgGradiant}
            />
            <View style={styles.customContainer}>
              <View style={styles.reatingStarVegNonVegImg}>
                <View style={styles.ratingStarRow}>
                  <Text style={styles.ratingStarText}>4.5</Text>
                  <Image
                    source={Images.ratingStar}
                    resizeMode="contain"
                    style={styles.ratingStarImg}
                  />
                  <Text style={styles.ratingStarReview}>(25+)</Text>
                </View>
                <Image
                  source={Images.VegLogo}
                  resizeMode="contain"
                  style={styles.vegNonVegImg}
                />
              </View>
              <Text style={styles.photoDetaileHeading}>Easy Greak Salad</Text>
              <Text style={styles.photoDetaileToppingText}>
                Chicken, Cheese and pineapple
              </Text>
              <Text style={styles.photoDetailePriceText}>$21.99</Text>
              <View style={styles.quantityContent}>
                <View style={styles.quantityCountRow}>
                  <Text style={styles.quantityCountHeading}>Quantity</Text>
                  <View style={styles.quantityCountNumberRow}>
                    <TouchableOpacity
                      style={styles.minusPluseBtn}
                      onPress={() => handleDecrementFood()}>
                      <Image
                        source={Images.MinusIcon}
                        resizeMode="contain"
                        style={styles.quantityCountPluseMinusImg}
                      />
                    </TouchableOpacity>
                    <Text style={styles.quantityCountText}>{foodCount}</Text>
                    <TouchableOpacity
                      style={styles.minusPluseBtn}
                      onPress={() => handleIncrementFood()}>
                      <Image
                        source={Images.PluseIcon}
                        resizeMode="contain"
                        style={styles.quantityCountPluseMinusImg}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <Text style={styles.quantityCountParagraph}>
                  Please select any one option
                </Text>
                <FlatList
                  data={quantityFoodList}
                  renderItem={renderItem}
                  keyExtractor={(item) => item.id}
                />
              </View>
              <CommonBtn
                normalBtn
                btnText="Add 21.9$"
                onPress={() => navigation.navigate('Order')}
              />
            </View>
          </View>
        </Content>
      </Container>
    </>
  );
}

export default PhotoDetailOneScreen;
