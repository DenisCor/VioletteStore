
import { ApolloClient, InMemoryCache } from "@apollo/client";
const API_URI = `${process.env.NEXT_PUBLIC_SERVER_URL}/graphql`;

const apolloClient = new ApolloClient({
    uri: API_URI,
    cache: new InMemoryCache(),
});
console.log('API_U',API_URI)
export default apolloClient;

