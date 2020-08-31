import React from 'react'
import './App.css'
import { Router, Switch, Route } from 'react-router'
import { Provider } from 'react-redux'
import history from '../../utils/history'
import store from 'store'
import Public from '../Public'

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route path="/" component={Public} />
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
