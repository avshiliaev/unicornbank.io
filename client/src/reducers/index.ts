import { combineReducers } from 'redux';
import authReducer from './auth.reducer';
import accountsOverviewReducer from './accounts.overview.reducer';
import accountReducer from './account.reducer';
import userReducer from './user.reducer';
import { createResponsiveStateReducer } from 'redux-responsive';
import { createReduxHistoryContext } from 'redux-first-history';
import { createBrowserHistory } from 'history';

const { routerReducer } = createReduxHistoryContext({
  history: createBrowserHistory(),
});

const rootReducer = combineReducers({
  auth: authReducer,
  accountsOverview: accountsOverviewReducer,
  account: accountReducer,
  user: userReducer,
  router: routerReducer,
  windowSize: createResponsiveStateReducer({
    extraSmall: 480,
    small: 576,
    medium: 768,
    large: 992,
    extraLarge: 1200,
  }),
});

export default rootReducer;
