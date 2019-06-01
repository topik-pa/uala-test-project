import React from 'react';
// import { Link } from 'react-router-dom'
import PageTemplate from './shared/PageTemplate';

const NotFound404 = ({location}) => 
    <PageTemplate>
        <section className="not-found">
            <h1>Page not found at '{location.pathname}'</h1>
        </section>
    </PageTemplate>

export default NotFound404;    