import React, { useEffect, useState, useCallback } from 'react';
import { FlatList } from 'react-native';
import { API_SERVICE } from '../../utils/API'
import { SingleItem } from './single'

let isMounted = false
function MyOrderHistory({ navigation }) {

    const [allOrders, setAllOrders] = useState([])

    useEffect(() => {
        isMounted = true
        onLoad()
        return () => isMounted = false
    }, [])

    const onLoad = async () => {
        try {
            const result = await API_SERVICE('orders/view/all', {}, 'GET')
            const { status, data } = result
            if (status === 1 && isMounted) {
                setAllOrders(data)
            }
        } catch (e) {
            console.log(e);
        }
    }
    const onReorder = async () => {
        try {
          const result = await API_SERVICE('orders/reorder', {productList: order_products_details, store_id}, 'POST')
          const { status } = result
          if (status === 1) {
            navigation.navigate('Order')
          }
        } catch (e) {
          console.log(e);
        }
      }

      const onMove =(item) => navigation.navigate('RestaurantDetails', { payload: item })

    const keyExtractor = useCallback((item) => String(item.order_id), [])

    const renderItem = useCallback(({ item }) => <SingleItem item={item} onReorder={onReorder} onMove={onMove}/>, [])
    return (
        <FlatList
            contentContainerStyle={{ padding: 0 }}
            data={allOrders}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
        />
    );
}

export default MyOrderHistory;
