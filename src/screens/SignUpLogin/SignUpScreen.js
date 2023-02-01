import React, {useState} from 'react';
import { Image, View, Text, Alert, Keyboard } from 'react-native';
import { Container, Content } from '../../components';
import TextInputContent from '../../components/TextInputContent';
import CommonBtn from '../../components/CommonBtn';
import { Images } from '../../theme';
import { API_SERVICE } from '../../utils/API'
import styles from './Styles';
import { setToken } from '../../utils/StorageService'
import { useDispatch } from 'react-redux';
import { setTokenAction } from '../../redux/actions/UserAction';

function SignUpScreen({ navigation }) {


  const [ name, setName ]= useState('')
  const [ mobile, setMobile ]= useState('')
  const [ password, setPassword ]= useState('')
  
  const dispatch = useDispatch();

  const onPress = async () => {
      Keyboard.dismiss();
      if(name === ''){
        Alert.alert('Please enter your full name')
        return
      }
      if(mobile === ''){
        Alert.alert('Please enter mobile number')
        return 
      }
      if(password === ''){
        Alert.alert('Please enter your password')
        return 
      }
      const payload = {user_name: name, user_mobile: mobile, user_password: password}
    
      try{
          const result = await API_SERVICE('customer/register', payload)
          const { status, data } = result
          if( status === 1){
            dispatch(setTokenAction(data))
            await setToken(data)
            console.log(data);
            navigation.navigate('Home')
          }
        }catch(e){
          console.log(e);
        }
   }


  return (
    <>
      <Container gradiantBg gradiantBgImg statusBarColor>
        <Content contentContainerStyle={styles.container}>
          <Image
            source={Images.Logo}
            resizeMode="contain"
            style={styles.logo}
          />
          <View style={styles.inputContainer}>
            <Text style={styles.heading}>Sign up</Text>
            <View style={styles.inputContent}>
              {/* <TextInputContent
                normalInput
                placeholder="05XXXXXXXX"
                type="phone-pad"
                leftInputIcon={Images.attherateIcon}
              /> */}
              <TextInputContent
                value={name}
                onChangeText={(t)=> setName(t)}
                normalInput
                placeholder="Full name"
                type="default"
                leftInputIcon={Images.userLineIcon}
              />
              <TextInputContent
                value={mobile}
                onChangeText={(t)=> setMobile(t)}
                normalInput
                placeholder="Mobile"
                type="phone-pad"
                leftInputIcon={Images.CallLineIcon}
              />
               <TextInputContent
                value={password}
                onChangeText={(t)=> setPassword(t)}
                passwordInput
                placeholder="Password"
                type="default"
                leftInputIcon={Images.lockLineIcon}
                textInputRowStyle={styles.loginPasswordInput}
              />
            </View>
            <Text style={styles.peragraph}>
              By signing up, you’re agree to our {''}
              <Text style={styles.greenText}>
                Terms and Conditions
              </Text> and {''}
              <Text style={styles.greenText}>Private Policy</Text>
            </Text>
            <CommonBtn
              normalBtn
              btnText="Get Started"
              commonBtnStyle={styles.signUpStartBtn}
              onPress={onPress}
            />
            <Text style={styles.signUpLoginBottomText}>
              Joined us before?{' '}
              <Text
                style={styles.greenText}
                onPress={() => navigation.navigate('MapAddress')}>
                Login
              </Text>
            </Text>
          </View>
        </Content>
      </Container>
    </>
  );
}

export default SignUpScreen;
