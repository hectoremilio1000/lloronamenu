import { Pressable, StyleSheet } from "react-native";

import { Image, FlatList, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RootTabScreenProps } from "../../types";

import styles from "./styles";

interface MasCategoryProps {
  category: {
    id: string;
    title: string;
    productos: { id: string; poster: string; nombre: string }[];
  };
}

export default function MasInglesCategory(props: MasCategoryProps) {
  const { category } = props;
  const navigation = useNavigation();

  const onProductPress = (producto: any) => {
    navigation.navigate("DetailMenu", {
      producto,
    });
  };

  return (
    <>
      <FlatList
        data={category.productos}
        horizontal
        renderItem={({ item }) => (
          <Pressable onPress={() => onProductPress(item)}>
            <Image
              style={styles.image}
              source={{
                uri: item.poster,
              }}
            />
            <Text style={styles.title}>{item.nombre}</Text>
          </Pressable>
        )}
      />
    </>
  );
}
