import React from 'react';
import { View, Image } from 'react-native';
import styles from './Styles';
import HeaderLeft from './Left';
import HeaderRight from './Right';
import HeaderTitle from './Title';
import TitleLogo from './TitleLogo';
import UserLeft from './UserLeft';
import HeaderDropDown from './HeaderDropDown';
import { Images } from '../../theme';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Header extends React.PureComponent {
  static TITLE = HeaderTitle;
  static LEFT = HeaderLeft;
  static RIGHT = HeaderRight;
  static Logo = TitleLogo;
  static User = UserLeft;

  render() {
    const {
      style,
      transparent,
      hasBackBtn,
      navigation,
      title,
      titleStyle,
      onBackPress,
      locationDropDown,
      hasShareLike,
      onLikePress,
      onSharePress
      // hasLogoTitle,
      // centerLogo,
      // userIcon
    } = this.props;
    return (
      <>
        <View style={[styles.header, style, transparent && styles.transparent]}>
          {hasBackBtn && (
            <HeaderLeft>
              <View style={styles.backBtn}>
                <TouchableOpacity
                  onPress={() => {
                    if (onBackPress) {
                      onBackPress();
                    } else if (navigation) {
                      navigation.goBack();
                    }
                  }}>
                  <Image
                    source={Images.BackArrow}
                    style={styles.leftArrow}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>
            </HeaderLeft>
          )}

          {/* {userIcon && (
            <UserLeft>
              <View style={styles.userIcon}>
                <TouchableOpacity>
                  <Image
                    source={Images.coin}
                    style={styles.userIconImg}
                    // resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>
            </UserLeft>
          )} */}

          {title && <HeaderTitle style={titleStyle}>{title}</HeaderTitle>}
          {/* {centerLogo && (
            <TitleLogo>
              <Image
                source={Images.efftTitleWhite}
                style={styles.flaseTitle}
                resizeMode="contain"
              />
            </TitleLogo>
          )} */}
          {locationDropDown && <HeaderDropDown />}
          {hasShareLike && (
            <View style={styles.likeShareBtnRow}>
              <TouchableOpacity
                style={styles.likeShareBtn}
                onPress={() => {
                  if (onLikePress) {
                    onLikePress();
                  }
                }}>
                <Image
                  source={Images.LikeLineIcon}
                  resizeMode="contain"
                  style={styles.likeShareImg}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.likeShareBtn}
                onPress={() => {
                  if (onSharePress) {
                    onSharePress();
                  }
                }}>
                <Image
                  source={Images.ShareLineIcon}
                  resizeMode="contain"
                  style={styles.likeShareImg}
                />
              </TouchableOpacity>
            </View>
          )}
        </View>
      </>
    );
  }
}
