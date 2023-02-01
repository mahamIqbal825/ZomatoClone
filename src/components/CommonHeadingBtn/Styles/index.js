import EStyleSheet from 'react-native-extended-stylesheet';
import { Colors, Fonts } from '../../../theme';

const styles = EStyleSheet.create({
  headdingBtnRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '10rem'
  },
  headingText: {
    lineHeight: '18rem',
    color: Colors.black,
    fontSize: Fonts.size.h4,
    ...Fonts.style.normalText
  },
  headingBtn: {
    marginLeft: 'auto'
  },
  headingBtnText: {
    lineHeight: '14rem',
    color: Colors.green,
    fontSize: Fonts.size.medium,
    ...Fonts.style.normalText
  }
});

export default styles;
