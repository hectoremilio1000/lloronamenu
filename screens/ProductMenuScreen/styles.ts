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
    width: 500,
    height: 700,
    resizeMode: "contain",
  },
  subcontainer2: {
    marginVertical: 10,
  },
  nombre: {
    fontSize: 30,
    marginVertical: 2,
    fontWeight: "700",
    textAlign: "center",
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
