import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import FastImage from 'react-native-fast-image'
import { Images } from '../../theme';
import styles from './Styles/index2';
import { AddButton } from './add-buttons'


export default function SingleProductDetails({ product, cartQty, pressedCartButton }) {

    const { product_image, product_detail_title, product_title, product_discount_percentage, product_price, product_store_price,
        product_rating, product_total_reviews } = product
    return (

        <View >

            <Image source={Images.VegLogo} resizeMode="cover" style={styles.veg} />
            <View style={styles.offtag}>
                {product_discount_percentage > 0 && <Text style={[styles.addCartFoodPriceText,
                { color: '#87171A', paddingTop: 0 }]}>{`${product_discount_percentage}% off`}</Text>}
            </View>

            <View>
                <FastImage
                    style={{ width: 250, height: 250 }}
                    source={{ uri: product_image, priority: FastImage.priority.normal }}
                    resizeMode={FastImage.resizeMode.contain}
                />
            </View>

            <Text style={styles.addCartFoodHeadingText}>{product_title}</Text>
            <Text style={styles.addCartFoodParegraphText}>{product_detail_title}</Text>

            <View style={styles.likeShareBtnRow}>
                <TouchableOpacity
                    style={styles.likeShareBtn}
                    onPress={() => { }}>
                    <Image
                        source={Images.ShareLineIcon}
                        resizeMode="contain"
                        style={styles.likeShareImg}
                    />
                </TouchableOpacity>
                <View style={styles.restaurantServiceReviewsItem}>
                    <Text style={styles.restaurantRetingText}>{product_rating}</Text>
                    <Image
                        source={Images.ratingStar}
                        resizeMode="contain"
                        style={styles.restaurantRatingStarImg}
                    />
                    <Text style={styles.restaurantTotalReviewText}>{product_total_reviews}</Text>
                </View>
            </View>

            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
               
                <View style={{ flexDirection: 'row', paddingEnd: 15, flex:1 }}>
                    <Text style={styles.addCartFoodPriceText}>{`AED ${product_price}`}  </Text>
                    {product_discount_percentage > 0 && <Text style={[styles.addCartFoodPriceText, styles.redtag]}>{product_store_price}</Text>}
                </View>

                <View style={styles.buttonarea}>
                    <AddButton cartQty={cartQty} pressedCartButton={pressedCartButton} />
                </View>
            </View>

        </View>
    )
}
