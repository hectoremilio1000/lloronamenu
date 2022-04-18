import { StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { Image, FlatList } from "react-native";
import categoriasIngles from "../assets/data/categoriasIngles";
import HomeCategory2 from "../components/HomeCategory2";
import masIngles from "../assets/data/masIngles";
import MasInglesCategory from "../components/masInglesCategory";

export default function MenuIngles() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{categoriasIngles.titleCategorias}</Text>
      <FlatList
        data={categoriasIngles.items}
        renderItem={({ item }) => <HomeCategory2 category={item} />}
      />
      <Text style={styles.title}>{masIngles.titleCategorias}</Text>
      <FlatList
        data={masIngles.items}
        renderItem={({ item }) => <MasInglesCategory category={item} />}
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
