import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost'
import FullPost from './FullPost/FullPost';

import './Blog.css';



class Blog extends Component {

    render () {
        return (
            
            <div className="Blog">
                <header>
                    <nav>
                    <ul>     
                        <li><NavLink activeClassName="active" exact to="/">Home</NavLink></li>
                        <li><NavLink to={{
                            pathname: "/new-post",
                            hash: '#submit',
                            search: '?quick-submit'
                        }}>New Post</NavLink></li>
                    </ul>
               
                    </nav>
                     
                </header>
                {/* <Route exact path="/" render={() => <h1>Home</h1>} />
                <Route path="/" render={() => <h1>Flat</h1>} /> */}
                <Switch>
                    <Route exact path="/" component={Posts} />
                    <Route path="/new-post" component={NewPost} />
                    <Route exact path="/:id" component={FullPost} />
                </Switch>
                
                
                
            </div>
            
        );
    }
}

export default Blog;