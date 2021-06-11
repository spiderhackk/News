import React, { Component } from 'react'
import { Route, Router } from 'react-router-dom'
import Dashboard from './Dashboard';
import Feedback from './Feedback';
export default class Body extends Component {
    props;

    render() {
        return (
            <div>
                    
                
                <Route path="/" component={Dashboard} exact></Route>
                <Route path="/feedback" component={Feedback}exact></Route>
            </div >


        )
    }
}
