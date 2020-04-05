import React, { useState } from 'react';
import FlexGridProject from '../../../components/layout/flex.grid.project';
import BreadCrumbBasic from '../../../components/layout/breadcrumb.basic';
import { connect } from 'react-redux';
import TasksTable from '../../../components/tasks.table';
import { Project } from '../../../sdk/graphql-zeus';
import { Button, Drawer } from 'antd';

const something = ({children}) => {

  const [state, toggle] = useState(false);

  return (
    <div style={{ marginTop: '55px' }}>
      <Button type="primary" onClick={() => toggle(!state)}>
        Open
      </Button>
      <Drawer
        width={200}
        title="Basic Drawer"
        placement={'left'}
        closable={false}
        onClose={() => toggle(!state)}
        visible={state}
      >
        {children}
      </Drawer>
    </div>
  );
};

const ProjectHomeRoute = ({ windowSize, location, project, ...rest }) => {

  const theProject: Project = project;

  return theProject.id !== undefined
    ? (
      <FlexGridProject
        breadCrumbs={<BreadCrumbBasic location={location}/>}
        windowSize={windowSize}
        slotOne={<TasksTable tasks={theProject.tasks}/>}
        slotTwo={(<div>Right Column</div>)}
      />
    )
    : <div/>;
};

const mapStateToProps = (state) => {
  return {
    windowSize: state.windowSize.greaterThan,
    location: state.router.location,
    project: state.project,
  };
};

export default connect(mapStateToProps)(ProjectHomeRoute);

