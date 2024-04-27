import { Image, Text, View } from "react-native";
import { Button, Card, Snackbar, Surface, TextInput } from "react-native-paper";
import { COLORS, ERR } from "../../constants";
import { useState } from "react";
import { userMock } from "../../data/mock";

export default function AuthScreen(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [snackText, setSnackText] = useState("");

  const handleShowSnackbar = (text) => {
    setVisible(true);
    setSnackText(text);
  };

  const handleDismissSnackbar = () => {
    setVisible(false);
    setSnackText("");
  };

  const handleLogin = () => {
    const mock = userMock;

    if (email == mock.email && password == mock.password) {
      props.setUser({
        email: email,
        password: password
      });
    } else {
      handleShowSnackbar(ERR.WRONG_CREDENTIALS);
    }
  };

  return (
    <View>
      <Surface
        elevation={10}
        style={{
          margin: 25,
          borderRadius: 10,
          padding: 25,
          marginTop: 200,
        }}
      >
        <TextInput
        label="E-mail"
          mode="outlined"
          value={email}
          onChangeText={(text) => setEmail(text)}
        ></TextInput>
        <TextInput
        style={{
            marginTop: 10
        }}
        label="Senha"
          mode="outlined"
          value={password}
          onChangeText={(text) => setPassword(text)}
        ></TextInput>
        <View
          style={{
            margin: 10,
          }}
        >
          <Button
            icon={"key"}
            mode="contained"
            color={COLORS.white}
            onPress={() => handleLogin()}
          >
            Entrar
          </Button>
          <Button
            icon={"account"}
            mode="text"
            color={COLORS.uiBlack}
          >
            Cadastrar
          </Button>
          <Button
            icon={"key"}
            mode="text"
            color={COLORS.uiBlack}
          >
            Esqueci minha senha
          </Button>
        </View>
      </Surface>
      <Snackbar
        onDismiss={handleDismissSnackbar}
        icon={"info"}
        elevation={5}
        action={{
          label: "Entendi",
          onPress: () => {
            handleDismissSnackbar();
          },
        }}
        wrapperStyle={{ bottom: 0, zIndex: 9999 }}
        style={{
          backgroundColor: COLORS.uiBlack,
        }}
        visible={visible}
      >
        {snackText}
      </Snackbar>
    </View>
  );
}
