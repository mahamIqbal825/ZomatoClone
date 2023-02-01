import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import Theme from '../../utils/Theme';

function InputFields({marginTop, placeholder, headingText, ...props}) {
  return (
    <View style={[styles.container, {marginTop: marginTop}]}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={Theme.placeholderColor}
          selectionColor={Theme.blackColor}
          style={styles.textInput}
          {...props}
        />
      </View>
    </View>
  );
}

export default InputFields;
const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
  },
  inputContainer: {
    height: 50,
    width: '100%',
    borderWidth: 1,
    borderColor: Theme.borderColor,
    marginTop: Theme.hp(1),
    borderRadius: 10,
    justifyContent: 'center',
  },
  textInput: {
    height: 16,
    fontSize: 16,
    color: Theme.blackColor,
    marginLeft: Theme.wp(1.5),
  },
});
