import EStyleSheet from 'react-native-extended-stylesheet';
import { Colors, Fonts } from '../../../theme';

const styles = EStyleSheet.create({
  searchInputRow: {
    marginBottom: '24rem',
  },
  commonSearchInput: {
    backgroundColor: Colors.searchInputBg,
    color: Colors.yellow,
    borderRadius: '8rem',
    paddingLeft: '52rem',
    paddingVertical: '15rem',
    paddingRight: '16rem',
    lineHeight: '16rem',
    height: '49rem',
    fontSize: Fonts.size.regular,
    ...Fonts.style.normalText
  },
  searchIcon: {
    width: '16rem',
    height: '16rem',
    position: 'absolute',
    top: '15rem',
    left: '22rem'
  },

  // Search Model
  bgGradiant: {
    // flex: 1,
    height: '95%',
    backgroundColor: 'white',
    borderRadius: '30rem',
    padding: '20rem'
  },
  modelSearchInput: {
    borderRadius: '8rem',
    // paddingLeft: '52rem',
    paddingVertical: '15rem',
    paddingRight: '16rem',
    lineHeight: '16rem',
    height: '49rem',
    fontSize: Fonts.size.regular,
    ...Fonts.style.normalText,
    flex: 2,
    color: Colors.green
  },
  backIcon: {
    width: '16rem',
    height: '16rem',
    tintColor: Colors.green,
    alignSelf: 'center'
  },
  backButton: {
    flex: 0.4,
    justifyContent: 'center'
  },
  filterButton: {
    flex: 0.4,
    justifyContent: 'center'
  },
  searchItem: {
    paddingTop: '25rem',
    paddingBottom: '10rem',
    borderBottomColor: Colors.gray,
    borderBottomWidth: '1rem'
  },
  itemTitle: {
    color: Colors.lighterGray,
    fontSize: Fonts.size.regular,
    ...Fonts.style.normalText
  },
  searchbarContainer: {
    backgroundColor: Colors.lightGreen,
    borderRadius: '10rem',
    flexDirection: 'row'
  }
});

export default styles;
