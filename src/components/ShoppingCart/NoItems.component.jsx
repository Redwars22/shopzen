import { Text } from "react-native";
import { Button, Surface } from "react-native-paper";
import { Feather } from "@expo/vector-icons";
import { COLORS } from "../../constants";

export default function NoItemsComponent({navigation}) {
  return (
    <Surface
      elevation={4}
      style={{
        margin: 30,
        padding: 16,
        borderRadius: 15,
        alignItems: "center",
      }}
    >
      <Feather
        name="shopping-cart"
        size={100}
        color={COLORS.red}
        style={{
          margin: 15,
        }}
      />
      <Text
        style={{
          fontSize: 20
        }}
      >
        Nenhum item no carrinho
      </Text>
      <Text
        style={{
          textAlign: "center"
        }}
      >
        Continue comprando para adicionar itens ao carrinho.
      </Text>
      <Button
        mode={"contained"}
        color={COLORS.white}
        icon={"shopping"}
        style={{ marginTop: 20 }}
        onPress={() => navigation.navigate("Home")}
      >
        Continuar Comprando
      </Button>
    </Surface>
  );
}
