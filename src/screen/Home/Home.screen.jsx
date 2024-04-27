import {
  Text,
  View,
  ScrollView,
  useWindowDimensions,
} from "react-native";

import { Button, TextInput } from "react-native-paper";
import ProductCardComponent from "../../components/ProductCard/ProductCard.component";
import { store } from "../../data/mock";
import { COLORS } from "../../constants";
import { useState } from "react";
import { useStore } from "../../modules/store";
import { useEffect } from "react";
import { Keyboard } from "react-native";

export default function HomeScreen({ navigation }) {
  const [query, setQuery] = useState("");
  const [items, setItems] = useState(store);
  const shoppingCart = useStore();
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  const screen = useWindowDimensions();

 useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  useEffect(() => {
    /*const arr = store;*/

    /* A lógica de busca vai aqui */

    /*const q = query.toString().toLowerCase();

    if (typeof q == "string" && q != "") {
      for (let cat = 0; cat < arr.length; cat++) {
        arr[cat].products = arr[cat].products.filter(
          (i) =>
            i.productTitle.toLowerCase().includes(q) ||
            i.description.toLowerCase().includes(q)
        );
      }

      setItems(arr);
    } else {
      setItems(store);
    }*/
  }, [query]);

  const handleSignIn = () => {
    navigation.navigate("Login", { title: "Login" });
  };

  return (
    <View>
      <ScrollView
        style={{
          height: screen.height * 0.93,
        }}
      >
        <View
          style={{
            justifyContent: "space-evenly",
            flexDirection: "row",
            padding: 10
          }}
        >
          <Button
            icon={"account"}
            color={COLORS.uiBlack}
            mode="contained"
            onPress={() => navigation.navigate("Account")}
          >
            Minha Conta
          </Button>
          <Button
            icon={"cart"}
            mode="contained"
            color={COLORS.red}
            onPress={() => navigation.navigate("ShoppingCart")}
          >
            {`${shoppingCart.shoppingCart.length}`}
          </Button>
        </View>
        <TextInput
          style={{
            margin: 15,
            marginTop: isKeyboardVisible ? 100 : 0
          }}
          mode={"flat"}
          label={"Insira sua busca"}
          value={query}
          onChangeText={(text) => setQuery(text)}
        ></TextInput>
        {items.map((category) => (
          <View>
            <Text
              style={{
                fontSize: 22,
                margin: 12,
                marginLeft: 20,
              }}
            >
              {category.title}
            </Text>
            <ScrollView horizontal key={category.id}>
              {category.products.map((item, index) => (
                <ProductCardComponent
                  key={index}
                  onPress={() => {
                    navigation.navigate("Product", { title: "", ...item });
                  }}
                  {...item}
                />
              ))}
            </ScrollView>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
