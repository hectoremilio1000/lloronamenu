import React from "react";
import styles from "./styles";

import { Text, View } from "../../components/Themed";
import { Image } from "react-native";

export default function ProductMenuScreen(props: any) {
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
        <Text style={styles.nombre}>{props.route.params.producto.nombre}</Text>
      </View>
    </View>
  );
}
