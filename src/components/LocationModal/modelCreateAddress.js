import React, { useState } from "react";
import { Keyboard, Text, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useDispatch } from "react-redux";
import { setUserAddress } from "../../redux/actions/UserAction";
import { API_SERVICE } from "../../utils/API";
import Tag from "../Tags";
import InputText from "./InputText";
import styles from "./Styles";

export default function CreateAddressModel({
  showModel,
  setShowModel,
  adress,
  onSave,
}) {
  const [selectedTag, setSelectedTag] = useState("Home");
  const [house, setHouse] = useState("");
  const [building, setBuilding] = useState("");
  const [area, setArea] = useState(addrLine1);
  const [landmark, setLandmark] = useState("");

  const dispatch = useDispatch();
  const { addrLatitude, addrLine1, addrLongitude } = adress ? adress : {};

  const onPress = async () => {
    Keyboard.dismiss();

    const payload = {
      selectedTag,
      house,
      building,
      area,
      landmark,
      addrLatitude,
      addrLine1,
      addrLongitude,
    };

    try {
      const result = await API_SERVICE("customer/address", payload);
      const { status, data } = result;
      if (status === 1) {
        dispatch(setUserAddress(data));
        onSave();
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Modal
      animationOutTiming={600}
      animationInTiming={1000}
      useNativeDriver={true}
      onBackdropPress={() => setShowModel(false)}
      animationIn={"slideInUp"}
      style={{ margin: 0 }}
      avoidKeyboard={true}
      isVisible={showModel}
    >
      <View style={styles.modalMainContainer}>
        <View style={styles.modalInnerContainer}>
          <Text style={styles.enterAdrressTxt}>Enter address details</Text>
          <TouchableOpacity onPress={onPress} style={styles.closeBtn}>
            <Ionicons name={"close-outline"} size={25} color="#C4C4C4" />
          </TouchableOpacity>
        </View>

        <View style={styles.tagsMainContainer}>
          <Text style={styles.tagThisLocTxt}>Tag this location for later</Text>

          <View style={styles.tagsContainer}>
            <Tag
              title={"Home"}
              selectedTag={selectedTag}
              setSelectedTag={setSelectedTag}
            />
            <Tag
              title={"Work"}
              selectedTag={selectedTag}
              setSelectedTag={setSelectedTag}
            />
            <Tag
              title={"Hotel"}
              selectedTag={selectedTag}
              setSelectedTag={setSelectedTag}
            />
            <Tag
              title={"Other"}
              selectedTag={selectedTag}
              setSelectedTag={setSelectedTag}
            />
          </View>
        </View>

        <View style={styles.inputTxtContainer}>
          <InputText
            value={house}
            setValue={setHouse}
            placeholder={"House no. / Flat no. *"}
            autoFocus={true}
          />
          <InputText
            value={building}
            setValue={setBuilding}
            placeholder={"Building / Permise name *"}
            autoFocus={false}
          />
          <InputText
            value={addrLine1}
            setValue={setArea}
            placeholder={"Area / Street *"}
            autoFocus={false}
          />
          {/* <InputText value = {landmark} setValue = {setLandmark} placeholder={'Landmark (Optional)'} autoFocus={false}/> */}

          <TouchableOpacity onPress={onPress} style={styles.saveAddressBtn}>
            <Text style={styles.saveAddressTxt}>Save address</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
