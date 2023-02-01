import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { CSS } from './style'


export function SingleItem({ item, onReorder, onMove }) {

    const { store_address, store_name, store_image, order_products } = item
    const order_products_details = JSON.parse(order_products)
    return (
        <View style={CSS.uyt}>
            <View style={CSS.ooj}>
                <View style={CSS.sssd}>
                    <Image source={{ uri: store_image }} style={CSS.odnn} />
                    <View>
                        <Text style={CSS.dedsf}>{store_name}</Text>
                        <Text style={CSS.dwid}>{store_address}</Text>
                    </View>
                </View>
                <View style={CSS.dessg}>
                    <Text style={CSS.edss}>Delivered</Text>
                </View>
                <TouchableOpacity onPress={() => onMove(item)}
                    style={CSS.dddss}>
                    <Text style={CSS.deygd}>View menu</Text>
                    <Ionicons name="caret-forward-outline" size={10} color={'#E74C3C'} />
                </TouchableOpacity>
            </View>
            {
                order_products_details && order_products_details.map((product, index) => {

                    const { cart_quantity, product_title, product_image } = product
                    return (
                        <View key={index} style={CSS.lokjhg}>
                            <View style={CSS.poiuy}>
                                <Image source={{ uri: product_image }} style={CSS.dhgfdd} />
                            </View>
                            <Text style={CSS.gdddddujh}>{`${cart_quantity} X ${product_title}`}</Text>
                        </View>
                    )
                })
            }
            <View style={CSS.hdygvvds}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1 }} />
                    <TouchableOpacity onPress={onReorder}
                        style={CSS.okijgf}>
                        <Ionicons name="repeat-outline" size={15} color={'#fff'} style={{ marginEnd: 5 }} />
                        <Text style={CSS.yhfrt}>Reorder</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
