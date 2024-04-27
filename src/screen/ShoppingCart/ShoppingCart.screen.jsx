import { ScrollView, Text, View } from "react-native";
import { useStore } from "../../modules/store";
import NoItemsComponent from "../../components/ShoppingCart/NoItems.component";
import ProductCardComponent from "../../components/ProductCard/ProductCard.component";
import { Button } from "react-native-paper";
import { COLORS } from "../../constants";

export default function ShoppingCartScreen({ navigation }) {
  let items = [];
  const store = useStore((state) => state.shoppingCart);
  const str = useStore();
  items = store;

  return (
    <View
      style={{
        marginTop: 20,
      }}
    >
      {items.length > 0 ? (
        <View
          style={{
            justifyContent: "space-evenly",
            flexDirection: "row",
            padding: 10,
          }}
        >
          <Button
            icon={"account"}
            color={COLORS.white}
            mode="contained"
            onPress={() => navigation.navigate("Account")}
          >
            Concluir Compra
          </Button>
          <Button
            icon={"cart"}
            mode="contained"
            color={COLORS.red}
            onPress={() => str.emptyCart()}
          >
            Esvaziar
          </Button>
        </View>
      ) : (
        <></>
      )}
      <ScrollView horizontal={Boolean(items.length > 0)}>
        {items.length > 0 ? (
          items.map((item) => (
            <View style={{
              alignItems: "center"
            }}>
              <ProductCardComponent {...item} />
              <Text
              >
                OPÇÃO: {item.option.title}
              </Text>
              <Button
                mode={"contained"}
                color={COLORS.red}
                icon={"minus"}
                margin={20}
                onPress={() => str.removeItem(item)}
              >
                Remover Item
              </Button>
            </View>
          ))
        ) : (
          <NoItemsComponent navigation={navigation} />
        )}
      </ScrollView>
    </View>
  );
}
