import EStyleSheet from 'react-native-extended-stylesheet';
import { isIphoneX } from '../../../libs/Utils';
import { Colors, Fonts } from '../../../theme';

const styles = EStyleSheet.create({
  container: {
    paddingTop: '24rem',
    paddingBottom: isIphoneX() ? '90rem' : '120rem'
  },
  labelStyle: {
    color: Colors.green,
    fontSize: '15rem',
    lineHeight: '15rem',
    letterSpacing: '0.08rem',
    textTransform: 'none',
    paddingVertical: '6.5rem',
    ...Fonts.style.blackText
  },
  tabBarStyle: {
    backgroundColor: Colors.white,
    borderRadius: '13rem',
    borderWidth: '1rem',
    borderColor: Colors.green,
    overflow: 'hidden',
    height: '55rem',
    shadowOffset: {
      height: 0,
      width: 0
    },
    shadowOpacity: 0
  },
  indicatorStyle: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: '3rem',
    width: '50% - 36rem',
    borderRadius: '10rem',
    backgroundColor: Colors.green,
    height: '55rem - 8rem'
  },
  tabViewStyle: {
    flex: 1,
    width: '100%',
    paddingHorizontal: '28rem',
    backgroundColor: Colors.white,
    paddingTop: '7rem'
  },
  tabViewBody: {
    paddingTop: '24rem'
  },
  addCartFoodContentStyle: {
    width: '50% - 36rem',
    paddingBottom: '12rem'
  }
});

export default styles;
