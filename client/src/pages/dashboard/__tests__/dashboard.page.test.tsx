import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { cleanup } from '../../../../test-utils';
import DashboardPage from '../dashboard.page';
import { UserState } from '../../../reducers/auth.reducer';
import { shallow } from 'enzyme';

// https://www.robinwieruch.de/react-connected-component-test
// https://hackernoon.com/testing-react-components-with-jest-and-enzyme-41d592c174f

/*
Everything you pass into mockStore will be your Redux store's initial state.
So make sure you provide everything that's needed by your connected React
component to render without any problems.
 */
const mockStore = configureStore([]);
describe('My Connected React-Redux Component', () => {
  afterEach(cleanup);

  it('renders without error', () => {

    const Body = () => {
      return (
        <div>Body</div>
      );
    };

    const auth: UserState = { isLoggedIn: true, userId: '1', userName: 'testUser' };

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
      auth,
      router: {
        location: {},
      },
    });

    const wrapper = shallow(
      <Provider store={store}>
        <DashboardPage>
          <Body/>
        </DashboardPage>
      </Provider>,
    );

    expect(wrapper).toMatchSnapshot();

  });
});


