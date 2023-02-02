import * as React from "react";
import { Image, View, Text } from "react-native";
import { Container, Content } from "../../components";
import CommonBtn from "../../components/CommonBtn";
import TextInputContent from "../../components/TextInputContent";
import { Images } from "../../theme";
import styles from "./Styles";

function ForgotPasswordScreen({ navigation }) {
  return (
    <>
      <Container gradiantBg gradiantBgImg safeAreaView={false}>
        <Content contentContainerStyle={styles.container}>
          <Image
            source={Images.Logo}
            resizeMode="contain"
            style={styles.logo}
          />
          <View style={styles.inputContainer}>
            <Text style={styles.heading}>
              Forgot{"\n"}
              Password?
            </Text>
            <View style={styles.inputContent}>
              <Text style={styles.otpPeragraph}>
                An 4 digit code has been sent to{"\n"}+1 (783) 0986 8786
              </Text>
              <TextInputContent
                normalInput
                placeholder="Mobile"
                type="phone-pad"
                leftInputIcon={Images.CallLineIcon}
              />
            </View>
            <CommonBtn
              normalBtn
              btnText="Submit"
              onPress={() => navigation.navigate("ForgotOtp")}
            />
          </View>
        </Content>
      </Container>
    </>
  );
}

export default ForgotPasswordScreen;
