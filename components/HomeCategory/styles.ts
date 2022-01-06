import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "700",
    marginVertical: 10,
  },
  image: {
    height: 300,
    width: 150,
    resizeMode: "cover",
    borderRadius: 5,
    margin: 5,
  },
});

export default styles;
