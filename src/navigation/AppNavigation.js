import React from "react";
import { Text } from "react-native";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import HomeScreen from "../screens/Home/HomeScreen";
// import OrderScreen from "../screens/Order/OrderScreen";
// import ProfileScreen from "../screens/Profile/ProfileScreen";
import SplshScreen from "../screens/Welcome/SpalshScreen";
// import WelcomeScreen from "../screens/Welcome/WelcomeScreen";
import SignUpScreen from "../screens/SignUpLogin/SignUpScreen";
import LoginScreen from "../screens/SignUpLogin/LoginScreen";
// import SignUpOtpScreen from "../screens/SignUpLogin/SignUpOtpScreen";
// import SignUpOtpVerifyedScreen from "../screens/SignUpLogin/SignUpOtpVerifyedScreen";
import ForgotPasswordScreen from "../screens/SignUpLogin/ForgotPasswordScreen";
// import ForgotVerifyedScreen from "../screens/SignUpLogin/ForgotVerifyedScreen";
// import ForgotOtpScreen from "../screens/SignUpLogin/ForgotOtpScreen";
// import ResetPasswordScreen from "../screens/SignUpLogin/ResetPasswordScreen";
// import ProfileEditScreen from "../screens/Profile/ProfileEditScreen";
// import RecommendedFoodScreen from "../screens/RecommendedFood/RecommendedFoodScreen";
// import RecommendedFoodRestaurantScreen from "../screens/RecommendedFoodRestaurant/RecommendedFoodRestaurantScreen";
// import RestaurantDetailsScreen from "../screens/RestaurantDetails/RestaurantDetailsScreen";
// import DeliveryAddressScreen from "../screens/DeliveryAddress/DeliveryAddressScreen";
// import AddAddressScreen from "../screens/DeliveryAddress/AddAddressScreen";
// import PaymentMethodScreen from "../screens/PaymentMethod/PaymentMethodScreen";
// import ProfilePaymentMethodScreen from "../screens/PaymentMethod/ProfilePaymentMethodScreen";
// import SuccessPaymentScreen from "../screens/SuccessPayment/SuccessPaymentScreen";
// import WishlistScreen from "../screens/Wishlist/WishlistScreen";
// import MyOrdersScreen from "../screens/MyOrders/MyOrdersScreen";
// import OrderSummaryScreen from "../screens/OrderSummary/OrderSummaryScreen";
// import RepeatOrderRestaurantDetailsScreen from "../screens/RepeatOrderRestaurantDetails/RepeatOrderRestaurantDetailsScreen";
// import PhotoDetailOneScreen from "../screens/PhotoDetail/PhotoDetailOneScreen";
// import PhotoDetailTwoScreen from "../screens/PhotoDetail/PhotoDetailTwoScreen";
// import NotificationScreen from "../screens/Notification/NotificationScreen";
// import YourRatingScreen from "../screens/YourRating/YourRatingScreen";
// import HelpFaqsScreen from "../screens/HelpFaqs/HelpFaqsScreen";
// import { Images, Colors } from "../theme";
// import styles from "./Styles";

// import { BottomFabBar } from "rn-wave-bottom-bar";
import MapAddress from "../components/LocationModal/map";
// import Ionicons from "react-native-vector-icons/Ionicons";
// import OrderConfirmed from "../screens/OrderCofirmed/index";
// import SavedAddress from "../screens/SavedAddress/index";

// const Tab = createBottomTabNavigator();

// const DashboardNavigation = () => {
//   return (
//     <Tab.Navigator
//       shifting={true}
//       screenOptions={{
//         tabBarActiveTintColor: "#FFAB00",
//         tabBarActiveBackgroundColor: "#006653",
//         //tabBarInactiveBackgroundColor: '#006653'
//       }}
//     >
//       <Tab.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{
//           tabBarIcon: ({ focused }) => (
//             <Ionicons
//               name={focused ? "home" : "home-outline"}
//               size={30}
//               color={focused ? "#006653" : "#959FA8"}
//             />
//           ),
//           tabBarLabel: ({ focused }) => (
//             <Text
//               style={{
//                 color: focused ? "#006653" : "#959FA8",
//                 fontSize: 12,
//                 fontFamily: "SofiaPro",
//               }}
//             >
//               Home
//             </Text>
//           ),
//         }}
//       />

