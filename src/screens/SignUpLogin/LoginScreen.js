import React, { useState, useEffect } from "react";
import { Image, View, Text, Keyboard, Alert } from "react-native";
import { Container, Content } from "../../components";
import TextInputContent from "../../components/TextInputContent";
import CommonBtn from "../../components/CommonBtn";
import { Images } from "../../theme";
import { setToken } from "../../utils/StorageService";
import { useDispatch } from "react-redux";
import { setTokenAction } from "../../redux/actions/UserAction";
import styles from "./Styles";
import { API_SERVICE } from "../../utils/API";

function LoginScreen({ navigation }) {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const onPress = async () => {
    Keyboard.dismiss();

    if (mobile === "") {
      Alert.alert("Please enter mobile number");
      return;
    }
    if (password === "") {
      Alert.alert("Please enter your password");
      return;
    }
    const payload = { mobile, password };
    console.log(payload);
    try {
      const result = await API_SERVICE("customer/login", payload, "POST");
      const { status, data } = result;
      if (status === 1) {
        dispatch(setTokenAction(data));
        await setToken(data);
        navigation.navigate("Home");
      }
    } catch (e) {
      console.log(e);
    }
  };

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
            <Text style={styles.heading}>Login</Text>
            <View style={styles.inputContent}>
              <TextInputContent
                value={mobile}
                onChangeText={(t) => setMobile(t)}
                normalInput
                placeholder="Mobile"
                type="phone-pad"
                leftInputIcon={Images.CallLineIcon}
              />
              <TextInputContent
                value={password}
                onChangeText={(t) => setPassword(t)}
                passwordInput
                placeholder="Password"
                type="default"
                leftInputIcon={Images.lockLineIcon}
                textInputRowStyle={styles.loginPasswordInput}
              />
            </View>
            <Text
              style={[styles.greenText, styles.forgotPasswordText]}
              onPress={() => navigation.navigate("ForgotPassword")}
            >
              Forgot Password?
            </Text>
            <CommonBtn
              normalBtn
              btnText="Get Started"
              commonBtnStyle={styles.signUpStartBtn}
              onPress={onPress}
            />
            {/* <View style={styles.orTextRow}>
              <View style={styles.orTextRowLine} />
              <Text style={styles.orText}>OR</Text>
              <View style={styles.orTextRowLine} />
            </View>
            <CommonBtn
              imageBtn
              btnText="Login with Google"
              btnImg={Images.googleIcon}
              commonBtnStyle={styles.loginGoogleBtn}
              commonBtnTextStyle={styles.loginGoogleTextBtn}
            /> */}
            <Text style={styles.signUpLoginBottomText}>
              New to Logistics?{" "}
              <Text
                style={styles.greenText}
                onPress={() => navigation.navigate("SignUp")}
              >
                Register
              </Text>
            </Text>
          </View>
        </Content>
      </Container>
    </>
  );
}

export default LoginScreen;
