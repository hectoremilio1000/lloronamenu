import React from "react";
import styles from "./styles";

import { Text, View } from "../../components/Themed";
import { Image } from "react-native";

export default function ProductDetailsScreen(props: any) {
  console.log();

  return (
    <View style={styles.container}>
      <View style={styles.subcontainer1}>
        <Image
          style={styles.image}
          source={{
            uri: props.route.params.producto.poster,
          }}
        />
      </View>
      <View style={styles.subcontainer2}>
        <Text style={styles.nombre}>
          Nombre: {props.route.params.producto.nombre}
        </Text>
        <Text style={styles.descripcion}>
          Origen: {props.route.params.producto.origen}
        </Text>
        <Text style={styles.descripcion}>
          Estilo: {props.route.params.producto.estilo}
        </Text>
        <Text style={styles.descripcion}>
          Sabores: {props.route.params.producto.sabores}
        </Text>
        <Text style={styles.descripcion}>
          Porcentaje: {props.route.params.producto.porcentaje}%
        </Text>
        <Text style={styles.descripcion}>
          Reconocimiento: {props.route.params.producto.reconocimiento}
        </Text>
        <Text style={styles.precio}>
          Precio: {props.route.params.producto.precio}
        </Text>
      </View>
    </View>
  );
}
