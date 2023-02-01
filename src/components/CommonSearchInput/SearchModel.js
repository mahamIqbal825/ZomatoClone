import {
  View,
  Text,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity
} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import styles from './Styles/index';
import { Colors, Images } from '../../theme';

interface ModelIf {
  isSearchVisible: boolean;
  toggleSearch: () => void;
  placeHolderText: string;
  searchRowStyle: any;
}

export default function SearchModel(props: ModelIf) {
  const { isSearchVisible, toggleSearch } = props;
  const DATA = [
    {
      id: '1',
      title: 'Pizza'
    },
    {
      id: '2',
      title: 'Desserts'
    },
    {
      id: '3',
      title: 'Italian'
    }
  ];
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.searchItem}>
      <Text style={styles.itemTitle}>{item.title}</Text>
    </TouchableOpacity>
  );
  return (
    <Modal isVisible={isSearchVisible}>
      <View style={styles.bgGradiant}>
        <View style={[styles.searchInputRow, styles.searchbarContainer]}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => toggleSearch()}>
            <Image
              source={Images.BackArrow}
              resizeMode="contain"
              style={styles.backIcon}
            />
          </TouchableOpacity>
          <TextInput
            autoFocus={false}
            placeholder="Search restaurants or foods"
            placeholderTextColor={Colors.searchGreenPlaceholder}
            style={[styles.modelSearchInput]}
          />
          <TouchableOpacity style={styles.filterButton}>
            <Image
              source={Images.FilterIcon}
              resizeMode="contain"
              style={styles.backIcon}
            />
          </TouchableOpacity>
        </View>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </Modal>
  );
}
