import { ApolloProvider } from '@apollo/client';
import React from 'react';

import { apolloClient } from '@config/api';

export default function Provider(props) {
  return <ApolloProvider client={apolloClient}>{props.children}</ApolloProvider>;
}
