import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import authReducer from './reducers/auth.reducer';
import { createResponsiveStateReducer, responsiveStoreEnhancer } from 'redux-responsive';
import projectReducer from './reducers/project.reducer';
import projectsOverviewReducer from './reducers/projects.overview.reducer';
import { createReduxHistoryContext, reachify } from 'redux-first-history';
import { createBrowserHistory } from 'history';
import userReducer from './reducers/user.reducer';
import starsReducer from './reducers/stars.reducer';

const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({
  history: createBrowserHistory(),
  //others options if needed
});

const reducer = combineReducers({
  auth: authReducer,
  projectsOverview: projectsOverviewReducer,
  project: projectReducer,
  stars: starsReducer,
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
  reducer,
  composeWithDevTools(
    responsiveStoreEnhancer,
    applyMiddleware(thunk, routerMiddleware),
  ),
);

export const history = createReduxHistory(store);
export const reachHistory = reachify(history);

export default store;
