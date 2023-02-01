import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Images } from '../../theme';
import styles from './Styles';

class HeaderRight extends React.PureComponent {
  render() {
    const { style, children } = this.props;
    return (
      <View style={[styles.right, style]}>
        <TouchableOpacity style={styles.likeShareBtn}>
          <Image
            source={Images.LikeLineIcon}
            resizeMode="contain"
            style={styles.likeShareImg}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.likeShareBtn}>
          <Image
            source={Images.ShareLineIcon}
            resizeMode="contain"
            style={styles.likeShareImg}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export default HeaderRight;
