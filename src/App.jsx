import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import CharacterList from "./components/CharacterList";
import "./App.css";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <CharacterList />
    </ApolloProvider>
  );
}

export default App;
