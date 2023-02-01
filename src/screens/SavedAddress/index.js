import React, { useState, useEffect, useCallback } from 'react';
import { Text, View, TouchableOpacity, TextInput, StyleSheet, Keyboard, FlatList, SafeAreaView } from 'react-native';
import Modal from "react-native-modal";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { API_SERVICE, SILENT_API_SERVICE } from '../../utils/API'
import { Header } from '../../components';
import { setUserAddress } from '../../redux/actions/UserAction'
import { useDispatch } from 'react-redux';

let isMounted = false
export default function SavedAddress({ navigation }) {

    const [allAddress, setAllAddress] = useState([])
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            onLoad()
        });
        return unsubscribe;
    }, [navigation]);



    useEffect(() => {
        isMounted = true
        onLoad()
        return () => isMounted = false
    }, [])

    const onLoad = async () => {
        try {
            const result = await API_SERVICE('customer/address/all', {}, 'GET')
            const { status, data } = result
            if (status === 1 && isMounted) {
                setAllAddress(data)
            }
        } catch (e) {
            console.log(e);
        }
    }


    const keyExtractor = useCallback((item) => String(item.address_id), [])

    const renderItem = useCallback(({ item, index }) => {
        const { address_title, address_details, address_id, address_building_no, address_flat_no } = item
        return (
            <View style={{ borderBottomColor: '#00665333', borderBottomWidth: 1, paddingBottom: 15, marginBottom: 20, }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 0 }}>
                    
                    <TouchableOpacity onPress={() => onSelect(item)} style={{flex:1}}>
                        <Text style={CSS.addressTitle}>{address_title}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => onDelete(address_id)}>
                        <Ionicons name="trash-outline" size={20} color={'#333'} />
                    </TouchableOpacity>
                </View>
                
                <TouchableOpacity onPress={() => onSelect(item)}>
                    <Text style={CSS.addressDetails}>{`${address_flat_no} - ${address_building_no}`}</Text>
                    <Text style={CSS.addressDetails}>{address_details}</Text>
                </TouchableOpacity>
            </View>
        )

    }, [])

    const onAddAddress = () => navigation.navigate('MapAddress')

    const onSelect = async (address) => {
        const { address_id } = address
        try {
           await SILENT_API_SERVICE('customer/address/default', { address_id }, 'POST')
           dispatch(setUserAddress(address))
           navigation.goBack()
        } catch (e) {
            console.log(e);
        }
    }

    const onDelete = async (address_id) => {
        try {
            const result = await API_SERVICE('customer/address/delete', { address_id }, 'POST')
            const { status } = result
            if (status === 1 && isMounted) {
                onLoad()
            }
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <Header
                hasBackBtn
                title="My Addresses"
                onBackPress={() => navigation.goBack()} />

            <View style={{ padding: 15, paddingStart: 25, paddingEnd: 25 }}>

                <TouchableOpacity onPress={onAddAddress}
                    style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20, borderBottomColor: '#00665333', borderBottomWidth: 1, paddingBottom: 15 }}>
                    <Text style={{ fontSize: 14, fontFamily: 'SofiaPro', color: '#006653' }}>+ Add address</Text>
                </TouchableOpacity>

                <FlatList
                    contentContainerStyle={{ padding: 0 }}
                    data={allAddress}
                    renderItem={renderItem}
                    keyExtractor={keyExtractor}
                />
            </View>
        </SafeAreaView>

    )
}


const CSS = StyleSheet.create({
    addressTitle: {
        fontSize: 16,
        fontFamily: 'SofiaPro',
        color: '#333',
        fontWeight: '600',
        flex: 1
    },
    addressDetails: {
        fontSize: 12,
        fontFamily: 'SofiaPro',
        color: '#333',
        fontWeight: '400',
        paddingTop:5
    }
})
