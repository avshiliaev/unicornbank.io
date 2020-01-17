import React from 'react';
import {ApolloClient} from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {HttpLink} from 'apollo-link-http';
import {ApolloProvider} from '@apollo/react-hoc';
import {GetProjectComponent, withGetProject} from './api/interfaces/types.d';

const cache = new InMemoryCache();
const client = new ApolloClient({
    cache,
    link: new HttpLink({
        uri: 'http://localhost:8080/graphql',
    })
});

const App: React.FC = () => {
    console.log(withGetProject());
    return (
        <ApolloProvider client={client}>
            <GetProjectComponent skip={false}>
                {({loading, error, data}) => {
                    if (loading) {
                        return (
                            <div>
                                Loading...
                            </div>
                        )
                    }
                    return error
                        ? (<div>{JSON.stringify(error)}</div>)
                        : (<div>this is data: {data}</div>)
                }}
            </GetProjectComponent>
        </ApolloProvider>
    );
};

export default App;
