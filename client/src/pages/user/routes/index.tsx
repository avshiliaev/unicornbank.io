import { Router } from '@reach/router';
import React, { Fragment } from 'react';
import UserHomeRoute from './user.home.route';

const UserPageRoutes = () => {

  return (
    <Router primary={false} component={Fragment}>
      <UserHomeRoute path='/'/>
    </Router>
  );
};

export default UserPageRoutes;
