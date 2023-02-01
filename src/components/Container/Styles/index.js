import EStyleSheet from 'react-native-extended-stylesheet';
import { StatusBar } from 'react-native';
import { Colors } from '../../../theme';

import { getStatusBarHeight } from 'react-native-status-bar-height';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const statusBarHeight = getStatusBarHeight();

const styles = EStyleSheet.create({
  safeViewcontainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.transparent,
    '@media android': {
      marginTop: StatusBar.currentHeight
    }
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: statusBarHeight
  },
  statusBarMarginTop: {
    marginTop: StatusBar.currentHeight
  },
  bgFoodIcon: {
    width: windowWidth,
    height: windowHeight,
    position: 'absolute'
  },
  bgGradiant: {
    flex: 1,
    position: 'absolute',
    width: windowWidth,
    height: '100%',
    borderRadius: '30rem'
  }
});

export default styles;
