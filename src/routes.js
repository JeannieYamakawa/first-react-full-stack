import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/app'

//function below is just to make an example.
const Greeting = () => {
    return <div>Hey there!</div>
};


//export below says when the path is this, show this component.
export default (
    <Route path='/' component={App}>
        <Route path='greet' component={Greeting}> </Route>
        <Route path='greet2' component={Greeting}> </Route>        <Route path='greet3' component={Greeting}> </Route>
    </Route>
)

//the commented out greet routes would look like: /greet, /greet2, /greet3
