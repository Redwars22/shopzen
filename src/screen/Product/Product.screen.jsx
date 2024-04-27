import { ScrollView, Text, View, useWindowDimensions } from "react-native";
import { Button, Divider, Snackbar, TextInput } from "react-native-paper";
import { useState } from "react";
import { fetchComments } from "../../modules/fetch";
import { useStore } from "../../modules/store";
import { COLORS } from "../../constants";
import CommentCardComponent from "../../components/Comment/CommentCard.component";
import { handleCheckCEPAndCalculate } from "../../modules/utils";
import ProductCardExpanded from "../../components/ProductCard/ProductCardExpanded.component";

export default function ProductDetailsScreen({ navigator, route }) {
  const [visible, setVisible] = useState(false);
  const [snackText, setSnackText] = useState("");
  const [selectedOption, setSelectedOption] = useState({
    title: "",
    id: "",
  });
  const [CEP, setCEP] = useState("");

  const props = route.params;
  const comments = fetchComments(props.id);
  const screen = useWindowDimensions();

  const store = useStore();

  const handleAddToCart = () => {
    const product = route.params;

    store.addToCart({
      ...product,
      option: selectedOption,
      uuid: Math.floor(Math.random() * 1000000),
    });
  };

  const handleShowSnackbar = (text) => {
    setVisible(true);
    setSnackText(text);
  };

  const handleDismissSnackbar = () => {
    setVisible(false);
    setSnackText("");
  };

  return (
    <>
      <ScrollView
        style={{
          paddingLeft: 16,
          paddingRight: 16,
          maxHeight: screen.height * 0.93,
        }}
      >
        <ProductCardExpanded {...props} />
        <Divider
          style={{
            margin: 16,
          }}
        />
        <View>
          {props.options && (
            <>
              <Text
                style={{
                  marginBottom: 12,
                }}
              >
                {props.options.title}
              </Text>
              {props.options.options.length > 0 &&
                props.options.options.map((option) => (
                  <Button
                    mode={
                      selectedOption.id === option.id && selectedOption.id != ""
                        ? "contained"
                        : "outlined"
                    }
                    color={COLORS.black}
                    onPress={() =>
                      setSelectedOption({
                        title: option.title,
                        id: option.id,
                      })
                    }
                  >
                    {option.title}
                  </Button>
                ))}
            </>
          )}
        </View>
        <Divider
          style={{
            margin: 16,
          }}
        />
        <Button
          icon="cart"
          mode="contained"
          color={COLORS.black}
          onPress={() => {
            handleAddToCart();
            handleShowSnackbar(
              "O produto foi adicionado com sucesso ao carrinho"
            );
          }}
        >
          ADICIONAR AO CARRINHO
        </Button>
        <Divider
          style={{
            margin: 16,
          }}
        />
        <Text
        >
          {props.description}
        </Text>
        <Divider
          style={{
            margin: 16,
          }}
        />
        <TextInput
          mode={"flat"}
          label={"Insira seu CEP"}
          value={CEP}
          onChange={(text) => setCEP(text)}
        ></TextInput>
        <Button
          icon="calculator"
          mode="contained"
          color={COLORS.black}
          onPress={() => {
            const result = handleCheckCEPAndCalculate(CEP);

            if (!result) {
              handleShowSnackbar("Ocorreu um erro ao calcular o frete");
            }
          }}
        >
          CALCULAR FRETE
        </Button>
        <Divider
          style={{
            margin: 16,
          }}
        />
        <Text
        >
          AVALIAÇÕES
        </Text>
        <ScrollView>
          {comments.map((item, index) => (
            <CommentCardComponent key={index} {...item} />
          ))}
        </ScrollView>
      </ScrollView>
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
    </>
  );
}
