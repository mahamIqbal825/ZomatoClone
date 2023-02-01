import EStyleSheet from 'react-native-extended-stylesheet';
import { Colors, Fonts } from '../../../theme';

const styles = EStyleSheet.create({
  conatinerStyle: {
    backgroundColor: Colors.white
  },
  container: {
    paddingHorizontal: '28rem',
    paddingTop: '7rem',
    paddingBottom: '15rem',
    backgroundColor: Colors.white
  },
  hotelNameLocation: {
    marginBottom: '35rem'
  },
  hotelNameText: {
    lineHeight: '24rem',
    color: Colors.green,
    marginBottom: '9rem',
    fontSize: Fonts.size.h3,
    ...Fonts.style.blackText
  },
  hotelLocationText: {
    fontSize: '15rem',
    lineHeight: '15rem',
    color: Colors.lightBlack,
    ...Fonts.style.normalText
  },
  orderFoodListContent: {
    borderTopWidth: '1rem',
    borderColor: Colors.lighterBlack
  },
  deliveredFoodText: {
    lineHeight: '14rem',
    color: Colors.green,
    opacity: 0.75,
    marginTop: '35rem',
    marginBottom: '16rem',
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
    width: '23rem',
    height: '19rem'
  },
  userDetaileRightText: {
    borderBottomWidth: '1rem',
    borderColor: Colors.lighterBlack,
    marginLeft: '16.32rem',
    width: '100% - 96rem'
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
