import React from "react";
import { View, Text, Alert } from "react-native";
import { router } from "expo-router";

import { services } from "@/services";

import { Loading } from "@/components/Loading";
import { Ingredients } from "@/components/Ingredients";

import { styles } from "./styles";
import { Selected } from "@/components/Selected";

export default function Index() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [selected, setSelected] = React.useState<string[]>([]);
  const [ingredients, setIngredients] = React.useState<IngredientResponse[]>([]);

  function handleToggleSelected(value: string) {
    if (selected.includes(value)) {
      return setSelected(state => state.filter(item => item !== value));
    }

    setSelected(state => [...state, value]);
  }

  function handleClearSelected() {
    Alert.alert("Limpar", "Deseja limpar tudo?", [
      { text: "Não", style: "cancel" },
      { text: "Sim", onPress: () => setSelected([]) }
    ]);
  }

  function handleSearch() {
    router.navigate("/recipes/" + selected);
  }

  React.useEffect(() => {
    services
      .ingredients
      .findAll()
      .then(setIngredients)
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Escolha {"\n"}
        <Text style={styles.subtitle}>os produtos</Text>
      </Text>

      <Text style={styles.message}>
        Descubra receitas baseadas nos  {"\n"}produtos que você escolheu.
      </Text>

      {isLoading
        ? (
          <Loading />
        ) : (
          <>
            <Ingredients
              ingredients={ingredients}
              selected={selected}
              handleToggleSelected={handleToggleSelected}
            />

            {selected.length > 0 && (
              <Selected
                quantity={selected.length}
                onClear={handleClearSelected}
                onSearch={handleSearch}
              />
            )}
          </>
        )}
    </View>
  );
}