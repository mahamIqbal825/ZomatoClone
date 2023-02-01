import * as React from 'react';
import { View, Dimensions } from 'react-native';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

const width = Dimensions.get('window').width * 0.80

export function SkeletonSingleLine () {
  return (

    <SkeletonPlaceholder speed={1200}>
      <View style={{ flexDirection: "row", alignItems: "center" , margin:10}}>
        <View style={{ marginLeft: 0 , marginTop: 0}}>
          <View style={{ width: width, height: 15, borderRadius: 6 }} />
        </View>
      </View>
    </SkeletonPlaceholder>
    );
}
