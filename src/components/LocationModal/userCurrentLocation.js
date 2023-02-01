import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity, Alert, Platform } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import { request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import SavedAddressModel from './modelSavedAddress'
import { SILENT_API_SERVICE } from '../../utils/API'
import { GOOGLE_MAP_API } from '../../utils/MapApi'
import { Images } from '../../theme';
import { useDispatch, useSelector } from 'react-redux';
import { setUserAddress } from '../../redux/actions/UserAction'


const locationParams = { enableHighAccuracy: false, timeout: 30000, maximumAge: 1000 }


function UserCurrentLocation({ navigation }) {

    const [showModel, setShowModel] = useState(false)
 

    const dispatch = useDispatch();
    const userAddress = useSelector((state) => state.userReducer.Address)
    const { address_details } = userAddress ? userAddress : {}



    useEffect(() => {
        //fnGetCurrentLocation()
        onLoad()
    }, [])

    const fnGetCurrentLocation = async () => {
        const result = await request(Platform.select({
            android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION, ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
        }))
        if (result == RESULTS.GRANTED) {
            Geolocation.getCurrentPosition(position => {
                handlelocation(position)
            }, error => Alert.alert(error.message), locationParams)
        } else {
            Alert.alert('Please allow device location')
        }
    }

    const handlelocation = async (position) => {
        let mapRegion = {
            latitude: parseFloat(position.coords.latitude),
            longitude: parseFloat(position.coords.longitude)
        }
        const _data = await GOOGLE_MAP_API(mapRegion)
        dispatch(setUserAddress({data: _data}))
    }


    const onLoad = async () => {
        try {
            const result = await SILENT_API_SERVICE('customer/address', {}, 'GET')
            const { status, data } = result ? result: {}
            if (status === 1) {
                dispatch(setUserAddress(data))
            }else{
                fnGetCurrentLocation()
            }
        } catch (e) {
            console.log('e', e);
            fnGetCurrentLocation()
        }
    }


    const onChoose =() => {
        navigation.push('SavedAddress')
    }
    return (
        <View>
            <TouchableOpacity style={styles.container} onPress={onChoose}>
                <Image
                    source={Images.ModalLocation}
                    resizeMode="contain"
                    style={styles.pinIcon}
                />
                <Text style={styles.textStyle}>{address_details? address_details : 'Select location'}</Text>
                <Image
                    source={Images.DownArrow}
                    resizeMode="contain"
                    style={styles.dropDownArrowIcon}
                />
            </TouchableOpacity>
        </View>
    );
}


export default UserCurrentLocation


const styles = StyleSheet.create({
    container:{
        flexDirection: 'row', 
        height: 50, 
        alignItems: 'center', 
        marginBottom:10, 
        backgroundColor:'#ffffff99', 
        padding:10, 
        borderRadius:8
    },
    dropDownArrowIcon: {
        width: 10,
        height: 8,
        marginStart: 10
    },
    pinIcon: {
        width: 10,
        height: 12,
        marginEnd: 10
    },
    textStyle: {
        flex: 1,
        fontFamily: 'SofiaPro',
        fontWeight: '500',
        color: '#006653',
        fontSize: 12
    }
});


