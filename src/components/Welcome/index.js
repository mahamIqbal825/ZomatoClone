import * as React from 'react';
import { Text, Image } from 'react-native';
import styles from './Styles/index';

function Welcome(props) {
  return (
    <>
      <Text style={styles.welcomeScreenHeading}>{props.heading}</Text>
      <Image
        source={props.image}
        resizeMode="contain"
        style={styles.welcomeScreenImages}
      />
    </>
  );
}

export default Welcome;
