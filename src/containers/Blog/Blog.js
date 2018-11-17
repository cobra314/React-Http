import React, { Component } from 'react';
import {Route, NavLink} from 'react-router-dom'

import FullPost from './FullPost/FullPost';
import Posts from './Posts/Posts'
import NewPost from './NewPost/NewPost';

import './Blog.css';

class Blog extends Component {
    render () {
        return (
            <div>
                <header className="Blog">
                    <nav>
                        <ul>
                            <li> <NavLink 
                                    to="/" 
                                    exact
                                    activeClassName='active'
                                    activeStyle={{
                                        color:'#fa923f',
                                        textDecoration: 'underline'
                                    }}>Home
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
                <Route path="/" exact component={Posts} />
                <Route path="/new-post" component={NewPost} />
                <Route path="/:id" exact component={FullPost} />
            </div>
        );
    }
}

export default Blog;