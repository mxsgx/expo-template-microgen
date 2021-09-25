import { ApolloClient, from, InMemoryCache } from '@apollo/client';
import { API_BASE_URL } from '@env';
import { createUploadLink } from 'apollo-upload-client';

const inMemoryCache = new InMemoryCache();
const uploadLink = createUploadLink({
  uri: `${API_BASE_URL}/graphql`,
});

export const apolloClient = new ApolloClient({
  cache: inMemoryCache,
  link: from([uploadLink]),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
    query: {
      fetchPolicy: 'network-only',
    },
  },
});
