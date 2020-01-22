import React, {createContext, useContext, useEffect, useState} from 'react';

interface Breakpoint {
    small: boolean
}

const BreakpointContext = createContext<Breakpoint>({small: false});

const BreakpointProvider = ({children, queries}) => {
    const [queryMatch, setQueryMatch] = useState({small: false});

    useEffect(() => {
        setQueryMatch(queries)
    }, [queries]);

    return (
        <BreakpointContext.Provider value={queryMatch}>
            {children}
        </BreakpointContext.Provider>
    )

};

function useBreakpoint() {
    return useContext(BreakpointContext);
}

export {useBreakpoint, BreakpointProvider};
