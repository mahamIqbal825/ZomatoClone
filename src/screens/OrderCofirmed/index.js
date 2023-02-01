import React, { useEffect, useRef, useMemo, useCallback, useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Alert, Platform, Text, Linking, Image } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Polyline } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux'
import MapViewDirections from 'react-native-maps-directions';

import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import { API_SERVICE } from '../../utils/API'
import AddOrderInstructions from '../../components/Models/addOrderInstructions'


const initCaamera = {
    center: { latitude: 25.1718801, longitude: 55.3599433 },
    pitch: 45,
    heading: 90,
    altitude: 0,
    zoom: 10,
}

const locationParams = { enableHighAccuracy: false, timeout: 30000, maximumAge: 1000 }

const DEFAULT_PADDING = {
    bottom: 400,
    right: 50,
    top: 0,
    left: 50,
};

let isMounted = false

function OrderConfirmed({ navigation, route }) {

    const refMap = useRef();
    const { order_id } = route.params
    const [orderDetails, setOrderDetails] = useState({})

    useEffect(() => {
        isMounted = true
        loadData()
        return () => isMounted = false
    }, [order_id])

    const loadData = async () => {
        const result = await API_SERVICE('orders/view', { order_id }, 'POST')
        const { status, data } = result
        if (status === 1 && isMounted) {
            setOrderDetails(data)
        }
    }

    const userAddress = useSelector((state) => state.userReducer.Address)
    const { addres_latitude, addres_longitude, address_mobile } = userAddress

    const { store_latitude, store_longitude } = orderDetails

    const [coordinates] = useState([
        {
            latitude: store_latitude,
            longitude: store_longitude
        },
        {
            latitude: addres_latitude,
            longitude: addres_longitude
        },
    ]);


    // useEffect(() => {
    //     fnGetCurrentLocation()
    // }, [])

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

    const handlelocation = (position) => {
        let mapRegion = {
            latitude: parseFloat(position.coords.latitude),
            longitude: parseFloat(position.coords.longitude),
            latitudeDelta: 0.015,
            longitudeDelta: 0.015,
        }
        moveCamera(mapRegion)
    }

    const moveCamera = (mapRegion) => {
        if (refMap.current)
            refMap.current.animateToRegion(mapRegion, 1000)
    }

    const onPress = () => {
        navigation.goBack()
    }

    const [showModel, setShowModel] = useState(false)
    const renderContent = () => {

        const { store_name, store_phone, store_image, contact_us_phone } = orderDetails

        const makeCall = () => {
            Linking.openURL(`tel:${store_phone}`)
                .catch((e) => Alert.alert('error', e.message))
        }

        const openWhatsapp = () => {
            Linking.openURL(`whatsapp://send?text=''&phone=${contact_us_phone}`)
                .catch((e) => Alert.alert('error', e.message))
        }

        return (
            <View style={{ backgroundColor: 'white', padding: 16, height: 450 }}>

                <View style={{
                    flexDirection: 'row', alignItems: 'center', marginBottom: 20, borderBottomColor: '#00665333', borderBottomWidth: 1,
                    paddingBottom: 10
                }}>
                    <Image source={{ uri: store_image }} style={{ width: 50, height: 50, borderRadius: 10, marginEnd: 15 }} />
                    <Text style={{ flex: 1, fontSize: 16, fontFamily: 'SofiaPro', color: '#006653' }}>{store_name}</Text>
                    <TouchableOpacity onPress={makeCall}
                        style={{
                            height: 36, width: 36, borderRadius: 18, backgroundColor: '#fff',
                            justifyContent: 'center', alignItems: 'center',
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 1 },
                            shadowOpacity: 0.6,
                            shadowRadius: 2,
                            elevation: 5
                        }}>
                        <Ionicons name="call" size={20} color={'#006653'} />
                    </TouchableOpacity>
                </View>

                <View style={{ marginBottom: 20, borderBottomColor: '#00665333', borderBottomWidth: 1, paddingBottom: 10 }}>


                    <Text style={{ fontSize: 16, fontFamily: 'SofiaPro', marginBottom: 10 }}>Order Details</Text>
                    {
                        orderDetails.order_products && orderDetails.order_products.map((item, index) => {

                            const { cart_quantity, product_title, product_image } = item
                            return (
                                <View key={index} style={{ flexDirection: 'row', height: 45, alignItems: 'center' }}>
                                    <View style={{
                                        height: 40,
                                        width: 40,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderRadius: 10,
                                        backgroundColor: '#fff',
                                        shadowColor: '#000',
                                        shadowOffset: { width: 0, height: 1 },
                                        shadowOpacity: 0.6,
                                        shadowRadius: 2,
                                        elevation: 5
                                    }}>
                                        <Image source={{ uri: product_image }} style={{ width: 35, height: 35, borderRadius: 0 }} />
                                    </View>

                                    <Text style={{ paddingStart: 10, marginTop: 5, fontSize: 12, fontFamily: 'SofiaPro' }}>{`${cart_quantity} X ${product_title}`}</Text>
                                </View>
                            )
                        })
                    }
                </View>
                <TouchableOpacity onPress={() => setShowModel(true)}
                    style={{ flexDirection: 'row', alignItems: 'center', height: 45, marginBottom: 20, borderBottomColor: '#00665333', borderBottomWidth: 1, paddingBottom: 10 }}>
                    <Ionicons name="restaurant-outline" size={20} color={'#006653'} />
                    <Text style={{ fontSize: 16, fontFamily: 'SofiaPro', paddingStart: 10, flex: 1 }}>Add cooking instructions</Text>
                    <Ionicons name="chevron-forward-outline" size={20} color={'#333'} />
                </TouchableOpacity>

                <TouchableOpacity onPress={openWhatsapp}
                    style={{ flexDirection: 'row', alignItems: 'center', height: 45, marginBottom: 20, borderBottomColor: '#00665333', borderBottomWidth: 1, paddingBottom: 10 }}>
                    <Ionicons name="logo-whatsapp" size={20} color={'#006653'} />
                    <Text style={{ fontSize: 16, fontFamily: 'SofiaPro', paddingStart: 10, flex: 1 }}>Contact us</Text>
                    <Ionicons name="chevron-forward-outline" size={20} color={'#333'} />
                </TouchableOpacity>
            </View>
        );
    }


    const sheetRef = React.useRef(null);
    const [fall] = useState(new Animated.Value(1))


    const showHeader = () => (
        <View style={styles.panelHeader}>
            <View style={styles.modalHeader}>
                <View style={styles.panelHandle} />
                <View style={styles.panelHandle} />
            </View>
        </View>
    );


    const [snapValue, swtSnapValue] = useState(300)
    const [zoomValue, setZoomValue] = useState(16)



    const onOpenStart = () => {

        //swtSnapValue(100)
        setZoomValue(14)
    }
    const onOpenEnd = () => {
        //swtSnapValue(450)
        setZoomValue(16)
    }
    const onCloseStart = () => {
        //swtSnapValue(300)
        setZoomValue(15)
    }
    const onCloseEnd = () => {
        //swtSnapValue(100)
        setZoomValue(14)

    }

    useEffect(() => {
        refMap && refMap.current.fitToCoordinates(coordinates,
            {
                edgePadding: DEFAULT_PADDING,
                animated: true,
            }, 500);
    }, [orderDetails])


    const fitAllMarkers = () => {

    }
    return (
        <View style={{ flex: 1 }}>

            <MapView
                provider={PROVIDER_GOOGLE}
                ref={refMap}
                style={{ flex: 1 }}
                initialCamera={initCaamera}
                //minZoomLevel={zoomValue}
                maxZoomLevel={16}
                //zoomEnabled={true}
                onMapReady={fitAllMarkers}
                //onRegionChangeComplete={onRegionChangeComplete}
                mapPadding={{ bottom: 0, top: 0 }}>
                {/* <MapViewDirections
                    origin={coordinates[0]}
                    destination={coordinates[1]}
                    apikey={'AIzaSyAQDBt0FHmbPe6x7O6H5EudhcdaaFXO_H4'} 
                    strokeWidth={4}
                    strokeColor="#333"
                    /> */}

                <Polyline

                    coordinates={coordinates}
                    //strokeColor="rgba(r,g,b,0.1)"
                    //strokeColors={['#333','#fff']}
                    strokeWidth={2}
                />

                <Marker coordinate={coordinates[0]} />
                <Marker coordinate={coordinates[1]} />

            </MapView>


            <TouchableOpacity style={styles.closeButton} onPress={onPress}>
                <Ionicons name="close-outline" style={{ color: '#006653' }} size={30} />
            </TouchableOpacity>

            <BottomSheet
                onOpenStart={onOpenStart}
                onOpenEnd={onOpenEnd}
                onCloseStart={onCloseStart}
                onCloseEnd={onCloseEnd}
                ref={sheetRef}
                snapPoints={[450, 300, 100]}
                initialSnap={0}
                callbackNode={fall}
                enabledGestureInteraction={true}
                renderContent={renderContent}
                renderHeader={showHeader}
                enabledBottomClamp={true}
                overdragResistanceFactor={1}
            />


            <AddOrderInstructions showModel={showModel} setShowModel={setShowModel} order_id={order_id} />
        </View>

    );

}


export default OrderConfirmed


const styles = StyleSheet.create({

    closeButton: {
        position: 'absolute',
        end: 10,
        top: 50,
        height: 36,
        width: 36,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 18,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5
    },
    bottomSheetContainer: {
        paddingHorizontal: 25,
        marginTop: 27
    },
    panelHeader: {
        backgroundColor: "#ffffff",
        paddingTop: 15,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderColor: "#ffffff",
    },
    panel: {
        padding: 20,
        backgroundColor: "#ffffff",
        paddingTop: 20,
        marginBottom: 0,
    },
    modalHeader: {
        justifyContent: "center",
        alignItems: "center",
    },
    modalHeaderText: {
        fontSize: 15,

    },
    panelHandle: {
        width: 30,
        height: 4,
        borderRadius: 4,
        backgroundColor: "#00000040",
        marginBottom: 3,
    }

});


