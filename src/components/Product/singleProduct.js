import * as React from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native';
import { Images } from '../../theme';
import styles from './Styles/index';
import FastImage from 'react-native-fast-image'
import { AddButton } from './add-buttons'


function SingleProduct({ product, moveToPage, cartQty, pressedCartButton }) {


    const { product_image, product_detail_title, product_title, product_discount_percentage, product_price, product_store_price,
            product_rating, product_total_reviews } = product

    const moveTo =() =>{
        const __this = Object.assign(product, { cart_quantity: cartQty })
        moveToPage(__this)
    }


    return (
        <View style={styles.container}>

            <View style={styles.col1}>
                <Text style={styles.addCartFoodHeadingText}>{product_title}</Text>
                <Text style={styles.addCartFoodParegraphText}>{product_detail_title}</Text>

                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.addCartFoodPriceText}>{`AED ${product_price}`}  </Text>
                    {product_discount_percentage > 0 && <Text style={[styles.addCartFoodPriceText, styles.redtag]}>{product_store_price}</Text>}
                </View>

                <View style={styles.likeShareBtnRow}>
                    <TouchableOpacity
                        style={styles.likeShareBtn}
                        onPress={() => { }}>
                        <Image
                            source={Images.LikeLineIcon}
                            resizeMode="contain"
                            style={styles.likeShareImg}
                        />
                    </TouchableOpacity>
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
            </View>

            <View style={styles.col2}>
                <TouchableOpacity onPress={moveTo}>
                    <FastImage
                        style={{ width: 130, height: 130 }}
                        source={{ uri: product_image, priority: FastImage.priority.normal }}
                        resizeMode={FastImage.resizeMode.contain}
                    />
                </TouchableOpacity>

                <Image source={Images.VegLogo} resizeMode="cover" style={styles.veg} />

                <View style={styles.offtag}>
                    {product_discount_percentage > 0 && <Text style={[styles.addCartFoodPriceText,
                    { color: '#87171A', paddingTop: 0 }]}>{`${product_discount_percentage}% off`}</Text>}
                </View>


                <View style={styles.buttonarea}>
                    <AddButton cartQty={cartQty} pressedCartButton={pressedCartButton} />
                </View>
            </View>

        </View>

    )

}

export default React.memo(SingleProduct, (n, p) => (n.cartQty === p.cartQty && n.isFavourite === p.isFavourite))



