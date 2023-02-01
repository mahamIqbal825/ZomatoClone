import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import Theme from '../../utils/Theme';

function Separator({marginTop}) {
  return (
    <View style={[styles.container, {marginTop: marginTop}]}>
      <Image
        source={require('../../assets/Line.png')}
        style={styles.imageleft}
      />
      <Text style={styles.text}> Login or Sign Up </Text>
      <Image
        source={require('../../assets/Line.png')}
        style={styles.imageright}
      />
    </View>
  );
}

export default Separator;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  imageleft: {
    height: 1.2,
    width: 100,
    marginRight: Theme.hp(1),
  },
  imageright: {
    height: 1.2,
    width: 100,
    marginLeft: Theme.hp(1),
  },
  text: {
    color: 'grey',
    fontSize: Theme.RFValue(16),
    fontWeight: '600',
  },
});
