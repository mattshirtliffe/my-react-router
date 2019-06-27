import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import './Blog.css';
import Posts from './Posts/Posts';
// import NewPost from './NewPost/NewPost'
// import FullPost from './FullPost/FullPost';

import asyncComponent from '../../hoc/asyncComponent';

const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
});

class Blog extends Component {

    state = {
        auth: true
    }

    render () {

        const showNewPost = this.state.auth ? <Route path="/new-post" component={AsyncNewPost} /> : null

        return (
            
            <div className="Blog">
                <header>
                    <nav>
                    <ul>     
                        <li><NavLink activeClassName="active" exact to="/posts">Posts</NavLink></li>
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
                    {showNewPost}
                    <Route path="/posts" component={Posts} />
                    <Redirect from="/" to="/posts" />
                    <Route render={() => <h1>Not Found</h1>} />
                    {/* <Route path="/" component={Posts} /> */}
                </Switch>
                
                
                
            </div>
            
        );
    }
}

export default Blog;