import {StyleSheet, Dimensions} from 'react-native';
import Theme from '../../../utils/Theme';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: Theme.wp('100%'),
    height: Theme.hp(35),
    // resizeMode: 'contain',
  },
  heading: {
    alignSelf: 'center',
    fontSize: Theme.RFValue(21),
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: Theme.wp(1),
    marginRight: Theme.wp(1),
    marginTop: Theme.hp(4),
  },
});
