import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

import App from './modules/App'
import Seedname from './modules/Seedname'


render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
       <Route path="/:seedname" component={Seedname}/>
    </Route>
  </Router>
), document.getElementById('app'))
