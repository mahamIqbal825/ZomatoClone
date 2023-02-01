import EStyleSheet from 'react-native-extended-stylesheet';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { Dimensions } from 'react-native';
import { Colors, Fonts } from '../../../theme';
import { isIphoneX } from '../../../libs/Utils';

const windowHeight = Dimensions.get('window').height;
const statusBarHeight = getStatusBarHeight();

const styles = EStyleSheet.create({
  conatinerStyle: {
    backgroundColor: Colors.white
  },
  container: {
    // flex: 1,
    paddingHorizontal: '28rem',
    paddingBottom: isIphoneX() ? '90rem' : '120rem',
    backgroundColor: Colors.white,
    minHeight: windowHeight - statusBarHeight * 2
  },
  profileEdirContainer: {
    // flex: 1,
    paddingHorizontal: '28rem',
    paddingBottom: '15rem',
    backgroundColor: Colors.white,
    minHeight: windowHeight - statusBarHeight * 2 - 55
  },
  profileImage: {
    width: '90rem',
    height: '90rem',
    borderRadius: '500rem',
    marginTop: '15rem',
    marginBottom: '21rem'
  },
  userNameText: {
    fontSize: '20rem',
    lineHeight: '20rem',
    color: Colors.green,
    marginBottom: '7rem',
    ...Fonts.style.blackText
  },
  userEmailText: {
    color: '#9EA1B1',
    lineHeight: '14rem',
    fontSize: Fonts.size.medium,
    ...Fonts.style.normalText
  },
  userProfileList: {
    marginTop: '43rem'
  },
  userProfileListItem: {
    flexDirection: 'row',
    marginBottom: '33rem'
  },
  userProfileListIcon: {
    width: '17rem',
    height: '19rem'
  },
  userProfileListName: {
    borderBottomWidth: '1rem',
    borderBottomColor: Colors.lighterBlack,
    width: '100% - 91rem',
    marginLeft: '16rem'
  },
  userProfileListText: {
    lineHeight: '16rem',
    color: Colors.black,
    paddingBottom: '10rem',
    paddingTop: '4rem',
    fontSize: Fonts.size.regular,
    ...Fonts.style.normalText
  },
  profileEditContent: {
    paddingTop: '18rem'
  },
  profilePhotoView: {
    width: '113rem',
    height: '113rem',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderWidth: '10rem',
    borderColor: Colors.white,
    borderRadius: '100rem',
    shadowColor: '#F1F1F1',
    shadowOffset: {
      width: '5rem',
      height: '15rem'
    },
    shadowOpacity: 1,
    shadowRadius: 15,
    elevation: 15,
    backgroundColor: Colors.white
  },
  profileEditPhoto: {
    width: '100%',
    height: '100%',
    shadowColor: Colors.yellow,
    borderRadius: '100rem',
    backgroundColor: Colors.yellow,
    shadowOffset: {
      width: 0,
      height: '10rem'
    },
    shadowOpacity: 0.4,
    shadowRadius: 15,
    elevation: 15
  },
  cameraIconBtn: {
    width: '27rem',
    height: '27rem',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    borderRadius: '50rem',
    position: 'absolute',
    bottom: '-6rem',
    right: '2rem'
  },
  picPhotoIcon: {
    width: '11rem',
    height: '10rem'
  },
  profileEditNumberInput: {
    '@media android': {
      marginBottom: '33rem'
    }
  },
  editProfileUserName: {
    fontSize: '20rem',
    lineHeight: '20rem',
    color: Colors.green,
    textAlign: 'center',
    marginTop: '19rem',
    ...Fonts.style.blackText
  },
  editProfileInput: {
    marginTop: '42rem'
  },
  editProfileSaveBtn: {
    marginTop: 'auto'
  },
  modalCenteredView: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  absolute: {
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
    paddingTop: '63rem',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  modalBgImgStyle: {
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
  modalHeading: {
    textAlign: 'center',
    lineHeight: '24rem',
    color: Colors.black,
    marginBottom: '25rem',
    alignSelf: 'center',
    fontSize: Fonts.size.h3,
    ...Fonts.style.blackText
  },
  modalCloseBtn: {
    position: 'absolute',
    right: '28rem',
    top: '28rem',
    width: '16rem',
    height: '16rem',
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalCloseBtnIcon: {
    width: '12rem',
    height: '12rem'
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
  modalBtnText: {
    lineHeight: '16rem',
    color: Colors.white,
    fontSize: Fonts.size.regular,
    ...Fonts.style.blackText
  },
  modalLightBtn: {
    backgroundColor: Colors.lighterGreen,
    marginTop: '22rem'
  },
  modalLightBtnText: {
    color: Colors.green
  },
  modalPeragraphText: {
    lineHeight: '20rem',
    color: Colors.lightBlack,
    textAlign: 'center',
    width: '100%',
    marginBottom: '31rem',
    fontSize: Fonts.size.regular,
    ...Fonts.style.normalText
  }
});

export default styles;
