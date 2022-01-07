import { StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { Image, FlatList } from "react-native";
import categoriasIngles from "../assets/data/categoriasIngles";
import HomeCategory from "../components/HomeCategory";

export default function MenuIngles() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{categoriasIngles.titleCategorias}</Text>
      <FlatList
        data={categoriasIngles.items}
        renderItem={({ item }) => <HomeCategory category={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    padding: 20,
  },
  title: {
    color: "#fff",
    fontSize: 30,
    textAlign: "center",
    marginVertical: 10,
    marginBottom: 20,
    fontWeight: "600",
  },
});
