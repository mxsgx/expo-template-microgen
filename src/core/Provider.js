import { ApolloProvider } from '@apollo/client';
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';

import { apolloClient } from '@config/api';

export default function Provider(props) {
  return (
    <ApolloProvider client={apolloClient}>
      <PaperProvider>{props.children}</PaperProvider>
    </ApolloProvider>
  );
}
