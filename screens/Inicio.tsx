import { StyleSheet, Image, Button } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import Colors from "../constants/Colors";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cantina La Llorona</Text>
      <Text style={styles.subtitle}>
        La cantina más trendy de la Roma Condesa
      </Text>
      <Text style={styles.subtitle}>
        (The trendiest Tavern in Roma Condesa)
      </Text>
      <Image
        source={{
          uri: "https://imagenesrutalab.s3.amazonaws.com/llorona/logo/logo_alta_sin_nombre.png",
        }}
        style={styles.image}
      />
      <Image
        source={{
          uri: "https://imagenesrutalab.s3.amazonaws.com/llorona/logo/nombrelogo.png",
        }}
        style={styles.nombreLogo}
      />
      <View style={styles.subcontainer}>
        <View style={styles.containerButton}>
          <Button title="Menú Ingles" onPress={() => navigation.navigate} />
        </View>
        <View style={styles.containerButton}>
          <Button title="Menú Español" onPress={() => navigation.navigate} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  image: {
    marginTop: 20,
    height: 300,
    width: 250,
  },
  nombreLogo: {
    marginTop: 30,
    height: 270,
    width: 430,
  },
  subcontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
  },
  containerButton: {
    width: 200,
    height: 50,
    margin: 10,
    backgroundColor: "#3eeb91",
    borderRadius: 10,
  },
});
