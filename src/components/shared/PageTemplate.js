import React from 'react';
import Menu from './Menu';

const PageTemplate = ({ children }) => {
    return (
        <div className="page">
            <Menu />
            {children}
        </div>
    )    
}


export default PageTemplate;