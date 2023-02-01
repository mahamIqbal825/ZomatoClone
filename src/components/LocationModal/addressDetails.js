import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SkeletonSingleLine} from './loadingAnim'
import Ionicons from 'react-native-vector-icons/Ionicons';

export function AddressDetails({ addresDetails, show, _func , goBack}) {


  return (
    <View style={styles.map_top_details}>
      <FlatWhiteButton onPress={goBack}/>

      {show ?
        <SkeletonSingleLine /> :
        <TouchableOpacity
          style={{ width: "90%", marginStart: 10 }}
          onPress={_func}>
          <View>
            <Text style={styles.map_top_stripText}>{addresDetails}</Text>
          </View>
        </TouchableOpacity>
      }
    </View>
  )
}
const styles = StyleSheet.create({
  map_top_details: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    minHeight: 40,
    position: "absolute",
    backgroundColor: '#fff',
    width: "95%",
    zIndex: 0,
    top: 40,
    alignContent: "center",
    alignSelf: "center",
    shadowOpacity: 1,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
    height:55
  },

  map_top_stripText: {
    width: "90%",
    padding: 10,
    //color: colors.Gray5,
    fontWeight: '500',
    fontSize: 12,
    textAlign:'left',
    lineHeight:17,
  },


});

function FlatWhiteButton({onPress}) {
  return (
      <TouchableOpacity onPress={onPress}
          style={{ marginStart:15, alignItems: 'center', justifyContent: 'center', }}>
         <Ionicons name= {'arrow-back-outline'} size={25} color="#58585a" />
      </TouchableOpacity>
  )
}

