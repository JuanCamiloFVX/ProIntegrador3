import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppRegistry } from 'react-native';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import NavigationStack from './components/Navigation/NavigationStack';


export default function App() {
  const client = new ApolloClient({
    uri: 'https://adventureworksapi-production.up.railway.app/graphql',
    cache: new InMemoryCache()
  });

  return (
    <ApolloProvider client={client}>
    <NavigationContainer>
        
        <NavigationStack/>
        {/* <ButtomTab /> */}
        
    </NavigationContainer>
    </ApolloProvider>
    
  );
}


