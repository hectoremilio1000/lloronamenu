import { StyleSheet } from "react-native";

import { Image, FlatList, Text } from "react-native";

import styles from "./styles";

interface HomeCategoryProps {
  category: {
    id: string;
    title: string;
    productos: { id: string; poster: string }[];
  };
}

export default function HomeCategory(props: HomeCategoryProps) {
  const { category } = props;

  return (
    <>
      <Text style={styles.title}>{category.title}</Text>
      <FlatList
        data={category.productos}
        horizontal
        renderItem={({ item }) => (
          <Image
            style={styles.image}
            source={{
              uri: item.poster,
            }}
          />
        )}
      />
    </>
  );
}
