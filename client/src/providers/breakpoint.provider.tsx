import React, {createContext, useContext, useEffect, useState} from 'react';


const BreakpointContext = createContext({});

const BreakpointProvider = ({children, queries}) => {
    const [queryMatch, setQueryMatch] = useState({});

    useEffect(() => {
        setQueryMatch({bla: 'bla'})
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
