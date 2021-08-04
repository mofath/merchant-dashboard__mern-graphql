import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { ApolloLink } from 'apollo-link';
import { onError } from 'apollo-link-error';
import { InMemoryCache } from 'apollo-cache-inmemory';

const defaultOptions = {
    watchQuery: {
        fetchPolicy: 'network-only',
        errorPolicy: 'ignore'
    },
    query: {
        fetchPolicy: 'network-only',
        errorPolicy: 'all'
    }
};

const httpLink = createHttpLink({
    uri: 'http://localhost:3001/graphql'
});

const errorLink = onError(({ networkError, graphQLErrors }) => {
    if (graphQLErrors) {
        graphQLErrors.map(({ message, locations, path }) => {
            // eslint-disable-next-line no-console
            console.log(
                `[GraphQL error]: 
                 Message: ${message}, Location: ${JSON.stringify(locations)}, 
                 Path: ${JSON.stringify(path)}`
            )
            return null;
        })
    }
    if (networkError) {
        // eslint-disable-next-line no-console
        console.log(`[Network error]: ${networkError}`)
    }
});

const client = new ApolloClient({
    link: ApolloLink.from([errorLink, httpLink]),
    cache: new InMemoryCache(),
    defaultOptions: defaultOptions
});

export default client;