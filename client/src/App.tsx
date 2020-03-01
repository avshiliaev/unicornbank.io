import React from 'react';
import {ApolloClient} from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {HttpLink} from 'apollo-link-http';
import {ApolloProvider} from '@apollo/react-common';
import Pages from './pages';
import './App.css';
import {useMedia} from 'react-use-media';

/**
 * Updating cache strategies:
 * https://youtu.be/lQ7t20gFR14
 */
const cache = new InMemoryCache({
    addTypename: true, // default
});
const client = new ApolloClient({
    cache,
    link: new HttpLink({
        uri: 'http://localhost:8080/graphql',
    }),
});

const App: React.FC = () => {

    const breakpoints = {
        xs: '480px',
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        xxl: '1600px',
    };
    const large = useMedia({
        minWidth: breakpoints.lg,
    });

    const extraLarge = useMedia({
        minWidth: breakpoints.xxl,
    });

    const windowSize = {
        large,
        extraLarge
    };
    // TODO: window size into the store!

    return (
        <ApolloProvider client={client}>
            <Pages windowSize={windowSize}/>
        </ApolloProvider>
    );
};

export default App;
