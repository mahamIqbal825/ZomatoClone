import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { CSS } from './style'


export function SingleItem ({ item, onReorder }) {

    const { store_address, store_name, store_image } = item
    return (
        <TouchableOpacity style={{ backgroundColor: '#fff', padding:15, borderRadius: 10, marginEnd: 15}} onPress={()=> onReorder(item)}>
                <View style={CSS.sssd}>
                    <Image source={{ uri: store_image }} style={CSS.odnn} />
                    <View>
                        <Text style={CSS.dedsf}>{store_name}</Text>
                        <Text style={CSS.dwid}>{store_address}</Text>
                    </View>
                </View>
        </TouchableOpacity>
    )
}
