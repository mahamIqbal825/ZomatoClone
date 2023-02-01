import EStyleSheet from 'react-native-extended-stylesheet';
import { Colors, Fonts } from '../../../theme';

const styles = EStyleSheet.create({
  restaurantColumn: {
    paddingHorizontal: '0rem',
    marginBottom: '24rem',
    paddingBottom: '19rem',
    backgroundColor:'#fff'
  },
  restaurantColumnBgGradiant: {
    width: '100% - 56rem',
    position: 'absolute',
    left: 0,
    top: '70rem',
    bottom: 0,
    borderRadius: '24rem'
  },
  restaurantImg: {
    width: '100%',
    height: '160rem',
    borderTopLeftRadius: '8rem',
    borderBottomLeftRadius: '24rem',
    borderBottomRightRadius: '8rem',
    borderTopRightRadius: '24rem'
  },
  ratingStarRow: {
    backgroundColor: '#fff',
    borderRadius: '50rem',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: '9rem',
    paddingRight: '9rem',
    paddingBottom: '7rem',
    paddingLeft: '8rem',
    shadowColor: Colors.green,
    shadowOffset: {
      width: 0,
      height: '5.85rem'
    },
    shadowOpacity: 0.2,
    shadowRadius: 23,
    elevation: 23
  },
  totalRatingText: {
    lineHeight: '12rem',
    color: Colors.black,
    marginRight: '4rem',
    fontSize: Fonts.size.tiny,
    ...Fonts.style.extraBoldText
  },
  totalReviewText: {
    fontSize: '8rem',
    lineHeight: '8rem',
    color: Colors.black,
    opacity: 0.5,
    marginLeft: '2rem',
    ...Fonts.style.normalText
  },
  ratingStarImg: {
    width: '10rem',
    height: '10rem'
  },
  ratingLikeBtnRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '14rem',
    marginTop: '-14rem',
    marginBottom: '19rem'
  },
  likeBtn: {
    marginLeft: 'auto',
    width: '28rem',
    height: '28rem',
    backgroundColor: Colors.green,
    borderRadius: '50rem',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.green,
    shadowOffset: {
      width: 0,
      height: '7rem'
    },
    shadowOpacity: 0.4,
    shadowRadius: 15,
    elevation: 15
  },
  likeWhiteImg: {
    width: '15.09rem',
    height: '13.79rem'
  },
  restaurantName: {
    fontSize: '15rem',
    lineHeight: '15rem',
    fontWeight: '600',
    color: Colors.black,
    marginBottom: '6rem',
    ...Fonts.style.extraBoldText
  },
  restaurantColumnOtherDetailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: '-8rem'
  },
  restaurantOtherDetailColumn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: '8rem'
  },
  restaurantOtherDetailImg: {
    width: '13rem',
    height: '13rem',
    marginRight: '6.22rem'
  },
  restaurantOtherDetailText: {
    lineHeight: '14rem',
    color: Colors.lightBlack,
    fontSize: Fonts.size.tiny,
    ...Fonts.style.normalText
  },
  restaurantLabelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: '-4rem',
    marginTop: '10rem'
  },
  restaurantLabelText: {
    paddingBottom: '4rem',
    paddingRight: '5rem',
    paddingTop: '6rem',
    paddingLeft: '8rem',
    backgroundColor: Colors.white,
    borderRadius: '5rem',
    marginHorizontal: '4rem',
    overflow: 'hidden',
    color: Colors.lightBlack,
    lineHeight: '12rem',
    letterSpacing: '-0.02rem',
    fontSize: Fonts.size.tiny,
    ...Fonts.style.normalText
  },
  lastColumn: {
    marginBottom: 0
  }
});

export default styles;
