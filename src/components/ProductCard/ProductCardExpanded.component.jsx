import { Text, View, Image, useWindowDimensions } from "react-native";
import { Divider, Surface } from "react-native-paper";
import RatingComponent from "../../components/Rating/Rating.component";

export default function ProductCardExpanded(props) {
  const screen = useWindowDimensions();

  return (
    <View>
      <Surface
        elevation={4}
        style={{
          borderRadius: 16,
          padding: 10,
          margin: 20,
        }}
      >
        <Image
          source={{
            uri: props.productIMG,
          }}
          width={screen.width * 0.77}
          height={400}
        />
      </Surface>
      <Text
        style={{
          fontSize: 30
        }}
      >
        {props.productTitle}
      </Text>
      <Text
        style={{
          color: "#6B6D6D",
          fontSize: 22,
          marginBottom: 16
        }}
      >
        {props.productCategory}
      </Text>
      <Divider
        style={{
          margin: 16,
        }}
      />
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <RatingComponent rating={props.rating} />
        <Text
          style={{
            marginLeft: 10
          }}
        >
          {props.rating} de 5.0
        </Text>
      </View>
      <Text
        style={{
          fontSize: 25
        }}
      >
        R$ {props.productPrice}
      </Text>
    </View>
  );
}
