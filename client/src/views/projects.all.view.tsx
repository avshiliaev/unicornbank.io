import React, {Fragment} from 'react';
import ProjectsAddReference from '../components/projects.add.reference';
import ProfileStatistics from '../components/profile.statistics';
import FlexGridDashboard from '../components/layout/flex.grid.dashboard';
import {useQuery} from '@apollo/react-hooks';
import {GET_PROJECTS_OF_USER} from './docs/projects.documents';
import ProjectsList from '../components/projects.list';


const ProjectsAllView = (props) => {

    const {data, loading, error} = useQuery(GET_PROJECTS_OF_USER, {variables: {filter: {username: {eq: props.userName}}}});
    if (loading) return (<div>Loading...</div>);
    if (error) return (<div>Error!</div>);

    const projects = data.queryUser[0].roles.map((role) => role.project);

    return (
        <Fragment>
            <FlexGridDashboard
                windowSize={props.windowSize}
                slotOne={<ProfileStatistics windowSize={props.windowSize} userName={props.userName}/>}
                slotTwo={<ProjectsAddReference/>}
                mainContent={<ProjectsList projects={projects} windowSize={props.windowSize}/>}
            />
        </Fragment>
    )
};

export default ProjectsAllView;
