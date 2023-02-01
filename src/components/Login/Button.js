import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import Theme from '../../utils/Theme';

function Button({marginTop, onPress, text}) {
  return (
    <TouchableOpacity style={[styles.container, {marginTop}]} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

export default Button;
const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: Theme.primaryColor,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});
