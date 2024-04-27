import { Text, Pressable, View } from "react-native";
import { COLORS } from "../../constants";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";

export default function FooterComponent({ navigation }) {
  [route, setRoute] = useState("Home");

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: COLORS.black,
        alignItems: "center",
      }}
    >
      <Pressable
        style={{
          alignItems: "center",
        }}
        onPress={() => {
          navigation.navigate("Home", { title: "" });
          setRoute("Home");
        }}
      >
        <Feather
          name="shopping-bag"
          size={24}
          color={route == "Home" ? COLORS.red : COLORS.white}
        />
        <Text
          style={{
            color: "white",
          }}
        >
          Comprar
        </Text>
      </Pressable>
      <Pressable
        style={{
          alignItems: "center",
        }}
        onPress={() => navigation.navigate("Home", { title: "" })}
      >
        <Feather name="list" size={24} color="white" />
        <Text
          style={{
            color: "white",
          }}
        >
          Blog
        </Text>
      </Pressable>
      <Pressable
        style={{
          alignItems: "center",
        }}
        onPress={() => {
          navigation.navigate("Account", { title: "" });
          setRoute("Account");
        }}
      >
        <Feather
          name="user"
          size={24}
          color={route == "Home" ? COLORS.red : COLORS.white}
        />
        <Text
          style={{
            color: "white",
          }}
        >
          Conta
        </Text>
      </Pressable>
      <Pressable
        style={{
          alignItems: "center",
        }}
        onPress={() => {
          navigation.navigate("ShoppingCart", { title: "" });
          setRoute("ShoppingCart");
        }}
      >
        <Feather
          name="shopping-cart"
          size={24}
          color={route == "ShoppingCart" ? COLORS.red : COLORS.white}
        />
        <Text
          style={{
            color: "white",
          }}
        >
          Carrinho
        </Text>
      </Pressable>
    </View>
  );
}
