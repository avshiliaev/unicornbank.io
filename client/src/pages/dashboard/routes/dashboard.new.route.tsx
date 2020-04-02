import React, { Fragment } from 'react';
import FlexGridDashboard from '../../../components/layout/flex.grid.dashboard';
import { connect } from 'react-redux';
import ProjectsForm from '../../../components/projects.form';
import { AddProjectInput } from '../../../sdk/graphql-zeus';
import { addProjectAsHost } from '../../../reducers/projects.overview.reducer';

const DashboardNewRoute = ({ windowSize, addProjectAsHost, user, ...rest }) => {

  const formOnFinish = async (value) => {
    const { title, description } = value;
    const addProjectInout: AddProjectInput = { title, description, hosts: [{ id: user.userId }] };
    await addProjectAsHost(addProjectInout);

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
    // project: state.project,
  };
};

const mapDispatchToProps = {
  addProjectAsHost,
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardNewRoute);
