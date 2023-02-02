import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { SkeletonSingleLine } from "./loadingAnim";
import styles from "./Styles";

export function AddressDetails({ addresDetails, show, _func, goBack }) {
  return (
    <View style={styles.map_top_details}>
      <FlatWhiteButton onPress={goBack} />

      {show ? (
        <SkeletonSingleLine />
      ) : (
        <TouchableOpacity style={styles.addressBox} onPress={_func}>
          <View>
            <Text style={styles.map_top_stripText}>{addresDetails}</Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
}

function FlatWhiteButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.backBtn}>
      <Ionicons name={"arrow-back-outline"} size={25} color="#58585a" />
    </TouchableOpacity>
  );
}