//       <Tab.Screen
//         name="Favorites"
//         component={WishlistScreen}
//         options={{
//           tabBarIcon: ({ focused }) => (
//             <Ionicons
//               name={focused ? "heart" : "heart-outline"}
//               size={30}
//               color={focused ? "#006653" : "#959FA8"}
//             />
//           ),
//           tabBarLabel: ({ focused }) => (
//             <Text
//               style={{
//                 color: focused ? "#006653" : "#959FA8",
//                 fontSize: 12,
//                 fontFamily: "SofiaPro",
//               }}
//             >
//               Favorites
//             </Text>
//           ),
//         }}
//       />

//       <Tab.Screen
//         name="Profile"
//         component={ProfileScreen}
//         options={{
//           tabBarIcon: ({ focused }) => (
//             <Ionicons
//               name={focused ? "person-circle" : "person-circle-outline"}
//               size={30}
//               color={focused ? "#006653" : "#959FA8"}
//             />
//           ),
//           tabBarLabel: ({ focused }) => (
//             <Text
//               style={{
//                 color: focused ? "#006653" : "#959FA8",
//                 fontSize: 12,
//                 fontFamily: "SofiaPro",
//               }}
//             >
//               Profile
//             </Text>
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Spalsh" component={SplshScreen} />
      {/* <Stack.Screen name="Welcome" component={WelcomeScreen} />  */}
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen
        name="MapAddress"
        component={MapAddress}
        options={{
          headerShown: false,
          animationEnabled: true,
          presentation: "modal",
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
        }}
      />
      {/* <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />

      <Stack.Screen name="SignUpOtp" component={SignUpOtpScreen} />
      <Stack.Screen
        name="SignUpOtpVerifyed"
        component={SignUpOtpVerifyedScreen}
      />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="ForgotOtp" component={ForgotOtpScreen} />
      <Stack.Screen name="ForgotOtpVerifyed" component={ForgotVerifyedScreen} />
      <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
      <Stack.Screen name="Home" component={DashboardNavigation} />
      <Stack.Screen name="Order" component={OrderScreen} />
      <Stack.Screen name="Wishlist" component={WishlistScreen} />
      <Stack.Screen name="ProfileEdit" component={ProfileEditScreen} />
      <Stack.Screen name="RecommendedFood" component={RecommendedFoodScreen} />

      <Stack.Screen
        name="MapAddress"
        component={MapAddress}
        options={{
          headerShown: false,
          animationEnabled: true,
          presentation: "modal",
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
        }}
      />

      <Stack.Screen
        name="SavedAddress"
        component={SavedAddress}
        options={{
          headerShown: false,
          animationEnabled: true,
          presentation: "modal",
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
        }}
      />

      <Stack.Screen
        name="OrderConfirmed"
        component={OrderConfirmed}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="RecommendedFoodRestaurant"
        component={RecommendedFoodRestaurantScreen}
      />
      <Stack.Screen
        name="RestaurantDetails"
        component={RestaurantDetailsScreen}
      />
      <Stack.Screen name="DeliveryAddress" component={DeliveryAddressScreen} />
      <Stack.Screen name="AddAddress" component={AddAddressScreen} />
      <Stack.Screen name="PaymentMethod" component={PaymentMethodScreen} />
      <Stack.Screen
        name="ProfilePaymentMethod"
        component={ProfilePaymentMethodScreen}
      />
      <Stack.Screen name="SuccessPayment" component={SuccessPaymentScreen} />
      <Stack.Screen name="MyOrders" component={MyOrdersScreen} />
      <Stack.Screen name="OrderSummary" component={OrderSummaryScreen} />
      <Stack.Screen
        name="RepeatOrderRestaurantDetails"
        component={RepeatOrderRestaurantDetailsScreen}
      />
      <Stack.Screen name="PhotoDetailOne" component={PhotoDetailOneScreen} />
      <Stack.Screen name="PhotoDetailTwo" component={PhotoDetailTwoScreen} />
      <Stack.Screen name="Notification" component={NotificationScreen} />
      <Stack.Screen name="YourRating" component={YourRatingScreen} />
      <Stack.Screen name="HelpFaqs" component={HelpFaqsScreen} /> */}
    </Stack.Navigator>
  );
};

export default AppNavigation;
