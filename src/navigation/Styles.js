import EStyleSheet from 'react-native-extended-stylesheet';
import { Colors } from '../theme';
import { isIphoneX } from '../libs/Utils';

const styles = EStyleSheet.create({
  navigationTextActive: {
    marginTop: '-6rem',
    textTransform: 'uppercase',
    color: Colors.white,
    fontSize: '14rem',
    fontWeight: '600'
  },
  navigationTextUnActive: {
    opacity: 0,
    height: 0
  },
  tabIconImg: {
    width: '20rem',
    height: '20rem'
    // marginTop: isIphoneX() ? '-61rem' : '-49rem'
  },
  // navigationUnActiveImg: {
  //   width: '20rem',
  //   height: '20rem'
  // },
  drawerContainer: {
    paddingHorizontal: '28rem',
    paddingTop: '19rem'
    // backgroundColor: Colors.white
  },
  closeIconBtn: {
    width: '12rem',
    height: '12rem',
    marginBottom: '26rem'
  },
  closeIcon: {
    width: '100%',
    height: '100%'
  },
  drawerTitle: {
    fontSize: '24rem',
    fontWeight: '600',
    lineHeight: '32rem',
    color: Colors.green,
    marginBottom: '28rem'
  },
  itemStyle: {
    paddingVertical: '9.5rem',
    marginVertical: '-13rem',
    marginLeft: 0
  },
  labelStyle: {
    fontSize: '18rem',
    lineHeight: '18rem'
  },
  bottomBarContainerStyle: {
    height: isIphoneX() ? '90rem' : '70rem',
    position: 'absolute',
    bottom: isIphoneX() ? '-32rem' : '-1rem',
    left: 0,
    right: 0
    // shadowColor: Colors.yellow,
    // shadowOffset: {
    //   width: 0,
    //   height: '-8rem'
    // },
    // shadowOpacity: 0.2,
    // shadowRadius: 10,
    // elevation: 10
  }
});

export default styles;
