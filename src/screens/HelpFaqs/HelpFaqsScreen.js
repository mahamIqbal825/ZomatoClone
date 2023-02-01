import * as React from 'react';
import { useState } from 'react';
import { FlatList, Text, Image, TouchableOpacity, View } from 'react-native';
import { Container, Content, Header } from '../../components';
import { helpFaqList } from '../../assets/data';
import styles from './Styles/HelpFaqsStyle';

function HelpFaqsScreen({ navigation }) {
  const [ratingStart, setRatingStart] = useState(true);
  const renderItem = ({ item }) => (
    <View style={styles.helpFaqList} key={item.id}>
      <TouchableOpacity
        style={styles.helpFaqIconTextRow}
        onPress={() => setRatingStart(item.id)}>
        <Text style={styles.helpFaqName}>{item.helpFaqName}</Text>
        <Image
          source={item.bottomArrowIcon}
          resizeMode="contain"
          style={styles.bottomArrowIcon}
        />
      </TouchableOpacity>
      {ratingStart === item.id && (
        <Text numberOfLines={3} style={styles.helpFaqDiscription}>
          {item.helpFaqDiscription}
        </Text>
      )}
    </View>
  );
  return (
    <Container statusBarColorWhite conatinerStyle={styles.conatinerStyle}>
      <Header
        hasBackBtn
        title="Helps & FAQs"
        onBackPress={() => navigation.goBack()}
      />
      <Content contentContainerStyle={styles.container}>
        <FlatList
          data={helpFaqList}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </Content>
    </Container>
  );
}

export default HelpFaqsScreen;
