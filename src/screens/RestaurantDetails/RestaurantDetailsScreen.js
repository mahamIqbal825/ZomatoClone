import React, { useEffect, useState } from 'react';
import {
  View,
  Share,
  SafeAreaView
} from 'react-native';
import { Header } from '../../components';
import styles from './Styles/RestaurantDetailsStyle';
import StoreProducts from '../../components/Products/storeProducts'
import SnackBar from 'react-native-snackbar-component'
import { useSelector } from 'react-redux'


export default function RestaurantDetailsScreen({ navigation, route }) {

  const { payload } = route.params
  const cartAmount = useSelector((state) => state.shoppingReducer.cartAmount)

  const [viewSnacker, setViewSnacker] = useState(false);


  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'https://zluck.com'
      });
    } catch (error) {
    }
  };

  useEffect(() => {
    setTimeout(() => setViewSnacker(cartAmount > 0), 100)
  }, [cartAmount])


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header
        hasBackBtn
        transparent
        hasShareLike
        onBackPress={() => navigation.goBack()}
        onSharePress={onShare}
      />
      <View style={[styles.customContainer, { marginBottom: viewSnacker ? 120 : 50 }]}>
        <StoreProducts store_id={payload.store_id} navigation={navigation} payload={payload} />
      </View>

      <SnackBar visible={viewSnacker} textMessage={`AED ${cartAmount}`} actionHandler={() => { navigation.navigate('Order')}} actionText={'Next'}
        containerStyle={{ height: 80, paddingBottom: 20 }}
        backgroundColor='#006653'
        messageStyle={{ fontWeight: '800' }}
        accentColor='#fff' />
    </SafeAreaView>
  );
}
