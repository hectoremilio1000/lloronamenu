import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cantina La LLorona</Text>
      <Text style={styles.subtitle}>
        La Cantina Más Trendy de la Roma Condesa
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  subtitle: { fontSize: 20, fontWeight: "bold" },

  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
