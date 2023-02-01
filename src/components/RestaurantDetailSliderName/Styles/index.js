import EStyleSheet from 'react-native-extended-stylesheet';
import { Colors, Fonts } from '../../../theme';

const styles = EStyleSheet.create({
  restaurantDetailSlider: {
    marginBottom: '19rem'
  },
  restaurantName: {
    lineHeight: '24rem',
    color: Colors.green,
    marginBottom: '9rem',
    fontSize: Fonts.size.h3,
    ...Fonts.style.blackText
  },
  restaurantLocationText: {
    fontSize: '15rem',
    lineHeight: '15rem',
    color: Colors.lightBlack,
    marginBottom: '13rem',
    ...Fonts.style.normalText
  },
  restaurantServiceReviewsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: '-5rem'
  },
  restaurantServiceReviewsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: '4rem'
  },
  restaurantServiceImg: {
    width: '13rem',
    height: '12rem'
  },
  restaurantServiceText: {
    marginLeft: '6.22rem',
    lineHeight: '12rem',
    color: Colors.lightBlack,
    fontSize: Fonts.size.tiny,
    ...Fonts.style.normalText
  },
  restaurantRetingText: {
    lineHeight: '14rem',
    color: Colors.black,
    marginRight: '4rem',
    fontSize: Fonts.size.medium,
    ...Fonts.style.blackText
  },
  restaurantRatingStarImg: {
    width: '10rem',
    height: '10rem',
    marginRight: '2rem'
  },
  restaurantTotalReviewText: {
    fontSize: '10rem',
    lineHeight: '10rem',
    color: Colors.lightBlack,
    ...Fonts.style.normalText
  }
});

export default styles;
