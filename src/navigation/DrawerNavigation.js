import React, { useState } from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import Animated from 'react-native-reanimated';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {
  DrawerContentScrollView,
  DrawerItemList
} from '@react-navigation/drawer';
import { withFancyDrawer } from './withFancyHeader';
import HomeScreen from '../screens/Home/HomeScreen';
import OrderScreen from '../screens/Order/OrderScreen';

export const THEME_COLOR = '#ffffff';

export const AnimatedContext = React.createContext(void 0);

const Drawer = createDrawerNavigator();
import styles from './Styles';
import { Colors, Images } from '../theme';

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} style={styles.drawerContainer}>
      <TouchableOpacity
        style={styles.closeIconBtn}
        onPress={() => props.navigation.toggleDrawer()}>
        <Image
          source={Images.GreenCloseIcon}
          resizeMode="contain"
          style={styles.closeIcon}
        />
      </TouchableOpacity>
      <Text style={styles.drawerTitle}>Categories</Text>
      <DrawerItemList
        inactiveBackgroundColor={'transparent'}
        inactiveTintColor={Colors.lightBlack}
        activeBackgroundColor={'transparent'}
        activeTintColor={Colors.green}
        {...props}
        itemStyle={styles.itemStyle}
        labelStyle={styles.labelStyle}
      />
    </DrawerContentScrollView>
  );
}

function DrawerNavigation() {
  const [animatedValue, setAnimatedValue] = useState(new Animated.Value(0));
  return (
    <AnimatedContext.Provider value={animatedValue}>
      {/* <NavigationContainer independent> */}
      <Drawer.Navigator
        drawerStyle={{
          backgroundColor: 'transparent'
        }}
        drawerType={'slide'}
        initialRouteName="Home"
        overlayColor="transparent"
        drawerContent={(props) => {
          setAnimatedValue(props.progress);
          return <CustomDrawerContent {...props} />;
        }}>
        <Drawer.Screen
          name="Fast Food"
          component={withFancyDrawer(HomeScreen)}
        />
        <Drawer.Screen
          name="North Indian"
          component={withFancyDrawer(OrderScreen)}
        />
        <Drawer.Screen
          name="Desserts"
          component={withFancyDrawer(OrderScreen)}
        />
        <Drawer.Screen
          name="Chinese"
          component={withFancyDrawer(OrderScreen)}
        />
        <Drawer.Screen
          name="Gujarati"
          component={withFancyDrawer(OrderScreen)}
        />
        <Drawer.Screen name="Bakery" component={withFancyDrawer(OrderScreen)} />
        <Drawer.Screen
          name="South Indian"
          component={withFancyDrawer(OrderScreen)}
        />
        <Drawer.Screen name="Mithai" component={withFancyDrawer(OrderScreen)} />
        <Drawer.Screen
          name="Italian"
          component={withFancyDrawer(OrderScreen)}
        />
        <Drawer.Screen
          name="Mughlai"
          component={withFancyDrawer(OrderScreen)}
        />
      </Drawer.Navigator>
      {/* </NavigationContainer> */}
    </AnimatedContext.Provider>
  );
}

export default DrawerNavigation;
