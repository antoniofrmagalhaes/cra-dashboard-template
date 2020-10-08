import React from 'react'
import { Router } from 'react-router-dom'

import ThemeContainer from './contexts/theme/ThemeContainer'

import Routes from './routes'
import history from './services/history'

import AuthProvider from './contexts/AuthContext'

const App: React.FC = () => {
  return (
    <ThemeContainer>
      <AuthProvider>
        <Router history={history}>
          <Routes />
        </Router>
      </AuthProvider>
    </ThemeContainer>
  )
}

export default App
