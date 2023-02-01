import React, { useState, useEffect, useCallback } from 'react';
import { FlatList, View } from 'react-native';
import { API_SERVICE } from '../../utils/API'
import { useSelector } from 'react-redux'
import ProductWraper from '../Product/wraperProduct'
import StoreHeader from './storeHeader'
import ProductDetailModel from '../Models/productDetailModel'

function StoreProducts({ store_id, navigation, payload }) {

    const [storesProducts, setStoresProducts] = useState([]);

    useEffect(() => {
        if (store_id)
            load()
    }, [store_id])

    const load = async () => {
        try {
            const result = await API_SERVICE('store/product', { store_id })
            const { status, data } = result
            if (status === 1) {
                setStoresProducts(data)
            }
        } catch (e) { }
    }

    const CartItemsV = useSelector((state) => state.shoppingReducer)
    const CartItems  = useSelector((state) => state.shoppingReducer.productsCart)
    const FavouriteItems = useSelector((state) => state.shoppingReducer.productsFavour)


    const MoveToPage = (item, cartQty) => { 
        setSelectedItem(item)
        setShowModel(true)
    }

    const renderItem = useCallback(({ item, index }) => {
        const { product_id } = item
        const CartItem = CartItems.filter((x) => x.product_id === product_id)[0]
        const FavouriteItem = FavouriteItems.filter((x) => x.product_id === product_id)[0]

        return (
            <ProductWraper
                key={index}
                product={item}
                moveToPage={MoveToPage}
                cartItem={CartItem}
                favouriteItem={FavouriteItem}
            />
        )
    }, [CartItems, FavouriteItems])

    const headerItem = useCallback(() => <StoreHeader navigation={navigation} payload={payload} />, [])
    const keyExtractor = useCallback((item) => String(item.product_id), [])

    const [showModel, setShowModel] = useState(false);
    const [selectedItem, setSelectedItem] = useState({});

    return (
        <>
            <FlatList
                contentContainerStyle={{ marginBottom: 5, marginTop: 5 }}
                nestedScrollEnabled={true}
                keyExtractor={keyExtractor}
                data={storesProducts}
                showsVerticalScrollIndicator={false}
                renderItem={renderItem}
                initialNumToRender={2}
                maxToRenderPerBatch={2}
                windowSize={2}
                removeClippedSubviews={true}
                ListHeaderComponent={headerItem}
            />
            <ProductDetailModel showModel={showModel} setShowModel={setShowModel} item={selectedItem}/>
        </>
    );
}

export default StoreProducts;
