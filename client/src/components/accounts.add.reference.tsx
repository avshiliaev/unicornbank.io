import React from 'react';
import { Button } from 'antd';
import { Link } from '@reach/router';

const AccountsAddReference = () => {

  return (
    <div>
      <Button block>
        <Link to='/dashboard/new'>Add account</Link>
      </Button>
    </div>
  );
};

export default AccountsAddReference;
