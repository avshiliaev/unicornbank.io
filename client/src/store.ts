import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import userReducer from './reducers/user.reducer';
import { createResponsiveStateReducer, responsiveStoreEnhancer } from 'redux-responsive';
import projectReducer from './reducers/project.reducer';
import projectsOverviewReducer from './reducers/projects.overview.reducer';
import { createReduxHistoryContext, reachify } from 'redux-first-history';
import { createBrowserHistory } from 'history';

const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({
  history: createBrowserHistory(),
  //others options if needed
});

const reducer = combineReducers({
  user: userReducer,
  projectsOverview: projectsOverviewReducer,
  project: projectReducer,
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
  reducer,
  composeWithDevTools(
    responsiveStoreEnhancer,
    applyMiddleware(thunk, routerMiddleware),
  ),
);

export const history = createReduxHistory(store);
export const reachHistory = reachify(history);

export default store;
