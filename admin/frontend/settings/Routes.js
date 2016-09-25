import React      from 'react';
import Template   from '../redux/components/Templates';
import Orders     from '../redux/components/Orders';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

module.exports = (
  <Router history={browserHistory}>
    <Route path="/" component={Template}>
      <IndexRoute component={Orders}/>
    </Route>
  </Router>
)
