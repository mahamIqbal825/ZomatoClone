import EStyleSheet from "react-native-extended-stylesheet";
import { Colors, Fonts } from "../../../theme";
import { isIphoneX } from "../../../libs/Utils";
// import { Dimensions } from 'react-native';

// const windowHeight = Dimensions.get('window').height;

const styles = EStyleSheet.create({
  mainContainer: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  innerContainer: {
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: { maxHeight: 200, maxWidth: 200, marginBottom: 20 },
  image: { height: 200, width: 200 },
});

export default styles;
