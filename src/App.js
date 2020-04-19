import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import {auth, createUserProfileDocument} from 'db/firebase'
import Auth from 'pages/Auth'
import Header from 'components/Header'
import Home from 'pages/Home'
import NotFound from 'pages/NotFound'
import Shop from 'pages/Shop'
import styles from 'App.module.scss'

class App extends Component {
  state = {currentUser: null}
  unsubscribeFromAuthStateChanged = null

  componentDidMount() {
    this.unsubscribeFromAuthStateChanged = auth.onAuthStateChanged(user => {
      createUserProfileDocument(user)
      this.setState({currentUser: user})
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuthStateChanged()
  }

  render() {
    const {currentUser} = this.state

    return (
      <div className={styles.app}>
        <Header currentUser={currentUser} />
        <Switch>
          <Route component={Home} exact path='/' />
          <Route component={Auth} exact path='/signin' />
          <Route component={Shop} exact path='/shop' />
          <Route component={NotFound} path='*' />
        </Switch>
      </div>
    )
  }
}

export default App
