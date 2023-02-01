import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './Styles/index';

function CommonHeadingBtn(props) {
  return (
    <>
      <View style={[styles.headdingBtnRow, props.containerStyle]}>
        <Text style={styles.headingText}>{props.headingText}</Text>
        {props.hasBtn && (
          <TouchableOpacity
            style={styles.headingBtn}
            onPress={() => {
              if (props.btnPress) {
                props.btnPress();
              }
            }}>
            <Text style={styles.headingBtnText}>{props.headingBtnText}</Text>
          </TouchableOpacity>
        )}
      </View>
    </>
  );
}

export default CommonHeadingBtn;
