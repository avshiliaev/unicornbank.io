import React from 'react';
import {ApolloClient} from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {HttpLink} from 'apollo-link-http';
import {ApolloProvider} from '@apollo/react-hoc';
import {QueryProjectComponent} from './api/interfaces/types.d';

const cache = new InMemoryCache();
const client = new ApolloClient({
    cache,
    link: new HttpLink({
        uri: 'http://localhost:8080/graphql',
    }),
});

const App: React.FC = () => {
    return (
        <ApolloProvider client={client}>
            <QueryProjectComponent skip={false}>
                {({loading, error, data}) => {
                    if (loading) return(<div>Loading...</div>);
                    if (error) return(<div>Error!</div>);
                    return (
                        <div>
                            {data.queryProject.map(project => project.title)}
                        </div>
                    )
                }}
            </QueryProjectComponent>
        </ApolloProvider>
    );
};

export default App;
