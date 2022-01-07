import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  subcontainer1: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
  },

  image: {
    width: 400,
    height: 550,
    resizeMode: "cover",
  },
  subcontainer2: {
    marginVertical: 10,
  },
  nombre: {
    fontSize: 30,
    marginVertical: 2,
    fontWeight: "700",
  },
  descripcion: {
    fontSize: 20,
    marginVertical: 2,
    fontWeight: "500",
  },
  precio: {
    fontSize: 18,
    fontWeight: "500",
    color: "#242424",
  },
});

export default styles;
