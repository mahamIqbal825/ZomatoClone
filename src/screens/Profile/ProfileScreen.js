import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import { Container, Content, Header } from '../../components';
import { Images } from '../../theme';
import { profileList } from '../../assets/data';
import styles from './Styles/ProfileStyle';
import { useDispatch, useSelector } from 'react-redux'
import { getUserInfo } from '../../utils/StorageService'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ProfileScreen({ navigation }) {

  const [customer, setCustomer] = useState({})
  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    const userDetails = await getUserInfo()
    setCustomer(userDetails)
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.userProfileListItem}
      key={item.id}
      onPress={() => navigation.navigate(item.navigation)}>
      <Image
        source={item.image}
        resizeMode="contain"
        style={styles.userProfileListIcon}
      />
      <View style={styles.userProfileListName}>
        <Text style={styles.userProfileListText}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  const { customer_mobile, customer_name } = customer

  return (

    <SafeAreaView style={{ flex: 1, backgroundColor: '#006653' }}>

      <View style={{ backgroundColor: '#006653', alignItems: 'center', justifyContent: 'center', minHeight: '20%' }}>
        <Ionicons name="person-circle-outline" size={80} color={'#fff'} />
        <View>
          <Text style={{ color: '#fff', textAlign: 'center', fontWeight: '600', fontSize: 16, marginBottom: 5 }}>{customer_name}</Text>
          <Text style={{ color: '#fff', textAlign: 'center', fontWeight: '600', fontSize: 14, marginBottom: 15 }}>{customer_mobile}</Text>
        </View>
      </View>
      
      <View style={{ backgroundColor: '#fff', flex: 1, padding: 25 }}>
        <FlatList
          data={profileList}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
}
