import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { cleanup } from '../../../../test-utils';
import DashboardPage from '../dashboard.page';
import { mount } from 'enzyme';
import thunk from 'redux-thunk';

// https://www.robinwieruch.de/react-connected-component-test
// https://hackernoon.com/testing-react-components-with-jest-and-enzyme-41d592c174f
// jestjs.io/en/

/*
Everything you pass into mockStore will be your Redux store's initial state.
So make sure you provide everything that's needed by your connected React
component to render without any problems.
 */

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useEffect: (f) => f(),
}));

describe('My Connected React-Redux Component', () => {

  let mockStore;
  let store;
  let props;

  beforeEach(() => {

    mockStore = configureStore([thunk]);
    store = mockStore({
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

    props = {
      initProjectsOverview: jest.fn(),
    };

  });

  afterEach(cleanup);

  it('renders without error', async () => {

    const wrapper = mount(
      <Provider store={store}>
        <DashboardPage {...props}>
          <div>Body</div>
        </DashboardPage>
      </Provider>,
    );

    wrapper.update();

    expect(props.initProjectsOverview).toHaveBeenCalledTimes(1)

  });
});


