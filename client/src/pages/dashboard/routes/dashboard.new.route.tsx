import React, { Fragment } from 'react';
import FlexGridDashboard from '../../../components/layout/flex.grid.dashboard';
import { connect } from 'react-redux';
import ProjectsForm from '../../../components/projects.form';
import { addProject } from '../../../reducers/project.reducer';
import { AddProjectInput } from '../../../sdk/graphql-zeus';
import { navigate } from "@reach/router"

const DashboardNewRoute = ({ windowSize, addProject, project, user, ...rest }) => {

  const formOnFinish = async (value) => {
    const { title, description } = value;
    const addProjectInout: AddProjectInput = { title, description, hosts: [{ id: user.userId }] };
    await addProject(addProjectInout);

    console.log(project)
    // await navigate(`/project/${project.id}/home`)
  };

  return (
    <Fragment>
      <FlexGridDashboard
        windowSize={windowSize}
        slotOne={<div>Slot One</div>}
        slotTwo={<div>Slot Two</div>}
        mainContent={<ProjectsForm onFinish={formOnFinish}/>}
      />
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    windowSize: state.windowSize.greaterThan,
    user: state.user,
    project: state.project,
  };
};

const mapDispatchToProps = {
  addProject,
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardNewRoute);
