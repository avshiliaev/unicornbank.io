import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { responsiveStoreEnhancer } from 'redux-responsive';
import { createReduxHistoryContext, reachify } from 'redux-first-history';
import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/accounts.sagas';
import rootReducer from './reducers';

const { createReduxHistory, routerMiddleware } = createReduxHistoryContext({
  history: createBrowserHistory(),
});
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(
    responsiveStoreEnhancer,
    applyMiddleware(sagaMiddleware, routerMiddleware),
  ),
);
sagaMiddleware.run(rootSaga);

export const history = createReduxHistory(store);
export const reachHistory = reachify(history);

export default store;
