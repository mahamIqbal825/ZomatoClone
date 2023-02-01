import EStyleSheet from 'react-native-extended-stylesheet';
import { isIphoneX } from '../../../libs/Utils';
import { Colors } from '../../../theme';

export default EStyleSheet.create({
  content: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  contentContainerStyle: {
    // backgroundColor: Colors.black,
    '@media ios': {
      minHeight: isIphoneX() ? '100% - 75rem' : '100% - 25rem'
    },
    '@media android': {
      minHeight: '100%'
    }
  }
});
