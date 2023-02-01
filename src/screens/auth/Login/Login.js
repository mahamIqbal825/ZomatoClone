import React from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';

//style imports
import styles from './Style';
import Theme from '../../../utils/Theme';

//components
import Separator from '../../../components/Login/Separator';
import InputFields from '../../../components/Login/InputFields';
import Button from '../../../components/Login/Button';

function Login(props) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/food.jpeg')}
        style={styles.image}
      />
      <Text style={styles.heading}>
        India's #1 Food Delivery and Dining App
      </Text>
      <Separator marginTop={Theme.hp(3)} />
      <InputFields marginTop={Theme.hp(5)} placeholder={'mobile number'} />
      <Button marginTop={Theme.hp(5)} text={'Login'} />
    </View>
  );
}

export default Login;
