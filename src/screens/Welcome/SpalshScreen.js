import React, { useEffect, useState } from "react";
import { View, Image } from "react-native";
import * as Progress from "react-native-progress";
import { Images } from "../../theme";
import { useDispatch } from "react-redux";
import { getToken } from "../../utils/StorageService";
import { setTokenAction } from "../../redux/actions/UserAction";
import styles from "./Styles/SplashStyle";

function SplshScreen({ navigation }) {
  const [loading, setLoading] = useState(0.1);
  const dispatch = useDispatch();

  useEffect(() => {
    const _interval = setInterval(() => setLoading(loading + 1), 250);
    return () => clearInterval(_interval);
  }, []);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const data = await getToken();
    setTimeout(() => {
      if (data) {
        dispatch(setTokenAction(data));
        navigation.navigate("Home");
      } else {
        navigation.navigate("Login");
      }
    }, 700);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.innerContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={Images.Logo}
            resizeMode="contain"
            style={styles.image}
          />
        </View>
        <Progress.Bar
          progress={loading}
          width={200}
          color={"#006653"}
          min={0}
          max={100}
        />
      </View>
    </View>
  );
}
export default React.memo(SplshScreen, () => true);
