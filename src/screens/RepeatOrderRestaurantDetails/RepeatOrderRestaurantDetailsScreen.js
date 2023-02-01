import * as React from 'react';
import { useState, useRef } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Share,
  FlatList,
  Dimensions
} from 'react-native';
import { Container, Content, Header } from '../../components';
import { Colors, Images } from '../../theme';
import RestaurantDetailSliderName from '../../components/RestaurantDetailSliderName';
import styles from './Styles/RepeatOrderRestaurantDetailsStyle';
import CommonSearchInput from '../../components/CommonSearchInput';
import CommonHeadingBtn from '../../components/CommonHeadingBtn';
import AddCartFoodList from '../../components/AddCartFoodList';
import LinearGradient from 'react-native-linear-gradient';
import RBSheet from 'react-native-raw-bottom-sheet';
import { BlurView } from '@react-native-community/blur';
import {
  FoodListData,
  restaurantDetailSliderData,
  FoodSliderListData,
  previousOrderList,
  repeatOrderMenuList
} from '../../assets/data';


function RepeatOrderRestaurantDetailsScreen({ navigation }) {
  const windowHeight = Dimensions.get('window').height;
  const refRBSheet = useRef();
  const [blurActive, setBlurActive] = useState(false);
  const [vegSwitch, setVegSwitch] = useState(true);
  const [nonVegSwitch, setNonVegSwitch] = useState(false);
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'https://zluck.com'
      });
    } catch (error) {
      // alert(error.message);
    }
  };

  const renderItem = ({ item }) => (
    <>
      <TouchableOpacity
        style={styles.previousOrderList}
        onPress={() => navigation.navigate('PhotoDetailTwo')}>
        <LinearGradient
          colors={['rgba(253, 245, 219, 0.8)', 'rgba(253, 245, 219, 0.1)']}
          start={{ x: 0.5, y: 0.5 }}
          end={{ x: 0.5, y: 0 }}
          style={styles.previousOrderBgGradiant}
        />
        <Image
          source={item.foodImage}
          resizeMode="contain"
          style={styles.previousOrderImgStyle}
        />
        <Text style={styles.previousOrderHeadingText}>{item.foodName}</Text>
        <Text style={styles.previousOrderParegraphText}>
          {item.foodToppings}
        </Text>
        <View style={styles.previousOrderPriceItemRow}>
          <Text style={styles.previousOrderPriceText}>{item.foodPrice}</Text>
          <Text style={styles.previousOrderTotalItemText}>
            {item.foodTotalItem}
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
  const renderMenuListItem = ({ item, index }) => (
    <>
      <TouchableOpacity
        style={
          index === 0 ? [styles.menuList, { marginTop: 0 }] : styles.menuList
        }>
        <Text style={styles.menuItemName}>{item.menyItemName}</Text>
        <Text style={styles.menuItemRightText}>{item.menuItemRightText}</Text>
      </TouchableOpacity>
    </>
  );
  return (
    <>
      <Container gradiantBg statusBarColor>
        <Header
          hasBackBtn
          transparent
          hasShareLike
          onBackPress={() => navigation.goBack()}
          onSharePress={onShare}
        />
        <Content contentContainerStyle={styles.container}>
          <View style={styles.customContainer}>
            <RestaurantDetailSliderName data={restaurantDetailSliderData} />
            <CommonSearchInput
              greenInput
              searchRowStyle={styles.searchRowStyle}
              searchInputStyle={styles.searchInputStyle}
              placeHolderText={Colors.searchGreenPlaceholder}
            />
            <View style={styles.switchMenuBtnRow}>
              <View style={styles.switchRow}>
                <Text style={styles.switchText}>Veg</Text>
                <TouchableOpacity
                  style={styles.switchBtn}
                  onPress={() => setVegSwitch(!vegSwitch)}>
                  <View style={styles.vegSwitchBackLine} />
                  <View
                    style={
                      vegSwitch
                        ? styles.vegSwitchHandalOn
                        : styles.vegSwitchHandalOff
                    }
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.switchRow}>
                <Text style={styles.switchText}>Non-Veg</Text>
                <TouchableOpacity
                  style={styles.switchBtn}
                  onPress={() => setNonVegSwitch(!nonVegSwitch)}>
                  <View style={styles.nonVegSwitchBackLine} />
                  <View
                    style={
                      nonVegSwitch
                        ? styles.nonVegSwitchHandalOn
                        : styles.nonVegSwitchHandalOff
                    }
                  />
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={styles.menuBtn}
                onPress={() => {
                  setBlurActive(true);
                  refRBSheet.current.open();
                }}>
                <Image
                  source={Images.MenuPlateIcon}
                  resizeMode="contain"
                  style={styles.menuBtnImg}
                />
                <Text style={styles.menuBtnText}>Menu</Text>
              </TouchableOpacity>
            </View>
            <CommonHeadingBtn headingText="Previous Delicious Orders" />
            <View style={styles.previousOrderListRow}>
              <FlatList
                bounces={false}
                numColumns={2}
                data={previousOrderList}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
              />
            </View>
            <View style={styles.totalPriceAddItemBtn}>
              <Text style={styles.totalPriceText}>595 $</Text>
              <TouchableOpacity style={styles.addItemBtn}>
                <Text style={styles.addItemBtnText}>Add</Text>
                <Image
                  source={Images.PluseIcon}
                  resizeMode="contain"
                  style={styles.addItemBtnImg}
                />
              </TouchableOpacity>
            </View>
            <CommonHeadingBtn headingText="Today’s Delicious Foods" />
            <AddCartFoodList
              listView
              addCartBtn
              data={FoodListData.slice(0, 4)}
              onPress={() => navigation.navigate('PhotoDetailOne')}
            />
            <CommonHeadingBtn
              headingText="Recommended Foods"
              containerStyle={styles.recommendedSliderHeading}
            />
          </View>
          <AddCartFoodList
            sliderView
            addCartBtn
            data={FoodSliderListData}
            onPress={() => navigation.navigate('PhotoDetailOne')}
          />
          <View style={styles.customContainer}>
            <AddCartFoodList
              listView
              addCartBtn
              data={FoodListData.slice(4, 8)}
              containerstyle={styles.addCartBottomList}
              onPress={() => navigation.navigate('PhotoDetailOne')}
            />
          </View>
        </Content>
      </Container>
      {blurActive && (
        <BlurView
          style={styles.absolute}
          blurType="dark"
          blurAmount={10}
          reducedTransparencyFallbackColor="white"
        />
      )}
      <RBSheet
        closeOnDragDown
        closeOnPressMask
        animationType="slide"
        ref={refRBSheet}
       
        customStyles={{
          wrapper: {
            backgroundColor: Colors.transparent
          },
          draggableIcon: {
            backgroundColor: Colors.black,
            width: 60,
            height: 3,
            borderRadius: 2
          },
          container: {
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
            paddingBottom: 20,
            paddingTop: 0,
            marginTop: 0,
            height: windowHeight - 200
          }
        }}
        onClose={() => setBlurActive(false)}>
        <LinearGradient
          colors={['rgba(253, 245, 219, 0.1)', 'rgba(253, 245, 219, 0.8)']}
          start={{ x: 0.5, y: 0.9 }}
          end={{ x: 0.5, y: 0 }}
          style={styles.bottomSheetBgGradiant}
        />
        <View style={styles.bottomSheetContainer}>
          <Text style={styles.menuHeading}>Today’s Delicious Foods</Text>
          <FlatList
            bounces={false}
            data={repeatOrderMenuList}
            renderItem={renderMenuListItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      </RBSheet>
    </>
  );
}

export default RepeatOrderRestaurantDetailsScreen;
