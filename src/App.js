import React, { Fragment } from 'react';
import './App.css';
import { Route, withRouter } from 'react-router-dom';
import Header from '../src/components/header.js';
import NavBar from '../src/components/navbar.js';
import Body from '../src/components/body.js';
let routes = [
  {
    name: 'Array',
    url: 'array',
  },
  {
    name: 'Object',
    url: 'object',
  },
  {
    name: 'String',
    url: 'string',
  },
];

function App() {
  return (
    <div className="App bg-gray-100 h-screen">
      <Header />
      <div className="flex mb-4 w-4/5 mx-auto mt-6">
        <NavBar routes={routes} />
        <Fragment>
          {routes.map(({ name, url }) => {
            return (
              <Route
                path={`/${url}`}
                key={name}
                exact
                render={() => <Body name={url} />}
              />
            );
          })}
        </Fragment>
      </div>
    </div>
  );
}

export default withRouter(App);
