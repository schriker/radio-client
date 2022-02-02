import {
  ApolloLink,
  Operation,
  FetchResult,
  Observable,
  HttpLink,
  split,
  ApolloClient,
  InMemoryCache,
} from '@apollo/client/core';
import { getMainDefinition } from '@apollo/client/utilities';
import { print } from 'graphql';
import { createClient, ClientOptions, Client } from 'graphql-ws';

class WebSocketLink extends ApolloLink {
  private client: Client;

  constructor(options: ClientOptions) {
    super();
    this.client = createClient(options);
  }

  public request(operation: Operation): Observable<FetchResult> {
    return new Observable((sink) => {
      return this.client.subscribe<FetchResult>(
        { ...operation, query: print(operation.query) },
        {
          next: sink.next.bind(sink),
          complete: sink.complete.bind(sink),
          error: sink.error.bind(sink),
        }
      );
    });
  }
}

const httpLink = new HttpLink({
  uri: process.env.REACT_APP_GRAPHQL_URL,
});

const wsLink = new WebSocketLink({
  url: process.env.REACT_APP_GRAPHQL_WS!,
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
  cache: new InMemoryCache(),
});

export default client;
