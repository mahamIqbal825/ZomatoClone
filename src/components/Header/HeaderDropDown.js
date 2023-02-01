import React from 'react';
import { View, Image } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Images } from '../../theme';
import styles from './Styles';

function HeaderDropDown() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(null);
  const [items, setItems] = React.useState([
    {
      label: '69 Hettinger Hill Apt. MI 6969',
      value: '69 Hettinger Hill Apt. MI 6969'
    },
    {
      label: '59 Hettinger Hill Apt. MI 5959',
      value: '59 Hettinger Hill Apt. MI 5959'
    }
  ]);
  return (
    <View style={styles.dropdownContent}>
      <Image
        source={Images.ModalLocation}
        resizeMode="contain"
        style={styles.dropdownLocationIcon}
      />
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        style={styles.dropDownStyle}
        listItemLabelStyle={styles.listItemLabelStyle}
        placeholderStyle={styles.placeholderStyle}
        textStyle={styles.textStyle}
        dropDownContainerStyle={styles.dropDownContainerStyle}
        showTickIcon={false}
        modalTitle="Select Location"
        listMode="MODAL"
        modalProps={{
          animationType: 'fade'
        }}
        placeholder="Select Location"
        ArrowUpIconComponent={() => (
          <Image
            source={Images.UpArrow}
            resizeMode="contain"
            style={styles.dropDownArrowIcon}
          />
        )}
        ArrowDownIconComponent={() => (
          <Image
            source={Images.DownArrow}
            resizeMode="contain"
            style={styles.dropDownArrowIcon}
          />
        )}
      />
    </View>
  );
}

export default HeaderDropDown;
