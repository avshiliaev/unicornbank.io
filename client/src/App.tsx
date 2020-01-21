import React from 'react';
import {ApolloClient} from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {HttpLink} from 'apollo-link-http';
import {Layout} from 'antd';
import './App.css';
import {ApolloProvider} from '@apollo/react-common';
import Pages from './pages';

const {Content} = Layout;

/**
 * Updating cache strategies:
 * https://youtu.be/lQ7t20gFR14
 */
const cache = new InMemoryCache({
    addTypename: true,
});
const client = new ApolloClient({
    cache,
    link: new HttpLink({
        uri: 'http://localhost:8080/graphql',
    }),
});

/*
!WHY INVERSE EDGE IS AWESOME!
Add a Tag to a project, and then query the project:

mutation {
    addTag(
        input: [{ title: "awesome", project: {id: "0x2"} }]
    ) { tag {id} }
}
 */

const App: React.FC = () => {
    return (
        <Layout>
            <Layout>
                <Content style={{margin: '24px 16px 0'}}>
                    <ApolloProvider client={client}>
                        <Pages/>
                    </ApolloProvider>
                </Content>
            </Layout>
        </Layout>
    );
};

export default App;
