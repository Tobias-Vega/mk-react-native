import { useNavigation } from "expo-router";
import { Button, StyleSheet, View } from "react-native";

export default function Index() {

  const navigation = useNavigation();

  const irAlLogin = () => {
    navigation.navigate('auth');
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button title="Ir al login" onPress={irAlLogin} />
    </View>
  );
}
