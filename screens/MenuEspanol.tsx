import { StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { Image, FlatList } from "react-native";
import HomeCategory from "../components/HomeCategory";
import masEspanol from "../assets/data/masEspanol";
import MasEspanolCategory from "../components/masEspanolCategory";
import categoriasEspanol from "../assets/data/categoriasEspanol";

export default function MenuEspanol() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{categoriasEspanol.titleCategorias}</Text>
      <FlatList
        data={categoriasEspanol.items}
        renderItem={({ item }) => <HomeCategory category={item} />}
      />
      <Text style={styles.title}>{masEspanol.titleCategorias}</Text>
      <FlatList
        data={masEspanol.items}
        renderItem={({ item }) => <MasEspanolCategory category={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",

    padding: 10,
  },
  title: {
    color: "#fff",
    fontSize: 30,
    textAlign: "center",

    fontWeight: "600",
  },
});
