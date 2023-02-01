import AsyncStorage from '@react-native-async-storage/async-storage';
import jwt_decode from 'jwt-decode'

export async function setToken(accessToken){
  await AsyncStorage.setItem('ZAINZI_USERS_TOKEN', accessToken);
}

export async function getToken(){
  return await AsyncStorage.getItem('ZAINZI_USERS_TOKEN');
}

export async function getUserInfo(){
  const token = await AsyncStorage.getItem('ZAINZI_USERS_TOKEN');
  return jwt_decode(token);

}
