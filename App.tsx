import {
  SafeAreaView,
  StyleSheet,
  View,
  useWindowDimensions,
} from "react-native";
import { COLORS } from "./src/constants";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/screen/Home/Home.screen";
import AccountScreen from "./src/screen/Account/Account.screen";
import ProductDetailsScreen from "./src/screen/Product/Product.screen";
import ShoppingCartScreen from "./src/screen/ShoppingCart/ShoppingCart.screen";
import HeaderComponent from "./src/components/Header/Header.component";
import AuthScreen from "./src/screen/Auth/AuthScreen";
import { useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import React from "react";
import {StatusBar} from "expo-status-bar"

export default function App() {
  const Stack = createNativeStackNavigator();
  const screen = useWindowDimensions();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  return (
    <View style={styles.container}>
      <StatusBar style={"dark"} />
      <HeaderComponent />
      <View
        style={{
          height: screen.height * 0.95,
        }}
      >
        {user.email != "" && user.password != "" ? (
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}
            >
              <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
              <Stack.Screen
                name="Account"
                component={AccountScreen}
              ></Stack.Screen>
              <Stack.Screen
                name="Product"
                component={ProductDetailsScreen}
              ></Stack.Screen>
              <Stack.Screen
                name="ShoppingCart"
                component={ShoppingCartScreen}
              ></Stack.Screen>
              <Stack.Screen
                name="AuthScreen"
                component={AuthScreen}
              ></Stack.Screen>
            </Stack.Navigator>
          </NavigationContainer>
        ) : (
          <AuthScreen setUser={setUser} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: COLORS.white,
  },
});
