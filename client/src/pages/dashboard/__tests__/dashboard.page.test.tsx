import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import { cleanup } from '../../../../test-utils';
import DashboardPage from '../dashboard.page';
import HeaderBasic from '../../../components/layout/header.basic';

/*
Everything you pass into mockStore will be your Redux store's initial state.
So make sure you provide everything that's needed by your connected React
component to render without any problems.
 */
const mockStore = configureStore([]);
describe('My Connected React-Redux Component', () => {
  afterEach(cleanup);
  let store;
  beforeEach(() => {
    store = mockStore({
      windowSize: {},
      auth: {},
      location: {},
    });

  });
  it('renders without error', () => {

    const component = shallow(
      <Provider store={store}>
        <DashboardPage/>
      </Provider>,
    );

    expect(component).toBeTruthy();

  });
});
