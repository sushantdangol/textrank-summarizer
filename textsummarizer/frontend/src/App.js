import React from 'react';
import Summarize from './modules/view/Summarize';
import Home from './modules/view/Home';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


export default class App extends React.Component{
    render() {
        return(
            <Router>
                <Switch>
                    <div>
                        <Route path="/" exact component={ Home } />
                        <Route path="/summarize" component={ Summarize } />
                    </div>
                </Switch>
            </Router>
        )
    }
}