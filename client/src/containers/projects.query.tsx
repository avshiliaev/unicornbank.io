import React from 'react';
import {QueryProjectComponent} from '../api/interfaces/types.d';
import ProjectsList from '../components/projects.list';

const ProjectsQuery = () => {

    return (
        <QueryProjectComponent skip={false}>
            {({loading, error, data}) => {
                if (loading) return (<div>Loading...</div>);
                if (error) return (<div>Error!</div>);
                return (<ProjectsList data={data}/>)
            }}
        </QueryProjectComponent>
    )
};

export default ProjectsQuery;
