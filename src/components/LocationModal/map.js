import React, { useEffect, useState, useCallback, useRef } from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity, Alert, Platform, Animated } from 'react-native';
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SkeletonSingleLine } from './loadingAnim'
import { request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import { AddressDetails } from './addressDetails'
//import { ShowMeLoc } from './showMe'
import { GOOGLE_MAP_API } from '../../utils/MapApi'
import CreateAddressModel from './modelCreateAddress'
const initCaamera = {
    center: { latitude: 25.1718801, longitude: 55.3599433 },
    pitch: 45,
    heading: 90,
    altitude: 0,
    zoom: 10,
}

const locationParams = { enableHighAccuracy: false, timeout: 30000, maximumAge: 1000 }



function MapAddress({ navigation, route }) {

    const refMap = useRef();
    const [animatingGooleApi, setAnimatingGooleApi] = useState(false)
    const [addressDetail, setAddressDetail ]= useState({})

    const [showModel, setShowModel] = useState(false)

    useEffect(() => {
        fnGetCurrentLocation()
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
            Alert.alert(translate('app_permition_not'))
        }
    }

    const handlelocation =(position) => {
        let mapRegion = {
            latitude: parseFloat(position.coords.latitude),
            longitude: parseFloat(position.coords.longitude),
            latitudeDelta: 0.015,
            longitudeDelta: 0.015,
        }
        moveCamera(mapRegion)
    }

    const moveCamera =(mapRegion)=>{
        if (refMap.current)
            refMap.current.animateToRegion(mapRegion, 1000)
    }

    const onRegionChangeComplete = async (data) => {
        const _data = await GOOGLE_MAP_API(data)
        setAddressDetail(_data)
        setAnimatingGooleApi(false)
        return [{
          longitude: data.longitude,
          latitude: data.latitude
        }];
    }
    const onRegionChange = () => {
        if (!animatingGooleApi) {
            setAnimatingGooleApi(true)
        }
    };

    const showSearchResult =()=>{}

    const { addrLine1 } = addressDetail ? addressDetail : {}

    const addressTitle = () => <AddressDetails addresDetails={addrLine1} show={animatingGooleApi}
        _func={showSearchResult} goBack={() => navigation.goBack()} />

    const saveButton = () => <View style={styles.map_bottom_details}>
        {animatingGooleApi ? <SkeletonSingleLine /> :
            <TouchableOpacity style={{ width: "85%", }} onPress={() =>  setShowModel(true)}>
                <Text style={styles.map_bottom_stripText} >{'Confirm'}</Text>
            </TouchableOpacity>
        }
    </View>

    const confirmAddress =()=> <CreateAddressModel showModel={showModel} setShowModel={setShowModel} adress ={addressDetail} onSave={onSave}/>

    const onSave =() =>{
        setShowModel(false)
        setTimeout(()=> {navigation.goBack()}, 700)
    }    


    return (
        <View style={{ flex: 1 }}>

            <MapView
                ref={refMap}
                style={{ flex: 1 }}
                initialCamera={initCaamera}
                minZoomLevel={16}
                zoomEnabled={true}
                showsUserLocation={true}
                followUserLocation={true}
                showsMyLocationButton={true}
                onRegionChangeComplete={onRegionChangeComplete}
                onRegionChange={onRegionChange}
                mapPadding={{ bottom: 0, top: 0 }}
            />
            <Icon name="map-marker" style={styles.marker} size={50} color="#006653" />
            {addressTitle()}
            {saveButton()}
            {confirmAddress()}

        </View >

    );

}


export default MapAddress


const styles = StyleSheet.create({
    map_top_details: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        minHeight: 40,
        position: "absolute",
        backgroundColor: '#fafafa',
        width: "95%",
        zIndex: 10,
        top: 10,
        alignContent: "center",
        alignSelf: "center",
        shadowOpacity: 1.0,
        borderRadius: 15,
        shadowColor: '#dddddd',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 4,
    },
    input: {
        //borderColor: colors.LightGreen,
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
        fontWeight: '400',

    },
    button: {
        padding: 10,
        //backgroundColor: colors.LightGreen,
        marginTop: 15,
        fontWeight: '600',
        color: '#fff',
        textAlign: 'center',
        fontSize: 15,
    },

    text: {
        //color: colors.Blue,
        fontWeight: '400',
        fontSize: 12,
        marginBottom: 5,
        textAlign: 'left',
    },

    map_top_stripText: {
        width: "100%",
        padding: 10,
        //color: colors.Gray5,
        fontWeight: '500',
        fontSize: 12
    },

    map_bottom_details: {
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 50,
        position: "absolute",
        backgroundColor: '#fafafa',
        width: "95%",
        zIndex: 3,
        bottom: 40,
        alignContent: "center",
        alignSelf: "center",
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 5

    },

    map_bottom_stripText: {
        width: "100%",
        padding: 10,
        //color: colors.Blue,
        fontWeight: '700',
        fontSize: 14,
        textAlignVertical: 'center',
        textAlign: 'center'
    },

    locateMe: {
        justifyContent: "center",
        alignContent: "center",
        alignItems: 'center',
        width: 40,
        height: 40,
        backgroundColor: "#fff",
        borderRadius: 20,
        shadowOpacity: 1.0,
        shadowColor: '#dddddd',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 4,
    },


    map: {
        ...StyleSheet.absoluteFillObject,
    },
    marker: {
        zIndex: 19,
        position: 'absolute',
        marginTop: -42,
        marginLeft: -14,
        left: '50%',
        top: '50%',
    },

});


