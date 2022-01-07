import { Pressable, StyleSheet } from "react-native";

import { Image, FlatList, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RootTabScreenProps } from "../../types";

import styles from "./styles";

interface HomeCategoryProps {
  category: {
    id: string;
    title: string;
    productos: { id: string; poster: string; nombre: string }[];
  };
}

export default function HomeCategory(props: HomeCategoryProps) {
  const { category } = props;
  const navigation = useNavigation();

  const onProductPress = (producto: any) => {
    navigation.navigate("ProductDetailsScreen", {
      producto,
    });
  };

  return (
    <>
      <Text style={styles.title}>{category.title}</Text>
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
          </Pressable>
        )}
      />
    </>
  );
}
