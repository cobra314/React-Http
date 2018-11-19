import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'

import Posts from './Posts/Posts'
import asyncComponent from '../../hoc/asyncComponent';
import './Blog.css';

const AsyncComponent = asyncComponent(() => {
    return import('./NewPost/NewPost');
});

class Blog extends Component {
    state = {
        auth: true
    };

    render () {
        return (
            <div>
                <header className="Blog">
                    <nav>
                        <ul>
                            <li> <NavLink 
                                    to="/posts/" 
                                    exact
                                    activeClassName='active'
                                    activeStyle={{
                                        color:'#fa923f',
                                        textDecoration: 'underline'
                                    }}>Posts
                                </NavLink>
                            </li>
                            <li> <NavLink 
                                    to={{
                                        pathname: '/new-post',
                                        hash: '#submit',
                                        search: '?quick-subtime=true'}}>New Post
                                </NavLink> 
                            </li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    {this.state.auth ? <Route path="/new-post" component={AsyncComponent} /> : null }
                    <Route path="/posts/" component={Posts} />
                    <Route render={ ()=><h1>Not found</h1> } />
                    <Redirect from="/" to="/posts" />
                </Switch>
            </div>
        );
    }
}

export default Blog;