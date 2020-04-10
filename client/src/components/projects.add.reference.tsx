import React from 'react';
import { Button } from 'antd';
import { Link } from '@reach/router';

const ProjectsAddReference = () => {

  return (
    <div>
      <Button block>
        <Link to='/dashboard/new'>Add project</Link>
      </Button>
    </div>
  );
};

export default ProjectsAddReference;
