import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/app'
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
//function below is just to make an example.
// const Greeting = () => {
//     return <div>Hey there!</div>
// };


//export below says when the path is this, show this component.
export default (
    // don't change the fact that App will remain the parent for all the routes.
    <Route path='/' component={App}>
    {/* the one next line below is what will be rendered at just the '/' index route. everything underneath it is nested or other URLs. */}
        <IndexRoute component={PostsIndex} />
            <Route path='posts/new' component={PostsNew}></Route>
            {/* <Route path='greet' component={Greeting}> </Route>
            <Route path='greet2' component={Greeting}> </Route>        <Route path='greet3' component={Greeting}> </Route> */}
    </Route>
)

//the commented out greet routes would look like: /greet, /greet2, /greet3
