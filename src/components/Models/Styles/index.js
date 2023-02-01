import EStyleSheet from 'react-native-extended-stylesheet';
import { Colors, Fonts } from '../../../theme';

const styles = EStyleSheet.create({

  container: {
    flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#00665333', paddingTop: 15, paddingBottom: 15
  },
  col1: { width: '60%', justifyContent: 'flex-start', paddingTop: 15 },
  col2: { width: '40%', position: 'relative', justifyContent: 'center', alignItems: 'center' },
  redtag: { textDecorationLine: 'line-through', textDecorationStyle: 'solid', color: '#87171A' },
  veg: { position: 'absolute', height: 15, width: 15, end: 15, top: 15 },
  offtag: { position: 'absolute', top: 15, start: 10},
  buttonarea: { 
    height: 35, 
    borderColor: '#006653', 
    borderWidth: 1, borderRadius: 10, justifyContent: 'center', alignItems: 'center', flex:1,
  },
  addCartFoodHeadingText: {
    lineHeight: '18rem',
    color: Colors.black,
    marginBottom: '4rem',
    fontSize: Fonts.size.medium,
    ...Fonts.style.blackText
  },
  addCartFoodParegraphText: {
    color: Colors.lightBlack,
    fontSize: '12rem',
    lineHeight: '14rem',
    ...Fonts.style.normalText
  },
  addCartFoodPriceText: {
    lineHeight: '14rem',
    color: Colors.green,
    fontSize: Fonts.size.medium,
    ...Fonts.style.blackText
  },
  addCartFoodPrice: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '9rem'
  },
  likeBtn: {
    width: '22rem',
    height: '22rem',
    borderRadius: '50rem',
    backgroundColor: Colors.green,
    marginLeft: 'auto',
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
  likeBtnImg: {
    width: '10.94rem',
    height: '10rem'
  },
  likeShareBtnRow: {
    marginTop: 0,
    marginBottom:10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginHorizontal: '-10rem',
    width:'100%'
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
  },
  restaurantServiceImg: {
    width: '20rem',
    height: '20rem'
  },
  restaurantServiceReviewsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: '4rem'
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
