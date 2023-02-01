import * as React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { Container, Content, Header } from '../../components';
import styles from './Styles/DeliveryAddressStyle';
import CommonBtn from '../../components/CommonBtn';
import { deliveryAddressListData } from '../../assets/data';

function DeliveryAddressScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <>
      <TouchableOpacity style={styles.deliveryAddressContent}>
        <View style={styles.addressTypeDeleteBtn}>
          <Image
            source={item.addressTypeImg}
            resizeMode="contain"
            style={styles.addressImg}
          />
          <Text style={styles.addressTypeText}>{item.addressType}</Text>
          <Text style={styles.addressDeleteText}>{item.deleteText}</Text>
        </View>
        <Text style={styles.addressText}>{item.address}</Text>
      </TouchableOpacity>
    </>
  );
  return (
    <Container statusBarColorWhite conatinerStyle={styles.conatinerStyle}>
      <Header
        hasBackBtn
        title="Delivery Address"
        onBackPress={() => navigation.goBack()}
      />
      <Content contentContainerStyle={styles.container}>
        <View style={styles.addressList}>
          <FlatList
            bounces={false}
            data={deliveryAddressListData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
        <CommonBtn
          normalBtn
          commonBtnStyle={styles.addAddressBtn}
          btnText="Add Address"
          onPress={() => navigation.navigate('AddAddress')}
        />
      </Content>
    </Container>
  );
}

export default DeliveryAddressScreen;
