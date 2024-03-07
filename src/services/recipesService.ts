import { supabase } from "./supabase";

async function findByIngredientsIds(ids: string[]) {
  const { data } = await supabase
    //.rpc é utilizado para executar funções criadas no
    //painel SQL Editor do Supabase. Seu parâmetro obrigatório
    //é o nome da função, e pode conter parâmetros adicionais,
    //como o caso abaixo, aonde passamos os IDS.
    .rpc("recipes_by_ingredients", { ids })
    .returns<RecipeResponse[]>();

  return data ?? [];
}

async function show(id: string) {
  const { data } = await supabase
    .from("recipes")
    .select()
    .eq("id", id)
    .returns<RecipeResponse>()
    .single();

  return data;
}

export { findByIngredientsIds, show };
