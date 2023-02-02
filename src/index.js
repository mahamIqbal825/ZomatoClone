import React, { useCallback, useEffect } from "react";
import { View, StatusBar, Dimensions, LogBox, Linking } from "react-native";
import { Provider } from "react-redux";
import EStyleSheet from "react-native-extended-stylesheet";
import { NavigationContainer } from "@react-navigation/native";
import store from "./redux/store";
import AppNavigation from "./navigation/AppNavigation";
import { navigationRef, isReadyRef } from "./navigation/ReduxNavigation";
import Styles from "./theme/AppStyles";
import { initStripe, useStripe } from "@stripe/stripe-react-native";

// LogBox.ignoreAllLogs();

const { width } = Dimensions.get("window");
EStyleSheet.build({ $rem: width / 375 });

const App = () => {
  const { handleURLCallback } = useStripe();

  const handleDeepLink = useCallback(
    async (url) => {
      if (url) {
        const stripeHandled = await handleURLCallback(url);
        if (stripeHandled) {
        } else {
        }
      }
    },
    [handleURLCallback]
  );

  useEffect(() => {
    const getUrlAsync = async () => {
      const initialUrl = await Linking.getInitialURL();
      handleDeepLink(initialUrl);
    };
    getUrlAsync();
    const deepLinkListener = Linking.addEventListener("url", (event) => {
      handleDeepLink(event.url);
    });

    return () => deepLinkListener.remove();
  }, [handleDeepLink]);

  useEffect(() => {
    initStripe({
      publishableKey:
        "pk_test_51JyCUYBT956xZwz7Ec3nko4zl0OiaMgmPcDRhTbzAHdOuIhoV6IuYn2xitdXOtnTPDDpdrA8Eg0PlgoEBzIqIrZQ00FxfbIjwi",
      merchantIdentifier: "merchant.identifier",
      urlScheme: "your-url-scheme",
    });
  }, []);

  return (
    <View style={Styles.rootContainer}>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor="transparent"
      />

      <Provider store={store}>
        <NavigationContainer
          ref={navigationRef}
          onReady={() => {
            isReadyRef.current = true;
          }}
        >
          <AppNavigation />
        </NavigationContainer>
      </Provider>
    </View>
  );
};

export default App;
