import * as React from "react";
import { View, Dimensions } from "react-native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import styles from "./Styles";

const width = Dimensions.get("window").width * 0.8;

export function SkeletonSingleLine() {
  return (
    <SkeletonPlaceholder speed={1200}>
      <View style={styles.skeletonLineContainer}>
        <View style={{ marginLeft: 0, marginTop: 0 }}>
          <View style={{ width: width, height: 15, borderRadius: 6 }} />
        </View>
      </View>
    </SkeletonPlaceholder>
  );
}
