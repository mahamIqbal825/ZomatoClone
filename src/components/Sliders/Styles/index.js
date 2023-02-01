import EStyleSheet from 'react-native-extended-stylesheet';
import { Colors, Fonts } from '../../../theme';

const styles = EStyleSheet.create({
  recommandedFoodItem: {
    width: '95rem',
    padding: '8rem',
    paddingTop: 0,
    marginHorizontal: '8rem'
  },
  recommandedFoodImgStyle: {
    width: '69rem',
    height: '69rem',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '16rem'
  },
  recommandedBgGradiant: {
    width: '95rem',
    height: '72rem',
    position: 'absolute',
    left: 0,
    bottom: 0,
    borderRadius: '8rem'
  },
  recommandedFoodText: {
    textAlign: 'center',
    lineHeight: '14rem',
    color: Colors.black,
    fontSize: Fonts.size.medium,
    ...Fonts.style.normalText
  },
  repeatFoodImgStyle: {
    width: '106rem',
    height: '98rem',
    marginBottom: '27rem',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  repeatOrderBgGradiant: {
    width: '152rem',
    height: '160rem',
    position: 'absolute',
    left: 0,
    bottom: 0,
    borderRadius: '16rem'
  },
  repeatFoodHeadingText: {
    fontSize: '15rem',
    lineHeight: '15rem',
    fontWeight: '600',
    color: Colors.black,
    marginBottom: '4rem',
    ...Fonts.style.blackText
  },
  repeatFoodParegraphText: {
    color: Colors.lighterGray,
    lineHeight: '12rem',
    marginBottom: '9rem',
    fontSize: Fonts.size.tiny,
    ...Fonts.style.normalText
  },
  repeatFoodPriceText: {
    fontSize: '15rem',
    lineHeight: '15rem',
    fontWeight: '600',
    color: Colors.green,
    ...Fonts.style.extraBoldText
  },
  repeatOrderList: {
    width: '152rem',
    paddingLeft: '13rem',
    paddingRight: '14rem',
    paddingBottom: '18rem',
    marginHorizontal: '8rem'
  },
  paginationActiveDot: {
    backgroundColor: Colors.green,
    width: '4rem',
    height: '4rem'
  },
  carouselSliderPagination: {
    marginTop: '-16rem',
    marginBottom: '-27rem'
  },
  dotContainerStyle: {
    marginHorizontal: '2rem'
  },
  offerSlideImg: {
    width: '100%',
    height: '180rem',
    borderRadius: '8rem'
  }
});

export default styles;
