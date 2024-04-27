import { Image, Pressable, Text, View } from "react-native";
import { Card, Surface } from "react-native-paper";
import RatingComponent from "../Rating/Rating.component";

export default function ProductCardComponent(props) {
  return (
    <Pressable onPress={props.onPress}>
      <Surface
        style={{
          margin: 16,
          padding: 16,
          width: 200,
          height: 300,
          borderRadius: 10
        }}
        elevation={4}
      >
        <Image source={{
          uri: props.productIMG
        }} width={168} height={160}/>
        <Text
          style={{
            fontSize: 19,
            marginTop: 10
          }}
        >
          {props.productTitle.length > 16 ? props.productTitle.substr(0, 15) + "." : props.productTitle}
        </Text>
        <View>
          <Text>R$ {props.productPrice}</Text>
        </View>
        <RatingComponent rating={Math.floor(props.rating)}/>
      </Surface>
    </Pressable>
  );
}
