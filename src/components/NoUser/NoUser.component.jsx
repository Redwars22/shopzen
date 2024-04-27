import { Text } from "react-native";
import { Button, Surface } from "react-native-paper";
import { Feather } from "@expo/vector-icons";
import { COLORS } from "../../constants";

export default function NoUserComponent() {
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
        Você não está conectado!
      </Text>
      <Text
        style={{
          textAlign: "center"
        }}
      >
        Crie uma conta ou entre com sua conta já existente para concluir suas
        compras e gerenciar métodos de pagamento.
      </Text>
      <Button
        mode={"contained"}
        color={COLORS.white}
        icon={"shopping"}
        style={{ marginTop: 20 }}
        onPress={() => {}}
      >
        Entrar no Shopzen
      </Button>
    </Surface>
  );
}
