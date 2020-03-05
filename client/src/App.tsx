import React from 'react';
import {ApolloClient} from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {HttpLink} from 'apollo-link-http';
import {ApolloProvider} from '@apollo/react-common';
import Pages from './pages';
import './App.css';
import {useMedia} from 'react-use-media';
import gql from 'graphql-tag';
import {useQuery} from '@apollo/react-hooks';
import {typeDefs} from './resolvers';
import LoginPage from './pages/login.page';
import {Location} from '@reach/router'

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
        // TODO: add env var
        uri: 'http://localhost:8080/graphql',
        // headers: {
        //     authorization: localStorage.getItem('token'),
        //     'client-name': 'Space Explorer [web]',
        //     'client-version': '1.0.0',
        // },
    }),
    typeDefs,
});

cache.writeData({
    data: {
        isLoggedIn: !!localStorage.getItem('token'),
        userName: localStorage.getItem('username'),
    },
});

/**
 * Render our app
 * - We wrap the whole app with ApolloProvider, so any component in the app can
 *    make GraphqL requests. Our provider needs the client we created above,
 *    so we pass it as a prop
 * - We need a router, so we can navigate the app. We're using Reach router for this.
 *    The router chooses between which component to render, depending on the url path.
 *    ex: localhost:3000/login will render only the `Login` component
 */

const IS_LOGGED_IN = gql`
    query IsUserLoggedIn {
        isLoggedIn @client
        userName @client
    }
`;

function IsLoggedIn({windowSize, location}) {
    const {data} = useQuery(IS_LOGGED_IN);
    return data.isLoggedIn ? <Pages windowSize={windowSize} userName={data.userName} location={location}/> :
        <LoginPage windowSize={windowSize}/>;
}

const App: React.FC = () => {

    // TODO: window size into the store!
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

    return (
        <ApolloProvider client={client}>
            <Location>
                {props => {
                    return (<IsLoggedIn windowSize={windowSize} location={props.location.pathname}/>)
                }}
            </Location>
        </ApolloProvider>
    );
};

export default App;
