import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, TouchableOpacity, FlatList, SafeAreaView, Image, Alert } from 'react-native';
import { Header } from '../../components';
import { Images } from '../../theme';
import styles from './Styles/OrderStyle';
import { getCart } from '../../redux/actions/ShoppingAction'
import { useDispatch, useSelector } from 'react-redux'
import ProductWraper from '../../components/Product/wraperProduct'
import ProductDetailModel from '../../components/Models/productDetailModel'
import ChoosePayMode from '../../components/Models/selectPaymode'
import SnackBar from 'react-native-snackbar-component'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { API_SERVICE } from '../../utils/API'
import { useStripe, } from '@stripe/stripe-react-native';
import { StackActions } from '@react-navigation/native';


function OrderScreen({ navigation }) {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCart());
  }, []);

  const [viewSnacker, setViewSnacker] = useState(false);

  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [loading, setLoading] = useState(false);
  const [tokenList, setTokens] = useState([]);


  useEffect(() => {
    setTimeout(() => setViewSnacker(true), 200)
  }, [])

  //const headerItem = useCallback(() => <StoreHeader navigation={navigation} payload={payload} />, [])
  const keyExtractor = useCallback((item) => String(item.product_id), [])

  const [showModel, setShowModel] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  const [selectedOptions, setSelectedOptions] = useState({ payMode: 1, saveCard: true });


  const [showPayModel, setShowPayModel] = useState(false);


  const MoveToPage = (item) => {
    setSelectedItem(item)
    setShowModel(true)
  }
  const { store_id, productsCart, productsFavour, item_total=0, store_delivery_fee=0, vat_total=0, grand_total=0 
  } = useSelector((state) => state.shoppingReducer)


  const userAddress = useSelector((state) => state.userReducer.Address)
  const { address_details, addres_latitude, addres_longitude, address_mobile } = userAddress

  //console.log('userAddress', userAddress);

  const renderItem = useCallback(({ item, index }) => {
    const { product_id } = item
    const CartItem = productsCart.filter((x) => x.product_id === product_id)[0]
    const favouriteItem = productsFavour.filter((x) => x.product_id === product_id)[0]

    return (
      <ProductWraper
        key={index}
        product={item}
        moveToPage={MoveToPage}
        cartItem={CartItem}
        favouriteItem={favouriteItem}
        fnReload={onAddItems}
        needReload={true}
      />
    )
  }, [productsCart, productsFavour])

  const onAddItems =()=>{
    console.log('loading');
    dispatch(getCart());
  }


  const footerItem = () => {
    return (
      <View style={{ marginTop: 20, marginBottom: 50 }}>
        <View style={{ flexDirection: 'row', paddingBottom: 10 }}>
          <Text style={{ fontSize: 14, fontFamily: 'SofiaPro', fontWeight: '600', flex: 1 }}>Item total</Text>
          <Text style={{ fontSize: 14, fontFamily: 'SofiaPro', fontWeight: '600' }}>{`AED ${item_total.toFixed(2)}`}</Text>
        </View>
        <View style={{ flexDirection: 'row', paddingBottom: 10 }}>
          <Text style={{ fontSize: 14, fontFamily: 'SofiaPro', fontWeight: '400', flex: 1 }}>Restaurant delivery charges</Text>
          <Text style={{ fontSize: 14, fontFamily: 'SofiaPro', fontWeight: '400' }}>{`AED ${store_delivery_fee.toFixed(2)}`}</Text>
        </View>
        <View style={{ flexDirection: 'row', paddingBottom: 5 }}>
          <Text style={{ fontSize: 14, fontFamily: 'SofiaPro', fontWeight: '400', flex: 1 }}>VAT</Text>
          <Text style={{ fontSize: 14, fontFamily: 'SofiaPro', fontWeight: '400' }}>{`AED ${vat_total.toFixed(2)}`}</Text>
        </View>
        <View style={{ flexDirection: 'row', paddingTop: 10, borderTopWidth: 1, borderTopColor: '#00665333', }}>
          <Text style={{ fontSize: 16, fontFamily: 'SofiaPro', fontWeight: '700', flex: 1 }}>Grand Total</Text>
          <Text style={{ fontSize: 16, fontFamily: 'SofiaPro', fontWeight: '700' }}>{`AED ${grand_total.toFixed(2)}`}</Text>
        </View>
      </View>
    )
  }

  const fnGoto = async () => {

    try{

      await makePayment()
      const { error } = await presentPaymentSheet();
      if (error) {
        Alert.alert(`Error code: ${error.code}`, error.message);
        return
      } 
      const { payMode, saveCard } = selectedOptions
      const payload = 
      {
        canSaveCard: saveCard,
        store_id: store_id,
        order_gross_amount: grand_total,
        order_discount_amount: 0,
        order_net_amount: grand_total,
        order_customer_email: '',
        order_customer_mobile: '',
        order_customer_address: address_details,
        order_customer_pin_location: `${addres_latitude},${addres_longitude}`,
        order_customer_comments: '',
        order_payment_status: payMode,
        order_products: productsCart
      }
      const result = await API_SERVICE('orders/create', payload, 'POST')

      const { status, data } = result
      if(status === 1){
        navigation.dispatch( StackActions.replace('OrderConfirmed', { order_id: data }) );
      }
    }catch(err){}
  }

  const makePayment = async ()=>{
   
    return new  Promise (async (resolve, reject)  =>{
      try{
        const { saveCard } = selectedOptions
        const payload =  { canSaveCard: saveCard, order_net_amount: grand_total }
        const result  = await API_SERVICE('payments/make', payload, 'POST')
  
        const { status, data } = result
        if(status === 1){
          const { paymentIntent, ephemeralKey, customer } = data
          const { error } = await initPaymentSheet({
            returnURL: 'com.Kibsons://stripe-redirect',
            customerId: customer,
            customerEphemeralKeySecret: ephemeralKey,
            paymentIntentClientSecret: paymentIntent,
            allowsDelayedPaymentMethods: true,
          });
          if(error){ reject(error); return }
          resolve()
        }
      }catch(error){ reject(error); return }
    })
  }


  const renderMessage = useCallback(() => <TextMessage fnGoto={fnGoto} setShowPayModel={setShowPayModel}
    address_details={address_details} selectedOptions={selectedOptions} grand_total={grand_total} />, [viewSnacker, selectedOptions])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header
        title={'Zain Express Resturant'}
        hasBackBtn
        transparent
        onBackPress={() => navigation.goBack()}
      />
      <View style={[styles.customContainer, { paddingBottom: 0 }]}>

        <FlatList
          style={{ marginBottom: 140, }}
          contentContainerStyle={{ marginTop: 5, flexGrow: 1 }}
          nestedScrollEnabled={true}
          keyExtractor={keyExtractor}
          data={productsCart}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          initialNumToRender={2}
          maxToRenderPerBatch={2}
          windowSize={2}
          removeClippedSubviews={true}
          ListFooterComponent={footerItem}
        //ListHeaderComponent={headerItem}
        />
        <ProductDetailModel showModel={showModel} setShowModel={setShowModel} item={selectedItem} />
        <ChoosePayMode showModel={showPayModel} setShowModel={setShowPayModel} setSelectedOptions={setSelectedOptions} selectedOptions={selectedOptions}/>
      </View>

      <SnackBar visible={viewSnacker}
        textMessage={renderMessage}
        //actionHandler={() => { navigation.navigate('Order') }} actionText={'Next'}
        containerStyle={{
          height: 140,


        }}
        backgroundColor='#fff'
        //messageStyle={{ fontWeight: '800' }}
        accentColor='orange' />
    </SafeAreaView>
  );
}

