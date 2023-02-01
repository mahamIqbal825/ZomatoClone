import * as React from 'react';
import { Text, Image, View } from 'react-native';
import { Images } from '../../theme';
import styles from './Styles/index';

function RestaurantDetailSliderName({data}) {
  const { store_name, store_image, store_avg_delivery_minutes, store_delivery_fee, store_flat_discount, store_total_reviews, store_rating, store_address } = data
    const imagesList = [store_image]


  return (
    <>
      <View>
        {/* <View style={styles.restaurantDetailSlider}>
          <Sliders normalSlider data={imagesList} />
        </View> */}

        <View style={styles.restaurantNameLabel}>
          <Text style={styles.restaurantName}>{store_name}</Text>
          <Text style={styles.restaurantLocationText}>{store_address}</Text>
          <View style={styles.restaurantServiceReviewsRow}>
            <View style={styles.restaurantServiceReviewsItem}>
              <Image
                source={Images.DeliveryBoyIcon}
                resizeMode="contain"
                style={styles.restaurantServiceImg}
              />
              <Text style={styles.restaurantServiceText}>{store_delivery_fee < 1 ?'Free delivery': `AED ${store_delivery_fee}`}</Text>
            </View>
            <View style={styles.restaurantServiceReviewsItem}>
              <Image
                source={Images.ClockIcon}
                resizeMode="contain"
                style={styles.restaurantServiceImg}
              />
              <Text style={styles.restaurantServiceText}>{`${store_avg_delivery_minutes} mins`}</Text>
            </View>
            {
              store_flat_discount > 0 && <View style={styles.restaurantServiceReviewsItem}>
              <Image
                source={Images.DiscountIcon}
                resizeMode="contain"
                style={styles.restaurantServiceImg}
              />
              <Text style={styles.restaurantServiceText}>{`${store_flat_discount}% off`}</Text>
            </View>
            }
            <View style={styles.restaurantServiceReviewsItem}>
              <Text style={styles.restaurantRetingText}>{store_rating}</Text>
              <Image
                source={Images.ratingStar}
                resizeMode="contain"
                style={styles.restaurantRatingStarImg}
              />
              <Text style={styles.restaurantTotalReviewText}>{store_total_reviews}</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

export default RestaurantDetailSliderName;
