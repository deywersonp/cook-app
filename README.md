### Sobre o Projeto

- O Cook é um aplicativo para encontrar receitas ao informar um ou mais ingredientes.
- A aplicação faz uso do Expo-Router. Por conta disso, todas as exportações das funções que serão as "páginas" do app precisam ser feita utilizando `export default`.
- O componente `_layout.tsx`, que possui um underline no inicio, característica de arquivo de configuração, é sempre a porta de entrada das páginas da aplicação.
- Utilizamos nesse componente o componente `Slot`, que é importado da lib `expo-router`. O `Slot` olha todas as páginas disponíveis dentro da pasta `app` e as disponibiliza para acesso.
- Este projeto utiliza [Supabase](https://supabase.com/docs/guides/getting-started/tutorials/with-expo-react-native)
- Com o Supabase podemos criar SQL query e fazer a chamada dessa função criada com o uso da CLI do Supabase dentro da nossa aplicação. Para ser possível executar, utilizamos o método `.rpc()`, que recebe como parâmetro o nome da função que definimos dentro do painel `SQL Editor` do Supabase.
  ![supabase sql query](/github/image.png)
- Podemos consultar as imagens criadas no `Supabase`, acessando `Database` -> `Functions`
  ![supabase database functions](/github/image-1.png)
