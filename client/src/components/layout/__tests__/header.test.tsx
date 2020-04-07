import React from 'react';
import { shallow } from 'enzyme';
import { cleanup } from '../../../../test-utils';
import HeaderBasic from '../header.basic';

describe('Header', () => {
  // automatically unmount and cleanup DOM after the test is finished.
  afterEach(cleanup);

  it('renders without error', () => {

    const header = shallow(
      <HeaderBasic
        windowSize={{ large: true }}
        slotLeft={(<div>Left</div>)}
        slotMiddle={(<div>Middle</div>)}
        slotRight={(<div>Right</div>)}
      />,
    );
    expect(header.contains(<div>Left</div>)).toBeTruthy();
    expect(header.contains(<div>Middle</div>)).toBeTruthy();
    expect(header.contains(<div>Right</div>)).toBeTruthy();

  });
});
