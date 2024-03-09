import { ScrollView, ScrollViewProps } from "react-native";

import { services } from "@/services";

import { Ingredient } from "@/components/Ingredient";

import { styles } from "./styles";

type IngredientsProps = {
  ingredients: IngredientResponse[];
  selected?: never;
  handleToggleSelected?: never;
} | {
  ingredients: IngredientResponse[];
  selected: string[];
  handleToggleSelected: (id: string) => void;
};

export function Ingredients({ ingredients, selected, handleToggleSelected, horizontal, ...rest }: IngredientsProps & ScrollViewProps) {
  return (
    <ScrollView
      horizontal={horizontal}
      style={horizontal && styles.horizontalContainer}
      contentContainerStyle={horizontal ? styles.horizontalIngredientsContent : styles.verticalIngredientsContent}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      {...rest}
    >
      {ingredients.map((ingredient) => (
        <Ingredient
          key={ingredient.id}
          name={ingredient.name}
          image={`${services.storage.imagePath}/${ingredient.image}`}
          selected={selected ? selected.includes(ingredient.id) : false}
          onPress={handleToggleSelected ? () => handleToggleSelected(ingredient.id) : undefined}
        />
      ))}
    </ScrollView>
  );
}
