import EStyleSheet from 'react-native-extended-stylesheet';
import { Colors, Fonts } from '../../../theme';

const styles = EStyleSheet.create({
  commonBtn: {
    padding: '17rem',
    width: '100%',
    backgroundColor: Colors.green,
    borderRadius: '13rem',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  commonBtnText: {
    color: Colors.white,
    letterSpacing: '0.08rem',
    fontSize: '15rem',
    lineHeight: '15rem',
    textAlign: 'center',
    '@media ios': {
      ...Fonts.style.blackText
    },
    '@media android': {
      ...Fonts.style.extraBoldText
    }
  },
  btnImg: {
    width: '24rem',
    height: '24rem'
  },
  imgBtnText: {
    paddingLeft: '14rem'
  }
});

export default styles;
