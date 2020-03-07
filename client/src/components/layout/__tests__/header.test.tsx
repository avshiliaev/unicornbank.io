import React from 'react';

import {cleanup, render} from '../../../../test-utils';
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
        render(
            <HeaderBasic
                windowSize={{large: true}}
                slotLeft={(<div>Left</div>)}
                slotMiddle={(<div>Middle</div>)}
                slotRight={(<div>Right</div>)}
            />
        );
    });
    it('renders without error for mobile', () => {
        render(
            <HeaderBasic
                windowSize={{large: false}}
                slotLeft={(<div>Left</div>)}
                slotMiddle={(<div>Middle</div>)}
                slotRight={(<div>Right</div>)}
            />
        );
    });
});
