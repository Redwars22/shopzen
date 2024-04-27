import { Text, View } from "react-native";
import { Surface } from "react-native-paper";
import RatingComponent from "../Rating/Rating.component";

export default function CommentCardComponent({
  user,
  avatar,
  uuid,
  rating,
  comment,
}) {
  return (
    <Surface
      elevation={4}
      style={{
        borderRadius: 10,
        margin: 12,
        padding: 12,
      }}
    >
      <View>
        <Text
        >
          {user}
        </Text>
      </View>
      <Text
      >
        {comment}
      </Text>
      <RatingComponent rating={rating} />
    </Surface>
  );
}
