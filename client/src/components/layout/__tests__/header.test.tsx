import React from 'react';
import {shallow} from 'enzyme';
import {cleanup} from '../../../../test-utils';
import HeaderBasic from "../header.basic";

Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // deprecated
        removeListener: jest.fn(), // deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
    })),
});

describe('Header', () => {
    // automatically unmount and cleanup DOM after the test is finished.
    afterEach(cleanup);

    it('renders without error for desktop', () => {

        const header = shallow(
            <HeaderBasic
                windowSize={{large: true}}
                slotLeft={(<div>Left</div>)}
                slotMiddle={(<div>Middle</div>)}
                slotRight={(<div>Right</div>)}
            />
        );
        expect(header.contains(<div>Left</div>)).toBeTruthy();
        expect(header.contains(<div>Middle</div>)).toBeTruthy();
        expect(header.contains(<div>Right</div>)).toBeTruthy()

    });
    it('renders without error for mobile', () => {
        const header = shallow(
            <HeaderBasic
                windowSize={{large: false}}
                slotLeft={(<div>Left</div>)}
                slotMiddle={(<div>Middle</div>)}
                slotRight={(<div>Right</div>)}
            />
        );
        expect(header.contains(<div>Middle</div>)).toBeTruthy()
    });
});
