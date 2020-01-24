import React from 'react';
import CSS from 'csstype';

const FlexContainer = ({children, justify, align}) => {

    const flexContainer: CSS.Properties = {
        display: 'flex',
        justifyContent: justify,
        alignItems: align,
        textAlign: align,
        flexDirection: 'column',
        height: '100%'
    };

    return (
        <div style={flexContainer}>
            {children}
        </div>
    )
};

export default FlexContainer;
