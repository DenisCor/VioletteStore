
import { ApolloClient, InMemoryCache } from "@apollo/client";
const API_URI = `${process.env.NEXT_PUBLIC_SERVER_URL}/graphql`;


const apolloClient = new ApolloClient({
    uri: API_URI,
    cache: new InMemoryCache(),
});
console.log('API_U',API_URI  )
export default apolloClient;






// import { withApollo } from "next-apollo";
// import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
// const API_URI = `${process.env.NEXT_PUBLIC_SERVER_URL}/graphql`;

// console.log('API_URI',API_URI)

// const strapiApolloClient = new ApolloClient({
//     ssrMode: typeof window === "undefined",
//     link: new HttpLink({
//         uri: API_URI
//     }),
//     cache: new InMemoryCache()
// });

// export default withApollo(strapiApolloClient);