import EStyleSheet from 'react-native-extended-stylesheet';
import { Colors, Fonts } from '../../../theme';

const styles = EStyleSheet.create({
  absolute: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0
  },
  bgGradiant: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0
  },
  modalCenteredView: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  modalBgImgStyle: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0
  },
  modalView: {
    overflow: 'hidden',
    width: '100% - 56rem',
    backgroundColor: '#fff',
    borderRadius: '8rem',
    padding: '28rem',
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalLocationBg: {
    width: '50rem',
    height: '50rem',
    borderRadius: '8rem',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    marginBottom: '42rem',
    shadowColor: Colors.lighterBlack,
    shadowOffset: {
      width: 0,
      height: '15rem'
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10
  },
  modalLocationStyle: {
    width: '24rem',
    height: '30rem'
  },
  modalHeading: {
    textAlign: 'center',
    lineHeight: '24rem',
    color: Colors.black,
    marginBottom: '25rem',
    fontSize: Fonts.size.h3,
    ...Fonts.style.blackText
  },
  modalParegraph: {
    textAlign: 'center',
    lineHeight: '20rem',
    color: Colors.black,
    opacity: 0.5,
    marginBottom: '31rem',
    fontSize: Fonts.size.regular,
    ...Fonts.style.normalText
  },
  modalBtn: {
    paddingTop: '15rem',
    paddingBottom: '16rem',
    paddingHorizontal: '15rem',
    width: '100%',
    borderRadius: '8rem',
    backgroundColor: Colors.green,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalBtnIcon: {
    width: '16rem',
    height: '16rem'
  },
  modalBtnText: {
    lineHeight: '16rem',
    color: Colors.white,
    marginLeft: '14rem',
    fontSize: Fonts.size.regular,
    ...Fonts.style.blackText
  },
  modalSearchLocationBtn: {
    backgroundColor: Colors.lighterGreen
  },
  modalSearchLocationBtnText: {
    color: Colors.green
  },
  orTextRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: '22rem'
  },
  orTextRowLine: {
    flex: 1,
    backgroundColor: Colors.gray,
    height: '1rem'
  },
  orText: {
    marginLeft: '12rem',
    marginRight: '13rem',
    color: Colors.lightBlack,
    lineHeight: '14rem',
    fontSize: Fonts.size.medium,
    ...Fonts.style.normalText
  },
  searchLocationHeading: {
    textAlign: 'left',
    marginBottom: '19rem',
    paddingRight: '20rem'
  },
  searchmodalView: {
    alignItems: 'flex-start'
  },
  searchLocationGreenBtn: {
    marginTop: '19rem'
  },
  modalCloseBtn: {
    position: 'absolute',
    right: '30rem',
    top: '34rem',
    width: '15rem',
    height: '15rem',
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalCloseBtnIcon: {
    width: '12rem',
    height: '12rem'
  },
  savedAddressText: {
    lineHeight: '20rem',
    color: Colors.black,
    marginTop: '28rem',
    fontSize: Fonts.size.regular,
    ...Fonts.style.normalText
  },
  saveAddressListRow: {
    marginTop: '19rem',
    width: '100%',
    borderBottomWidth: '1rem',
    borderColor: Colors.lighterBlack
  },
  saveAddressText: {
    color: Colors.green,
    lineHeight: '16rem',
    paddingTop: '6rem',
    paddingBottom: '10rem',
    width: '100%',
    fontSize: Fonts.size.regular,
    ...Fonts.style.normalText
  },
  saveAddressLabel: {
    color: Colors.green,
    lineHeight: '12rem',
    fontSize: Fonts.size.tiny,
    ...Fonts.style.extraBoldText
  }
});

export default styles;
