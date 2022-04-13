import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { PrivateRoute } from './__components';

// import Loadable from 'react-loadable';
import './App.scss';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));

// Pages
const Login = React.lazy(() => import('./views/Login'));
// const Main = React.lazy(() => import('./views/_User/Main'));
// const PublicUser = React.lazy(() => import('./containers/PublicUserLayout/Layout'));
// const About = React.lazy(() => import('./views/About'));

class App extends Component {
  render() {
    // console.log('==========App: render()=====================')
    return (
      <BrowserRouter>
        <React.Suspense fallback={loading()}>
          <Switch>
            <Route exact path="/login" name="Login Page" render={props => <Login {...props} />} />
            {/* <Route exact path="/main" name="Main Page" render={props => <Main {...props} />} /> */}
            {/* <Route exact path="/PublicUser" name="PublicUser Page" render={props => <PublicUser {...props} />} /> */}
            {/* <Route exact path="/about" name="About" render={props => <About {...props} />} /> */}
            <PrivateRoute path="/" component={DefaultLayout} default='/login' />
          </Switch>
        </React.Suspense>
      </BrowserRouter>
    );
  }
}
export default App;
