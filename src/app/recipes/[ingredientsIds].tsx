import React from "react";
import { FlatList, View, Text } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

import { services } from "@/services";

import { Recipe } from "@/components/Recipe";
import { Ingredients } from "@/components/Ingredients";

import { styles } from "./styles";

export default function Recipes() {
  const [ingredients, setIngredients] = React.useState<IngredientResponse[]>([]);
  const [recipes, setRecipes] = React.useState<RecipeResponse[]>([]);

  const params = useLocalSearchParams<{ ingredientsIds: string; }>();

  const ingredientsIds = params.ingredientsIds.split(",");

  React.useEffect(() => {
    services.ingredients.findByIds(ingredientsIds).then(setIngredients);
  }, []);

  React.useEffect(() => {
    services.recipes.findByIngredientsIds(ingredientsIds).then(setRecipes);
  }, []);

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

      <Ingredients ingredients={ingredients} />

      <FlatList
        data={recipes}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Recipe recipe={item} />}
        style={styles.recipes}
        contentContainerStyle={styles.recipesContent}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{ gap: 16 }}
        numColumns={2}
      />
    </View>
  );
}