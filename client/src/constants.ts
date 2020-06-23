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
  QUERY_ACCOUNTS: '/queries/getUserState',
  GET_ACCOUNT_DETAIL: '/queries/getAccountDetail',
  ADD_ACCOUNT: '',
  LOG_IN: '/auth/logIn',
  LOG_OUT: '/auth/logOut',
  GET_USER: '/queries/getUser',
}

export { ActionTypes, ApiEndpoints };
