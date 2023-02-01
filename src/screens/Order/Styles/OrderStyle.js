import EStyleSheet from 'react-native-extended-stylesheet';
import { isIphoneX } from '../../../libs/Utils';
import { Colors, Fonts } from '../../../theme';

const styles = EStyleSheet.create({
  conatinerStyle: {
    backgroundColor: Colors.white
  },
  container: {
    paddingHorizontal: '28rem',
    paddingBottom: isIphoneX() ? '90rem' : '120rem',
    backgroundColor: Colors.white,
    paddingTop: '7rem'
  },
  customContainer: {
    paddingHorizontal: '28rem'
  },
  deliveryAddressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '19rem'
  },
  deliveryAddressImg: {
    width: '12.8rem',
    height: '12rem',
    marginRight: '6.2rem'
  },
  deliveryAddressText: {
    lineHeight: '14rem',
    color: Colors.green,
    opacity: 0.75,
    fontSize: Fonts.size.medium,
    ...Fonts.style.normalText
  },
  changeDeliveryAddressText: {
    marginLeft: 'auto',
    color: Colors.red,
    fontSize: '10rem',
    lineHeight: '10rem',
    textTransform: 'uppercase',
    ...Fonts.style.blackText
  },
  orderTimeRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  orderTimeIcon: {
    width: '14.4rem',
    height: '16rem',
    marginRight: '4.86rem'
  },
  orderTimeText: {
    color: Colors.lightBlack,
    lineHeight: '14rem',
    fontSize: Fonts.size.medium,
    ...Fonts.style.normalText
  },
  orderFoodListContainerstyle: {
    paddingBottom: '35rem',
    borderBottomWidth: '1rem',
    borderColor: Colors.lighterBlack
  },
  foodBiilList: {
    paddingVertical: '35rem',
    borderBottomWidth: '1rem',
    borderColor: Colors.lighterBlack
  },
  billTextRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '19rem'
  },
  totalBillTextRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '19rem'
  },
  foodItemText: {
    color: Colors.lightBlack,
    lineHeight: '18rem',
    fontSize: Fonts.size.h4,
    ...Fonts.style.normalText
  },
  amountText: {
    color: Colors.lightBlack,
    lineHeight: '18rem',
    marginLeft: 'auto',
    fontSize: Fonts.size.h4,
    ...Fonts.style.normalText
  },
  grandTotalText: {
    color: Colors.black,
    lineHeight: '18rem',
    fontSize: Fonts.size.h4,
    ...Fonts.style.normalText
  },
  totalAmountText: {
    color: Colors.green,
    lineHeight: '18rem',
    marginLeft: 'auto',
    fontSize: Fonts.size.h4,
    ...Fonts.style.extraBoldText
  },
  userDetaileContent: {
    paddingVertical: '35rem',
    borderBottomWidth: '1rem',
    borderColor: Colors.lighterBlack
  },
  userDetaileHeadingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '29rem'
  },
  userDetaileHeadingText: {
    lineHeight: '18rem',
    color: Colors.black,
    fontSize: Fonts.size.h4,
    ...Fonts.style.normalText
  },
  userDetaileList: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '19rem'
  },
  userDetaileLastList: {
    marginBottom: 0
  },
  userDetaileLeftImg: {
    width: '17rem',
    height: '17rem'
  },
  userDetaileRightText: {
    borderBottomWidth: '1rem',
    borderColor: Colors.lighterBlack,
    marginLeft: '16.32rem',
    width: '100% - 90rem'
  },
  userDetaileText: {
    paddingTop: '4rem',
    paddingBottom: '10rem',
    lineHeight: '16rem',
    color: Colors.lightBlack,
    fontSize: Fonts.size.regular,
    ...Fonts.style.normalText
  },
  paymentBtn: {
    marginTop: '28rem'
  }
});

export default styles;
