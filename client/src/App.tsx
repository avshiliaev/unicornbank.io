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
    const onProjectClick = (id) => {
        console.log(id)
    };
    return (
        <ApolloProvider client={client}>
            <QueryProjectComponent skip={false}>
                {({loading, error, data}) => {
                    if (loading) return (<div>Loading...</div>);
                    if (error) return (<div>Error!</div>);
                    return (
                        <ul>
                            {data.queryProject.map(project => {
                                return (
                                    <li key={project.id}>
                                        <h5>Title: {project.title}</h5>
                                        <h6>Tasks: {project.tasks.length}</h6>
                                        <h6>Tags: {project.tags.length}</h6>
                                        <button onClick={() => onProjectClick(project.id)}>Select</button>
                                    </li>
                                )
                            })}
                        </ul>
                    )
                }}
            </QueryProjectComponent>
        </ApolloProvider>
    );
};

export default App;
