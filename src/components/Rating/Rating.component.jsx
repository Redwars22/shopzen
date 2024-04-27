import { Feather } from "@expo/vector-icons";
import { View } from "react-native";

export default function RatingComponent(props) {
  return (
    <View style={{
        flexDirection: 'row',
        marginBottom: 20
    }}>
      <Feather
        name="star"
        size={20}
        color={props.rating > 0 ? "orange" : "grey"}
      />
      <Feather
        name="star"
        size={20}
        color={props.rating > 1 ? "orange" : "grey"}
      />
      <Feather
        name="star"
        size={20}
        color={props.rating > 2 ? "orange" : "grey"}
      />
      <Feather
        name="star"
        size={20}
        color={props.rating > 3 ? "orange" : "grey"}
      />
      <Feather
        name="star"
        size={20}
        color={props.rating > 4 ? "orange" : "grey"}
      />
    </View>
  );
}
