import * as React from 'react';
import { TextInput, Image, View, TouchableWithoutFeedback } from 'react-native';
import { Images } from '../../theme';
import SearchModel from './SearchModel';
import styles from './Styles/index';

function CommonSearchInput(props) {
  const [isSearchVisible, setSearchVisible] = React.useState(false);
  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
  };
  return (
    <>
      <TouchableWithoutFeedback onPress={toggleSearch}>
        <View style={[styles.searchInputRow, props.searchRowStyle]}>
          <TextInput
            pointerEvents="none"
            editable={false}
            placeholder="Search restaurants or foods"
            placeholderTextColor={props.placeHolderText}
            style={[styles.commonSearchInput, props.searchInputStyle]}
          />
          <Image
            source={
              props.greenInput
                ? Images.LighterGreenSearch
                : Images.LighterYellowSearch
            }
            resizeMode="contain"
            style={styles.searchIcon}
          />
        </View>
      </TouchableWithoutFeedback>
      <SearchModel
        isSearchVisible={isSearchVisible}
        toggleSearch={toggleSearch}
        placeHolderText={props.placeHolderText}
        searchRowStyle={props.searchRowStyle}
      />
    </>
  );
}

export default CommonSearchInput;
