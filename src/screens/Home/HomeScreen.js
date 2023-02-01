import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { Container, Content } from '../../components';
import { Colors } from '../../theme';
import styles from './Styles/HomeStyle';
import CommonHeadingBtn from '../../components/CommonHeadingBtn';
import CommonSearchInput from '../../components/CommonSearchInput';
import RestaurantNearYou from '../../components/RestaurantNearYou';
import Sliders from '../../components/Sliders';
import { recommandedFoodData } from '../../assets/data';
import { getCart } from '../../redux/actions/ShoppingAction'
import { useDispatch, useSelector } from 'react-redux'
import UserCurrentLocation from '../../components/LocationModal/userCurrentLocation'
import SnackBar from 'react-native-snackbar-component'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MyOrderHistoryHome from '../../components/OrderHistoryHome/index'

function HomeScreen({ navigation }) {

  const [layout] = useState([0]);
  const keyExtractor = useCallback(() => (index) => String(index), [])
  const [viewSnacker, setViewSnacker] = useState(false);

  const cartAmount = useSelector((state) => state.shoppingReducer.item_total)

  useEffect(() => {
    setTimeout(() => setViewSnacker(cartAmount > 0), 100)
  }, [cartAmount])

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCart());
  }, []);

  const renderItem = useCallback(({ item, index }) =>
    <View>
      <AppLogo navigation={navigation} />
      <HeroSlider />
      <RepeatOrders navigation={navigation} />
      {/* <RecomendedFood /> */}
      <ResturantNearYou navigation={navigation} />
    </View>
    , [])

  const fnGoto = () => navigation.navigate('Order')
  const fnDelete = () => { }

  const renderMessage = useCallback(() => <TextMessage fnGoto={fnGoto} fnDelete={fnDelete} />, [viewSnacker])

  return (
    <Container statusBarColor={Colors.transparent}>
      <Content listView={true}>
        <FlatList
          contentContainerStyle={{ paddingBottom: 40, }}
          bounces={true}
          data={layout}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          showsVerticalScrollIndicator={false}
        />
      </Content>
      <SnackBar visible={viewSnacker}
        textMessage={renderMessage}
        //actionHandler={() => { navigation.navigate('Order') }} actionText={'Next'}
        containerStyle={{ height: 60, paddingBottom: 0 }}
        backgroundColor='rgba(1, 0, 13, 0.7)'
        messageStyle={{ fontWeight: '800' }}
        accentColor='orange' />
    </Container>
  );
}

export default HomeScreen;

const TextMessage = ({ fnGoto, fnDelete }) => (
  <View style={{ flexDirection: 'row', alignItems: 'center', paddingStart: 10, paddingEnd: 10 }}>

    <TouchableOpacity style={{ flex: 1 }} onPress={fnGoto}>
      <Text style={{ color: '#fff', fontSize: 14, fontFamily: 'SofiaPro' }}>ZainExpress</Text>
      <Text style={{ color: '#fff', fontSize: 12, paddingTop: 4, fontFamily: 'SofiaPro' }}>You have items saved in your cart</Text>
    </TouchableOpacity>

    <View style={{ flexDirection: 'row', alignItems: 'center' }}>

      <TouchableOpacity onPress={fnGoto}
        style={{ borderWidth: 1, borderRadius: 5, borderColor: '#fff', marginEnd: 10 }}>
        <Text style={{
          color: '#fff', fontSize: 14, fontFamily: 'SofiaPro',
          paddingStart: 10, paddingEnd: 10, paddingTop: 5, paddingBottom: 5
        }}>View</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={fnDelete}>
        <Ionicons name={'close-circle-outline'} size={30} color={'#fff'} />
      </TouchableOpacity>
    </View>
  </View>
)




const AppLogo = ({ navigation }) => {
  return (
    <View style={styles.customContainer}>
      <View style={styles.appNameDrawerIconRow}>
        <Text style={styles.appNameText}>
          Zain<Text style={styles.deliveryText}>Foods</Text>
        </Text>
      </View>
      <UserCurrentLocation navigation={navigation} />
      {/* <CommonSearchInput placeHolderText={Colors.searchYellowPlaceholder} /> */}
    </View>
  )
}

const HeroSlider = () => (
  <View style={styles.offerSliderStyle}>
    <Sliders offerSlider />
  </View>
)

const RecomendedFood = () => (
  <View>
    <View style={styles.customContainer}>
      <CommonHeadingBtn headingText="Recommended Foods" />
    </View>
    <View style={styles.recommandedFoodRow}>
      <Sliders
        recommandedSlider
        listSlider
        data={recommandedFoodData}
        onPress={() => navigation.navigate('RecommendedFood')}
      />
    </View>
  </View>
)

const RepeatOrders = ({navigation}) => <MyOrderHistoryHome navigation={navigation} />


const ResturantNearYou = ({ navigation }) => (
  <View style={styles.customContainer}>
    <CommonHeadingBtn headingText="Restaurants Near You" />

    <RestaurantNearYou
      onPress={(item) => navigation.navigate('RestaurantDetails', { payload: item })} />
  </View>
)