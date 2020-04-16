import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Header from 'components/Header'
import Home from 'pages/Home'
import NotFound from 'pages/NotFound'
import Products from 'pages/Products'
import styles from 'App.module.scss'

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Switch>
        <Route component={Home} exact path='/' />
        <Route component={Products} exact path='/products' />
        <Route component={NotFound} path='*' />
      </Switch>
    </div>
  )
}

export default App
