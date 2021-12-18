import React from 'react'
import EditorPage from './components/EditorPage/EditorPage'
import ArticlesPage from './components/ArticlesPage/ArticlesPage'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import './App.css'

function App() {
  return (
    <Router>
      <div className="site-wrapper">
        <Switch>
          <Route path="/editor" exact={true}>
            <EditorPage />
          </Route>
          <Route path="/" exact={true}>
            <ArticlesPage />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App