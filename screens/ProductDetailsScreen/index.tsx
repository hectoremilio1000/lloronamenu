import React from "react";
import styles from "./styles";

import { Text, View } from "../../components/Themed";
import { Image } from "react-native";
import descripcionProducto from "../../assets/data/descripcionProducto";

export default function ProductDetailsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer1}>
        <Image
          style={styles.image}
          source={{
            uri: descripcionProducto.poster,
          }}
        />
      </View>
      <View style={styles.subcontainer2}>
        <Text style={styles.nombre}>Nombre: {descripcionProducto.nombre}</Text>
        <Text style={styles.descripcion}>
          Origen: {descripcionProducto.origen}
        </Text>
        <Text style={styles.descripcion}>
          Estilo: {descripcionProducto.estilo}
        </Text>
        <Text style={styles.descripcion}>
          Sabores: {descripcionProducto.sabores}
        </Text>
        <Text style={styles.descripcion}>
          Porcentaje: {descripcionProducto.porcentaje}%
        </Text>
        <Text style={styles.descripcion}>
          Reconocimiento: {descripcionProducto.reconocimiento}
        </Text>
        <Text style={styles.precio}>Precio: {descripcionProducto.precio}</Text>
      </View>
    </View>
  );
}
