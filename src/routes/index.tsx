import React from 'react'
import { Switch } from 'react-router-dom'

import Route from './Route'

import Home from '../pages/Home'
import Login from '../pages/Login'

const routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact isPrivate component={Home} />
      <Route path="/login" component={Login} />
    </Switch>
  )
}

export default routes
