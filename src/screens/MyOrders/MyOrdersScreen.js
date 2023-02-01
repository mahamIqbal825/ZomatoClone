import React from 'react';
import { Header } from '../../components';
import { SafeAreaView, View } from 'react-native';
import MyOrderHistory from '../../components/OrderHistory/index'


function MyOrdersScreen({ navigation }) {

  return (
    <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
      <Header
        hasBackBtn
        title="My Orders"
        onBackPress={() => navigation.goBack()} />

      <View style={{ flex: 1, padding: 15, backgroundColor: '#f5f5f5' }}>
        <MyOrderHistory navigation={navigation} />
      </View>

    </SafeAreaView>
  );
}

export default MyOrdersScreen;
