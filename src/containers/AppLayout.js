import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';

import Routes from '../router/AppRouter';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

export default class Home extends Component {
    render() {
        return (
            <div className="d-flex" id="main-wrapper">
                <Sidebar />
                <div id="content-wrapper">
                        <Header/>

                        <div className="content-dynamic">
                            <Switch>
                                { Routes.map((route, index) => (
                                    <Route
                                        path={route.path}
                                        exact
                                        name={route.name}
                                        render={props => <route.template {...props} />  } />
                                ))}
                            </Switch>
                        </div>
                        
                    </div>
            </div>
        )
    }
}