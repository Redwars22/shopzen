import {
  Text,
  SafeAreaView,
  StyleSheet,
  Pressable,
  View,
  Image,
  StatusBar,
} from 'react-native';
import { Surface } from 'react-native-paper';

export default function HeaderComponent() {
  return (
    <Surface
    elevation={20}
      style={{
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: -StatusBar.currentHeight,
        paddingTop: 40 + StatusBar.currentHeight
      }}>
      <View
        style={{
          flexDirection: 'row',
          gap: 16,
          alignItems: 'center',
        }}>
        <Image
          source={require('../../../assets/app-logo.png')}
          style={{
            width: 35,
            height: 35,
          }}
        />
        <Text
          style={{
            fontSize: 20,
            color: 'grey'
          }}>
          SHOPZEN
        </Text>
      </View>
    </Surface>
  );
}
