const ActionTypes = {

  // Query multiple accounts
  QUERY_ACCOUNTS: 'QUERY_ACCOUNTS',
  QUERY_ACCOUNTS_SUCCESS: 'QUERY_ACCOUNTS_SUCCESS',
  QUERY_ACCOUNTS_ERROR: 'QUERY_ACCOUNTS_ERROR',

  // Get one account
  GET_ACCOUNT_DETAIL: 'GET_ACCOUNT_DETAIL',
  GET_ACCOUNT_DETAIL_SUCCESS: 'GET_ACCOUNT_DETAIL_SUCCESS',
  GET_ACCOUNT_DETAIL_ERROR: 'GET_ACCOUNT_DETAIL_ERROR',

  // Create new account
  ADD_ACCOUNT: 'ADD_ACCOUNT',

  // Log in
  LOG_IN: 'LOG_IN',
  LOG_IN_SUCCESS: 'LOG_IN_SUCCESS',
  LOG_IN_ERROR: 'LOG_IN_ERROR',

  // Log out
  LOG_OUT: 'LOG_OUT',

  // Get one user
  GET_USER: 'GET_USER',
  GET_USER_SUCCESS: 'GET_USER_SUCCESS',
  GET_USER_ERROR: 'GET_USER_ERROR',

};

const ApiEndpoints = {
  // TODO: Difference between:
  // QUERY_ACCOUNTS and GET_USER
  GET_USER: {
    service: '/profiles',
    handler: '/query',
    path: function() {
      return this.service + this.handler
    },
  },
  QUERY_ACCOUNTS: {
    service: '/profiles',
    handler: '/query',
    path: function() {
      return this.service + this.handler
    },
  },
  GET_ACCOUNT_DETAIL: {
    service: '/profiles',
    handler: '/get',
    path: function() {
      return this.service + this.handler
    },
  },
  ADD_ACCOUNT: {
    service: '/accounts',
    handler: '/create',
    path: function() {
      return this.service + this.handler
    },
  },
  LOG_IN: {
    service: '/auth',
    handler: '/login',
    path: function() {
      return this.service + this.handler
    },
  },
  LOG_OUT: {
    service: '/auth',
    handler: '/logout',
    path: function() {
      return this.service + this.handler
    },
  },
};

export { ActionTypes, ApiEndpoints };
