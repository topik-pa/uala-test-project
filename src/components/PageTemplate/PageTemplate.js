import React from 'react';
import Menu from './Menu/Menu';

const PageTemplate = ({ children }) => {
    return (
        <div className="page">
            <Menu />
            {children}
        </div>
    )    
}


export default PageTemplate;