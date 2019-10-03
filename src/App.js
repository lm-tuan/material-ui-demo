import React from 'react';
import routes from './routes/index';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';


const ShowContet = routes => {
  let result = null;
  if (routes.length > 0) {
    result = routes.map((route, index) => {
      return (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />
      );
    });
  }
  return <Switch>{result}</Switch>;
};

function App() {
  return (
    <Router>
      <div className="App">
        { ShowContet(routes) }
      </div>
    </Router>
  );
}

export default App;
