import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { cleanup } from '../../../../test-utils';
import DashboardPage from '../dashboard.page';
import { mount } from 'enzyme';

// https://www.robinwieruch.de/react-connected-component-test
// https://hackernoon.com/testing-react-components-with-jest-and-enzyme-41d592c174f
// jestjs.io/en/

/*
Everything you pass into mockStore will be your Redux store's initial state.
So make sure you provide everything that's needed by your connected React
component to render without any problems.
 */
const mockStore = configureStore([]);
describe('My Connected React-Redux Component', () => {
  afterEach(cleanup);

  it('renders without error', () => {

    const store = mockStore({
      windowSize: {
        greaterThan: {
          extraSmall: false,
          small: false,
          medium: false,
          large: true,
          extraLarge: false,
        },
      },
      auth: { isLoggedIn: true, userId: '1', userName: 'testUser' },
      router: {
        location: { pathname: '/dashboard/home' },
      },
    });

    const props = {
      initProjectsOverview: jest.fn(),
    };

    const wrapper = mount(
      <Provider store={store}>
        <DashboardPage {...props}>
          <div>Body</div>
        </DashboardPage>
      </Provider>,
    );

    expect(wrapper).toBeTruthy();

  });
});


