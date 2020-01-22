import React from 'react';
import {ApolloClient} from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {HttpLink} from 'apollo-link-http';
import {ApolloProvider} from '@apollo/react-common';
import Pages from './pages';
import './App.css';
import {BreakpointProvider} from './providers/breakpoint.provider';
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

    const isWide = useMedia({
        minWidth: 1000,
    });

    return (
        <ApolloProvider client={client}>
            <BreakpointProvider queries={{small: !isWide}}>
                <Pages/>
            </BreakpointProvider>
        </ApolloProvider>
    );
};

export default App;
