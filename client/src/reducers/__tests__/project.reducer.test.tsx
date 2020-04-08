import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { getProject } from '../project.reducer';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('dispatches success', async () => {
    const dispatch = jest.fn();
    await getProject('0x9')(dispatch);
    expect(dispatch).toHaveBeenLastCalledWith({
      type: 'GET_PROJECT',
      data: {
        description: 'Let’s jump into Rust by working through a hands-on project together! This chapter introduces you to a few common Rust concepts by showing you how to use them in a real program.',
        id: '0x9',
        tasks: [],
      },
    });
  });
});
