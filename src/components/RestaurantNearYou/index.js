import React, { useState, useEffect, useCallback } from 'react';
import { Text, TouchableOpacity, Image, View, FlatList } from 'react-native';
import { Images } from '../../theme';
import styles from './Styles/index';
import { API_SERVICE } from '../../utils/API'
import { useSelector } from 'react-redux'

function RestaurantNearYou({onPress}) {

  const [stores, setStores] = useState([]);
  const { addres_latitude, addres_longitude, } = useSelector((state) => state.userReducer.Address)

  useEffect(() => {
    load()
  },[addres_latitude, addres_longitude,])

  const load = async()=>{
    try{
      const result = await API_SERVICE('store/store', {latitude: addres_latitude, longitude: addres_longitude})
      const { status, data } = result
      if( status === 1){
        setStores(data)
      }
    }catch(e){
      console.log(e);
    }
  }

const keyExtractor = useCallback((item) => String(item.store_id),[])
const renderItem = useCallback(({item, index})=> <SingleStore item={item} index ={index} onPress={onPress}/>,[])

  return (
      <FlatList
        bounces={false}
        data={stores}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
  );
}

export default RestaurantNearYou;

const notLiked = false
export const SingleStore =({ item, index, onPress  })=>{
  const { store_name, store_image, store_avg_delivery_minutes, store_delivery_fee, store_flat_discount, store_best_opt1,
    store_best_opt2, store_best_opt3, store_best_opt4, store_total_reviews, store_rating} = item
  const [likeBtn, setLikeBtn] = useState(false);

  return(
    <TouchableOpacity  style={{padding:15, backgroundColor:'#fff', borderRadius: 10, marginBottom: 20}}
      onPress={() => onPress(item) }
      >
      <Image
        source={{uri: store_image }}
        resizeMode="cover"
        style={styles.restaurantImg}
      />
      <View style={styles.ratingLikeBtnRow}>
        <View style={styles.ratingStarRow}>
          <Text style={styles.totalRatingText}>{store_rating}</Text>
          <Image
            source={Images.ratingStar}
            resizeMode="contain"
            style={styles.ratingStarImg}
          />
          <Text style={styles.totalReviewText}>{store_total_reviews}</Text>
        </View>
        <TouchableOpacity
          style={styles.likeBtn}
          onPress={() => setLikeBtn(notLiked ? item.id : !likeBtn)}>
          <Image
            source={
              notLiked
                ? likeBtn === item.id
                  ? Images.LikeYellowBtn
                  : Images.LikeWhiteBtn
                : Images.LikeYellowBtn
            }
            resizeMode="contain"
            style={styles.likeWhiteImg}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.restaurantOtherDetail}>
        <Text style={styles.restaurantName}>{store_name}</Text>
        <View style={styles.restaurantColumnOtherDetailRow}>
          <View style={styles.restaurantOtherDetailColumn}>
            <Image
              source={Images.DeliveryBoyIcon}
              resizeMode="contain"
              style={styles.restaurantOtherDetailImg}
            />
            <Text style={styles.restaurantOtherDetailText}>
              {store_delivery_fee < 1 ?'Free delivery': `AED ${store_delivery_fee}`}
            </Text>
          </View>
          <View style={styles.restaurantOtherDetailColumn}>
            <Image
              source={Images.ClockIcon}
              resizeMode="contain"
              style={styles.restaurantOtherDetailImg}
            />
            <Text style={styles.restaurantOtherDetailText}>
              {`${store_avg_delivery_minutes} mins`}
            </Text>
          </View>
          {
            store_flat_discount > 0 && <View style={styles.restaurantOtherDetailColumn}>
            <Image
              source={Images.DiscountIcon}
              resizeMode="contain"
              style={styles.restaurantOtherDetailImg}
            />
            <Text style={styles.restaurantOtherDetailText}>
              {`${store_flat_discount}% off`}
            </Text>
          </View>
          }
    
        </View>
        <View style={styles.restaurantLabelRow}>
          <Text style={styles.restaurantLabelText}>{store_best_opt1}</Text>
          <Text style={styles.restaurantLabelText}>{store_best_opt2}</Text>
          <Text style={styles.restaurantLabelText}>{store_best_opt3}</Text>
          <Text style={styles.restaurantLabelText}>{store_best_opt4}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )

}