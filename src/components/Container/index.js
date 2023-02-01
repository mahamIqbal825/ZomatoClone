import React from 'react';
import { SafeAreaView, StatusBar, View, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Colors, Images } from '../../theme';
import colors from '../../theme/Colors';
import styles from './Styles';

export default class Container extends React.Component {
  render() {
    const {
      children,
      transparentStatusBar,
      statusBarColor,
      lightContent,
      safeAreaView,
      safeAreaViewHeader,
      conatinerStyle,
      gradiantBg,
      gradiantBgImg,
      statusBarColorWhite
    } = this.props;
    const style = {
      flex: 0,
      alignItems: 'center',
      backgroundColor: !transparentStatusBar
        ? statusBarColor || Colors.white
        : 'transparent'
    };
    return (
      <>
        {gradiantBg && (
          <>
            {gradiantBgImg && (
              <Image
                source={Images.Background}
                resizeMode="cover"
                style={styles.bgFoodIcon}
              />
            )}
            <LinearGradient
              colors={['#ffffff', '#FDF5DB']}
              start={{ x: 0.5, y: 0.7 }}
              end={{ x: 0.5, y: 0.3 }}
              style={styles.bgGradiant}
            />
          </>
        )}
        <StatusBar
          backgroundColor={
            (statusBarColorWhite && Colors.white) ||
            (lightContent && colors.white) ||
            (statusBarColor && Colors.transparent)
          }
          barStyle={lightContent ? 'light-content' : 'dark-content'}
        />
        {safeAreaView !== false && <SafeAreaView style={style} />}
        {safeAreaView !== false && safeAreaViewHeader !== false && (
          <SafeAreaView style={[styles.safeViewcontainer, conatinerStyle]}>
            {children}
          </SafeAreaView>
        )}
        {(safeAreaView === false || safeAreaViewHeader === false) && (
          <View
            style={[
              styles.container,
              safeAreaViewHeader === false && styles.statusBarMarginTop
            ]}>
            {children}
          </View>
        )}
      </>
    );
  }
}
