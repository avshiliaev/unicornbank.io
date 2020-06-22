import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import authReducer from './reducers/auth.reducer';
import { createResponsiveStateReducer, responsiveStoreEnhancer } from 'redux-responsive';
import accountReducer from './reducers/account.reducer';
import accountsOverviewReducer from './reducers/accounts.overview.reducer';
import { createReduxHistoryContext, reachify } from 'redux-first-history';
import { createBrowserHistory } from 'history';
import userReducer from './reducers/user.reducer';
import createSagaMiddleware from 'redux-saga';
import { getAccountsSaga } from './sagas/accounts.sagas';

const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({
  history: createBrowserHistory(),
});
const sagaMiddleware = createSagaMiddleware();

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

const store = createStore(
  rootReducer,
  composeWithDevTools(
    responsiveStoreEnhancer,
    applyMiddleware(sagaMiddleware, routerMiddleware),
  ),
);
sagaMiddleware.run(getAccountsSaga);

export const history = createReduxHistory(store);
export const reachHistory = reachify(history);

export default store;
