import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import userReducer from './reducers/user.reducer';
import { createResponsiveStateReducer, responsiveStoreEnhancer } from 'redux-responsive';
import projectReducer from './reducers/project.reducer';

const reducer = combineReducers({
  user: userReducer,
  projects: projectReducer,
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
    applyMiddleware(thunk),
  ),
);

export default store;
