import { Platform } from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';

import { Colors, Fonts } from '../../../theme';
// import FontHelper from '../../../helpers/FontHelper';
// import colors from '../../../theme/Colors';

export default EStyleSheet.create({
  header: {
    width: '100%',
    height: '55rem',
    flexDirection: 'row',
    backgroundColor: Colors.white,
    alignItems: 'center',
    top: 0,
    zIndex: 99999,
    ...Platform.select({
      ios: {
        shadowColor: Colors.black,
        shadowOffset: {
          width: 0,
          height: '5rem'
        },
        shadowOpacity: 0
      },
      android: {
        elevation: 0
      }
    })
  },
  transparent: {
    backgroundColor: 'transparent',
    ...Platform.select({
      ios: {
        shadowColor: null,
        shadowOffset: null,
        shadowOpacity: null
      },
      android: {
        elevation: null
      }
    })
  },
  left: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '20rem',
    height: '100%',
    position: 'absolute',
    left: '28rem'
  },
  right: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '15%',
    height: '100%',
    position: 'absolute',
    right: '10rem'
  },
  title: {
    paddingHorizontal: '10rem',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: '70%',
    height: '100%',
    left: '15%'
  },
  titleTxt: {
    fontSize: Fonts.size.h4,
    lineHeight: '18rem',
    color: Colors.black,
    top: '2rem',
    '@media ios': {
      ...Fonts.style.normalText
    },
    '@media android': {
      ...Fonts.style.boldText
    }
  },
  backBtn: {
    flex: 1
  },
  // txtChildren: { color: colors.PrimaryColor, ...Fonts.style.boldText },
  textSubChild: {
    marginLeft: '5rem',
    ...Fonts.style.boldText
    // color: colors.lightWhite
  },
  leftArrow: { height: '15rem', width: '18rem' },
  efftLogo: {
    width: '80rem',
    height: '58rem',
    alignSelf: 'center',
    position: 'absolute',
    overflow: 'visible',
    marginTop: '20rem',
    zIndex: 9999999
  },
  efftTitle: {
    width: '200rem',
    height: '40rem',
    alignSelf: 'center',
    marginTop: '30rem'
  },
  flaseTitle: {
    width: '150rem'
  },
  userIconImg: {
    width: '30rem',
    height: '30rem',
    borderRadius: '30rem'
  },
  '@media android and (max-width: 768)': {
    efftLogo: {
      width: '70rem',
      height: '51rem'
    },
    efftTitle: {
      width: '150rem',
      height: '25rem'
    }
  },
  dropdownContent: {
    marginLeft: 'auto',
    marginRight: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100% - 150rem',
    height: '55rem'
  },
  dropDownStyle: {
    backgroundColor: Colors.transparent,
    borderWidth: 0,
    // paddingLeft: '20rem',
    height: '13rem',
    marginBottom: 0
  },
  listItemLabelStyle: {
    padding: 0
  },
  placeholderStyle: {
    lineHeight: '12rem',
    fontSize: Fonts.size.tiny,
    ...Fonts.style.normalText
  },
  textStyle: {
    color: Colors.green,
    lineHeight: '12rem',
    fontSize: Fonts.size.tiny,
    ...Fonts.style.normalText
  },
  dropDownContainerStyle: {
    backgroundColor: Colors.white,
    borderWidth: 0,
    zIndex: 999999
  },
  dropdownLocationIcon: {
    width: '10rem',
    height: '10rem'
    // position: 'absolute',
    // left: 0,
    // top: 0
  },
  dropDownArrowIcon: {
    width: '10rem',
    height: '8rem'
  },
  likeShareBtnRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: '-8rem',
    height: '100%',
    position: 'absolute',
    right: '28rem'
  },
  likeShareBtn: {
    width: '17rem',
    height: '17rem',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: '8rem'
  },
  likeShareImg: {
    width: '16rem',
    height: '15rem'
  }
});
