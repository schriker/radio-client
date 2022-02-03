import {
  HttpLink,
  split,
  ApolloClient,
  InMemoryCache,
} from '@apollo/client/core';
import { getMainDefinition } from '@apollo/client/utilities';
import { WebSocketLink } from '@apollo/client/link/ws';

const httpLink = new HttpLink({
  uri: process.env.REACT_APP_GRAPHQL_URL,
});

const wsLink = new WebSocketLink({
  uri: process.env.REACT_APP_GRAPHQL_WS!,
  options: {
    reconnect: true,
  },
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          songs: {
            keyArgs: false,
            merge(_, incoming) {
              return incoming;
            },
          },
          songsHistory: {
            keyArgs: false,
            merge(existing = [], incoming: any[], { args, readField }) {
              if (!args?.endTime) {
                const filtered = [
                  ...incoming.filter((i) => {
                    const duplicate = existing.some(
                      (e: any) => readField('id', e) === readField('id', i)
                    );
                    return !duplicate;
                  }),
                  ...existing,
                ];

                return filtered;
              }
              return [...existing, ...incoming];
            },
          },
        },
      },
    },
  }),
});

export default client;
