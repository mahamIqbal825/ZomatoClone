import * as React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import styles from './Styles/index';

function CommonBtn(props) {
  return (
    <>
      {props.normalBtn && (
        <TouchableOpacity
          disabled={props.disabledBtn || false}
          style={[styles.commonBtn, props.commonBtnStyle]}
          onPress={() => {
            if (props.onPress) {
              props.onPress();
            }
          }}>
          <Text style={[styles.commonBtnText, props.commonBtnTextStyle]}>
            {props.btnText}
          </Text>
        </TouchableOpacity>
      )}
      {props.imageBtn && (
        <TouchableOpacity
          disabled={props.disabledBtn || false}
          style={[styles.commonBtn, props.commonBtnStyle]}
          onPress={() => {
            if (props.onPress) {
              props.onPress();
            }
          }}>
          <Image
            source={props.btnImg}
            resizeMode="contain"
            style={[styles.btnImg, props.btnImgStyle]}
          />
          <Text
            style={[
              styles.commonBtnText,
              styles.imgBtnText,
              props.commonBtnTextStyle
            ]}>
            {props.btnText}
          </Text>
        </TouchableOpacity>
      )}
    </>
  );
}

export default CommonBtn;
