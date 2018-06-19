
import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import App from './pages/App';




class Routes extends Component {
  render() {
    return (
    	<div>
	    	<App/>
	    	<Switch>
	    		{/* <Route exact path="/" component={PostsIndex}/>
		        <Route exact path="/posts" component={PostsIndex}/>
		        <Route exact path="/posts/new" component={PostsNew}/>
		        <Route exact path="/posts/:id" component={PostsShow}/> */}
	        </Switch>
        </div>
    );
  }
}

export default Routes;