export default OrderScreen;

const TextMessage = ({ fnGoto, setShowPayModel, selectedOptions, address_details, grand_total }) => {
  const { payMode, saveCard } = selectedOptions

  return (

    <View style={{ padding: 15, flex: 1 }}>

      <View style={{ borderBottomWidth: 1, borderBottomColor: '#00665333', height: 45 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            source={Images.ModalLocation}
            resizeMode="contain"
            style={styles.deliveryAddressImg}
          />
          <View>
            {/* <Text style={styles.deliveryAddressText}>Home</Text> */}
            <Text numberOfLines={2} style={{ fontSize: 12, fontFamily: 'SofiaPro', fontWeight: '400', paddingTop: 5 }}>{address_details}</Text>
          </View>

          {/* <Text
          style={styles.changeDeliveryAddressText}
          onPress={() => navigation.navigate('RepeatOrderRestaurantDetails')}>
          Change
        </Text> */}
        </View>

      </View>

      <View style={{ flexDirection: 'row', height: 75, paddingTop: 10 }}>

        <View style={{ height: 50, flex: 1 }}>
          <TouchableOpacity
            style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }} onPress={() => setShowPayModel(true)}>
            <Text style={{ fontSize: 14, fontFamily: 'SofiaPro', marginEnd: 5 }}>{payMode === 1 ? 'Online' : payMode === 2 ? 'Cash' : 'Payment'}</Text>
            <Ionicons name="caret-up-outline"></Ionicons>
          </TouchableOpacity>
          {
            saveCard && <TouchableOpacity
              style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }} onPress={() => setShowPayModel(true)}>
              <Ionicons name={"checkbox-outline"} size={15} style={{ marginEnd: 2 }} />
              <Text style={{ fontSize: 11, fontFamily: 'SofiaPro', fontWeight: '400' }}>Save card</Text>
            </TouchableOpacity>
          }
        </View>


        <TouchableOpacity onPress={fnGoto}
          style={{
            height: 50, backgroundColor: '#006653', borderRadius: 10, width: '70%', flexDirection: 'row',
            justifyContent: 'center', alignItems: 'center', padding: 10
          }}>
          <Text style={{ color: '#fff', fontSize: 14, fontFamily: 'SofiaPro', flex: 1, fontWeight: '600' }}>{`AED ${grand_total.toFixed(2)}`}</Text>
          <Text style={{ color: '#fff', fontSize: 16, fontFamily: 'SofiaPro', fontWeight: '600' }}>Place Order</Text>
          <Ionicons name="caret-forward-outline" color={'#fff'}></Ionicons>
        </TouchableOpacity>

      </View>
    </View>
  )
}