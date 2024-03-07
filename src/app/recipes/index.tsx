import { FlatList, View, Text } from "react-native";
import { router } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

import { Recipe } from "@/components/Recipe";

import { styles } from "./style";

export default function Recipes() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons
          name="arrow-back"
          size={32}
          onPress={() => router.back()}
        />

        <Text style={styles.title}>
          Ingredientes
        </Text>
      </View>

      <FlatList
        data={["1"]}
        keyExtractor={item => item}
        renderItem={() => (
          <Recipe
            recipe={{
              name: "Omelete",
              image: "https://receitas123.com/wp-content/uploads/2023/03/omelete.png",
              minutes: 10
            }}
          />
        )}
      />
    </View>
  );
}