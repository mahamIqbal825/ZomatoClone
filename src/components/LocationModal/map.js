import Geolocation from "@react-native-community/geolocation";
import React, { useEffect, useRef, useState } from "react";
import { Alert, Platform, Text, TouchableOpacity, View } from "react-native";
import MapView from "react-native-maps";
import { PERMISSIONS, request, RESULTS } from "react-native-permissions";
import Icon from "react-native-vector-icons/FontAwesome";
import { AddressDetails } from "./addressDetails";
import { SkeletonSingleLine } from "./loadingAnim";
//import { ShowMeLoc } from './showMe'
import { GOOGLE_MAP_API } from "../../utils/MapApi";
import CreateAddressModel from "./modelCreateAddress";
import styles from "./Styles";

const initCaamera = {
  center: { latitude: 25.1718801, longitude: 55.3599433 },
  pitch: 45,
  heading: 90,
  altitude: 0,
  zoom: 10,
};

const locationParams = {
  enableHighAccuracy: false,
  timeout: 30000,
  maximumAge: 1000,
};

function MapAddress({ navigation, route }) {
  const refMap = useRef();
  const [animatingGooleApi, setAnimatingGooleApi] = useState(false);
  const [addressDetail, setAddressDetail] = useState({});

  const [showModel, setShowModel] = useState(false);

  useEffect(() => {
    fnGetCurrentLocation();
  }, []);

  const fnGetCurrentLocation = async () => {
    const result = await request(
      Platform.select({
        android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
        ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
      })
    );
    console.log("res", result);
    if (result == RESULTS.GRANTED) {
      Geolocation.getCurrentPosition(
        (position) => {
          handlelocation(position);
        },
        (error) => Alert.alert(error.message),
        locationParams
      );
    } else {
      Alert.alert("app_permition_not");
    }
  };

  const handlelocation = (position) => {
    let mapRegion = {
      latitude: parseFloat(position.coords.latitude),
      longitude: parseFloat(position.coords.longitude),
      latitudeDelta: 0.015,
      longitudeDelta: 0.015,
    };
    moveCamera(mapRegion);
  };

  const moveCamera = (mapRegion) => {
    if (refMap.current) refMap.current.animateToRegion(mapRegion, 1000);
  };

  const onRegionChangeComplete = async (data) => {
    const _data = await GOOGLE_MAP_API(data);
    setAddressDetail(_data);
    setAnimatingGooleApi(false);
    return [
      {
        longitude: data.longitude,
        latitude: data.latitude,
      },
    ];
  };
  const onRegionChange = () => {
    if (!animatingGooleApi) {
      setAnimatingGooleApi(true);
    }
  };

  const showSearchResult = () => {};

  const { addrLine1 } = addressDetail ? addressDetail : {};

  const addressTitle = () => (
    <AddressDetails
      addresDetails={addrLine1}
      show={animatingGooleApi}
      _func={showSearchResult}
      goBack={() => navigation.goBack()}
    />
  );

  const saveButton = () => (
    <View style={styles.map_bottom_details}>
      {animatingGooleApi ? (
        <SkeletonSingleLine />
      ) : (
        <TouchableOpacity
          style={styles.confirmBtn}
          onPress={() => setShowModel(true)}
        >
          <Text style={styles.map_bottom_stripText}>{"Confirm"}</Text>
        </TouchableOpacity>
      )}
    </View>
  );

  const confirmAddress = () => (
    <CreateAddressModel
      showModel={showModel}
      setShowModel={setShowModel}
      adress={addressDetail}
      onSave={onSave}
    />
  );

  const onSave = () => {
    setShowModel(false);
    setTimeout(() => {
      navigation.goBack();
    }, 700);
  };

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
    </View>
  );
}

export default MapAddress;
