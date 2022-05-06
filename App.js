import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import NavigationStack from "./src/components/Navigation/NavigationStack";
import {DataProvider} from './src/context/DataContext';

export default function App() {
  const client = new ApolloClient({
    uri: "https://adventureworksapi-production.up.railway.app/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <DataProvider>
    <ApolloProvider client={client}>
      <NavigationContainer>
        <NavigationStack />
      </NavigationContainer>
    </ApolloProvider>
    </DataProvider>
  );
}
