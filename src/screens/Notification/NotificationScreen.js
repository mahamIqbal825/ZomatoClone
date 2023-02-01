import * as React from 'react';
import { TouchableOpacity, FlatList, View, Text, Image } from 'react-native';
import { Container, Content, Header } from '../../components';
import styles from './Styles/NotificationStyle';
import { notificationList } from '../../assets/data';

function NotificationScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.notificationList, { borderColor: item.borderColor }]}
      key={item.id}>
      <View style={styles.notificationIconTextRow}>
        <Image
          source={item.notificationIcon}
          resizeMode="contain"
          style={styles.notificationIcon}
        />
        <Text style={styles.notificationRestaurantName}>
          {item.restaurantName}
        </Text>
        <Text style={styles.notificationTime}>{' '} {item.notificationTime}</Text>
      </View>
      <Text numberOfLines={3} style={styles.notificationDiscription}>
        {item.notificationDiscription}
      </Text>
    </TouchableOpacity>
  );
  return (
    <Container statusBarColorWhite conatinerStyle={styles.conatinerStyle}>
      <Header
        hasBackBtn
        title="Notifications"
        onBackPress={() => navigation.goBack()}
      />
      <Content contentContainerStyle={styles.container}>
        <FlatList
          data={notificationList}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </Content>
    </Container>
  );
}

export default NotificationScreen;
