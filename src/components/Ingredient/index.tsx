import { Image, Pressable, PressableProps, Text } from "react-native";

import { styles } from "./styles";

type IngredientProps = {
  name: string;
  image: string;
  selected?: boolean;
};

export function Ingredient({ name, image, selected = false, ...rest }: IngredientProps & PressableProps) {
  return (
    <Pressable
      style={[styles.container, selected && styles.selected]}
      {...rest}
    >
      <Image
        source={require("@/assets/tomato.png")}
        style={styles.image}
      />

      <Text style={styles.title}>
        Maçã
      </Text>
    </Pressable>
  );
}