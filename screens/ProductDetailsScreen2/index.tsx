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
          Name: {props.route.params.producto.nombre}
        </Text>
        <Text style={styles.descripcion}>
          Origin: {props.route.params.producto.origen}
        </Text>
        <Text style={styles.descripcion}>
          Style: {props.route.params.producto.estilo}
        </Text>
        <Text style={styles.descripcion}>
          Flavors: {props.route.params.producto.sabores}
        </Text>
        <Text style={styles.descripcion}>
          Percentage: {props.route.params.producto.porcentaje}%
        </Text>
        <Text style={styles.descripcion}>
          Recognition: {props.route.params.producto.reconocimiento}
        </Text>
        <Text style={styles.precio}>
          Price: {props.route.params.producto.precio}
        </Text>
      </View>
    </View>
  );
}
