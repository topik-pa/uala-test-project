import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './components/app/App';
import About from './components/About';
import NotFound404 from './components/NotFound404';
import {
    HashRouter,
    Route,
    Switch
} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

window.React = React

//ReactDOM.render(<App />, document.getElementById('root'));

render(
    <HashRouter>
        <div className="main">
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/about" component={About} />
                <Route component={NotFound404} />
            </Switch>
        </div>        
    </HashRouter>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
