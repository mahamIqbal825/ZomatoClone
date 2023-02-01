import React, { useState, useEffect, useCallback } from "react";
import { connect } from 'react-redux'
import { addCart } from '../../redux/actions/ShoppingAction'
import SingleProduct from './singleProduct'
import SingleProductDetails from './singleProductDetails'
import { API_SERVICE } from '../../utils/API'

isMounted = false
function ProductWraper({ product, moveToPage, cartItem, favouriteItem, fnAddCart, fnAddWish, detailPage, needReload, fnReload }) {

    const { cart_quantity = 0, stockFavorite, product_price, product_store_id } = product;
    const quantity = cartItem ? cartItem.cart_quantity : cart_quantity
    const favourite = favouriteItem ? favouriteItem.stockFavorite : stockFavorite

    const [cartQty, setCartQty] = useState(quantity)
    const [isFavourite, setIsFavourite] = useState(favourite)

    useEffect(() => {
        isMounted = true
        setCartQty(quantity);
        return () => isMounted = false
    }, [quantity]);


    useEffect(() => {
        isMounted = true
        setIsFavourite(favourite);
        return () => isMounted = false
    }, [favourite]);

    const pressedCartButton = useCallback(async (action) => {
        const newQty = action === 'ADD' ? cartQty + 1 : cartQty - 1
        if (newQty < 0) {
            return
        }
        const payload = Object.assign({}, product, { user_id: 1, cart_quantity: newQty, cart_amount: newQty * product_price, store_id: product_store_id })
        try {
            const result = await API_SERVICE('orders/cart', payload, 'POST')
            const { status } = result
            if (status === 1) {
                fnAddCart(payload)
                if (isMounted) {
                    setCartQty(newQty)
                }
                if (needReload) {
                    fnReload()
                }
            }
        } catch (e) { }


    }, [cartQty])

    const pressedWishList = useCallback((item) => {
        fnAddWish(item, root).then((_data) => {
            const { WishStatus } = _data
            setIsFavourite(WishStatus)
        })
    }, [isFavourite])

    if (detailPage)
        return (
            <SingleProductDetails
                product={product}
                moveToPage={moveToPage}
                pressedCartButton={pressedCartButton}
                pressedWishList={pressedWishList}
                cartQty={cartQty}
                isFavourite={isFavourite}
            />
        )
    return (
        <SingleProduct
            product={product}
            moveToPage={moveToPage}
            pressedCartButton={pressedCartButton}
            pressedWishList={pressedWishList}
            cartQty={cartQty}
            isFavourite={isFavourite}
        />
    )
}


function mapDispatchToProps(dispatch) {
    return {
        fnAddCart: (payload) => dispatch(addCart(payload)),
        fnAddWish: (item, ShopSource) => dispatch(SetWishList_ApiService(item, ShopSource)),
    }
}
export default connect(null, mapDispatchToProps)(ProductWraper)


