import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './home'
import Second from './second'



function Routes() {

    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/order" component={Second} />
            </Switch>

        </Router>


    )

}

export default Routes