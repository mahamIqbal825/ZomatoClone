import * as React from "react";
import { useEffect, useState } from "react";
import { View, Text, Image, Modal, TouchableOpacity } from "react-native";
import { Images } from "../../theme";
import { BlurView } from "@react-native-community/blur";
import LinearGradient from "react-native-linear-gradient";
import styles from "./Styles/index";
import { useIsDrawerOpen } from "@react-navigation/drawer";
import { useDispatch, useSelector } from "react-redux";
import { showLocationModal } from "../../redux/actions";

function LocationModal() {
  const [modalSearchLocationVisible, setModalSearchLocationVisible] =
    useState(false);
  const isDrawerOpen = useIsDrawerOpen();
  const { showLocation, openCount } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  useEffect(() => {
    if (openCount === 0) {
      setTimeout(() => {
        dispatch(showLocationModal(true, 1));
      }, 3000);
    }
  }, []);

  return (
    <>
      <Modal
        transparent
        animationType="fade"
        visible={showLocation && !isDrawerOpen && openCount === 1}
      >
        <View style={styles.modalCenteredView}>
          <BlurView
            style={styles.absolute}
            blurType="ultraThinMaterialDark"
            blurAmount={10}
          />
          <View style={styles.modalView}>
            <Image
              source={Images.ModalBgimg}
              resizeMode="contain"
              style={styles.modalBgImgStyle}
            />
            <LinearGradient
              colors={["#fdf5db1a", "#FDF5DB"]}
              start={{ x: 1, y: 0.95 }}
              end={{ x: 1, y: 0 }}
              style={styles.bgGradiant}
            />
            <View style={styles.modalLocationBg}>
              <Image
                source={Images.ModalLocation}
                resizeMode="cover"
                style={styles.modalLocationStyle}
              />
            </View>
            <Text style={styles.modalHeading}>
              Device location is{"\n"}not enabled
            </Text>
            <Text style={styles.modalParegraph}>
              Please enabled device location to ensure accurate address and
              faster delivery
            </Text>
            <TouchableOpacity
              style={styles.modalBtn}
              onPress={() => {
                dispatch(showLocationModal(false));
              }}
            >
              <Image
                source={Images.LocationMarkWhite}
                resizeMode="cover"
                style={styles.modalBtnIcon}
              />
              <Text style={styles.modalBtnText}>Enable device location</Text>
            </TouchableOpacity>
            <View style={styles.orTextRow}>
              <View style={styles.orTextRowLine} />
              <Text style={styles.orText}>OR</Text>
              <View style={styles.orTextRowLine} />
            </View>
            <TouchableOpacity
              style={[styles.modalBtn, styles.modalSearchLocationBtn]}
              onPress={() => {
                setModalSearchLocationVisible(true);
                dispatch(showLocationModal(false));
              }}
            >
              <Image
                source={Images.GreenSearchIcon}
                resizeMode="cover"
                style={styles.modalBtnIcon}
              />
              <Text
                style={[styles.modalBtnText, styles.modalSearchLocationBtnText]}
              >
                Enter location manually
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal
        transparent
        animationType="fade"
        visible={modalSearchLocationVisible}
      >
        <View style={styles.modalCenteredView}>
          <BlurView
            style={styles.absolute}
            blurType="ultraThinMaterialDark"
            blurAmount={10}
          />
          <View style={[styles.modalView, styles.searchmodalView]}>
            <Image
              source={Images.ModalBgimg}
              resizeMode="contain"
              style={styles.modalBgImgStyle}
            />
            <LinearGradient
              colors={["#fdf5db1a", "#FDF5DB"]}
              start={{ x: 1, y: 0.95 }}
              end={{ x: 1, y: 0 }}
              style={styles.bgGradiant}
            />
            <Text style={[styles.modalHeading, styles.searchLocationHeading]}>
              Search location
            </Text>
            <TouchableOpacity
              style={styles.modalCloseBtn}
              onPress={() => setModalSearchLocationVisible(false)}
            >
              <Image
                source={Images.GreenCloseIcon}
                resizeMode="cover"
                style={styles.modalCloseBtnIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.modalBtn, styles.modalSearchLocationBtn]}
            >
              <Image
                source={Images.GreenSearchIcon}
                resizeMode="cover"
                style={styles.modalBtnIcon}
              />
              <Text
                style={[styles.modalBtnText, styles.modalSearchLocationBtnText]}
              >
                Search for your location
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.modalBtn, styles.searchLocationGreenBtn]}
            >
              <Image
                source={Images.LocationMarkWhite}
                resizeMode="cover"
                style={styles.modalBtnIcon}
              />
              <Text style={styles.modalBtnText}>Enable device location</Text>
            </TouchableOpacity>
            <Text style={styles.savedAddressText}>Saved Address</Text>
            <TouchableOpacity style={styles.saveAddressListRow}>
              <Text style={styles.saveAddressLabel}>HOME</Text>
              <Text style={styles.saveAddressText}>
                69 Hettinger Hill Apt. MI 6969
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.saveAddressListRow}>
              <Text style={styles.saveAddressLabel}>OFFICE</Text>
              <Text style={styles.saveAddressText}>
                69 Hettinger Hill Apt. MI 6969
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
}

export default LocationModal;
