import React, { useEffect, useState, useCallback } from 'react';
import { FlatList, View  } from 'react-native';
import { API_SERVICE } from '../../utils/API'
import { SingleItem } from './single'
import CommonHeadingBtn from '../CommonHeadingBtn';

let isMounted = false
function MyOrderHistoryHome({ navigation }) {

    const [allOrders, setAllOrders] = useState([])

    useEffect(() => {
        isMounted = true
        onLoad()
        return () => isMounted = false
    }, [])

    const onLoad = async () => {
        try {
            const result = await API_SERVICE('orders/view/home', {}, 'GET')
            const { status, data } = result
            if (status === 1 && isMounted) {
                setAllOrders(data)
            }
        } catch (e) {
            console.log(e);
        }
    }
    const onReorder = async (item) =>  navigation.navigate('RestaurantDetails', { payload: item })

    const keyExtractor = useCallback((item) => String(item.store_id), [])

    const renderItem = useCallback(({ item }) => <SingleItem item={item} onReorder={onReorder} />, [])
    return (
        <View style={{paddingBottom: 20}}>
            <View style={{ paddingStart: 20, }}>
                <CommonHeadingBtn headingText="Order Again"/>
            </View>
            <View style={{ paddingStart: 20 }}>
                <FlatList
                    horizontal
                    data={allOrders}
                    renderItem={renderItem}
                    keyExtractor={keyExtractor}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </View>

    );
}

export default MyOrderHistoryHome;
