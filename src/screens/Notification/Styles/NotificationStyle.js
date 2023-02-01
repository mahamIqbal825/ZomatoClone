import EStyleSheet from 'react-native-extended-stylesheet';
import { Colors, Fonts } from '../../../theme';
import colors from '../../../theme/Colors';

const styles = EStyleSheet.create({
  conatinerStyle: {
    backgroundColor: Colors.white
  },
  container: {
    paddingHorizontal: '28rem',
    backgroundColor: Colors.white
  },
  notificationList: {
    paddingTop: '17rem',
    paddingBottom: '16rem',
    borderBottomWidth: '1rem',
    borderColor: Colors.green,
    borderRadius: '2rem'
  },
  notificationIconTextRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '8rem'
  },
  notificationIcon: {
    width: '20rem',
    height: '20rem',
    marginRight: '17.3rem'
  },
  notificationRestaurantName: {
    lineHeight: '14rem',
    color: colors.black,
    fontSize: Fonts.size.medium,
    ...Fonts.style.normalText
  },
  notificationTime: {
    fontSize: '10rem',
    lineHeight: '10rem',
    color: colors.lightBlack,
    ...Fonts.style.blackText
  },
  notificationDiscription: {
    lineHeight: '18rem',
    color: colors.lightBlack,
    fontSize: Fonts.size.tiny,
    ...Fonts.style.normalText
  }
});

export default styles;
