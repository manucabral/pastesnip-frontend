import { ApolloClient, InMemoryCache } from '@apollo/client';

console.log(import.meta.env.VITE_GRAPHQL_ENDPOINT);
const client = new ApolloClient({
    uri: import.meta.env.VITE_GRAPHQL_ENDPOINT,
    cache: new InMemoryCache(),
    headers: {
        auth: localStorage.getItem('access') || '',
    }
});

export { client };