import { ApolloProvider } from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';

import { apolloClient } from '@config/api';

export default function Provider(props) {
  return (
    <ApolloProvider client={apolloClient}>
      <NavigationContainer>
        <PaperProvider>{props.children}</PaperProvider>
      </NavigationContainer>
    </ApolloProvider>
  );
}
