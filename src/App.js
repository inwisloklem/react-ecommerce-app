import React, {Component} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import {auth, createUserProfileDocument} from 'db/firebase'
import {setCurrentUser} from 'store/actions'
import store from 'store'
import Auth from 'pages/Auth'
import Header from 'components/Header'
import Home from 'pages/Home'
import NotFound from 'pages/NotFound'
import Shop from 'pages/Shop'
import styles from 'App.module.scss'

class App extends Component {
  unsubscribeFromAuthStateChanged = null

  componentDidMount() {
    const {setCurrentUser} = this.props

    this.unsubscribeFromAuthStateChanged = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfileDocument(user)

        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          })
        })
      }
      else {
        setCurrentUser(null)
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuthStateChanged()
  }

  render() {
    const {currentUser} = this.props

    return (
      <div className={styles.app}>
        <Header />
        <Switch>
          <Route component={Home} exact path='/' />
          <Route
            exact
            path='/signin'
            render={() => (currentUser ? <Redirect to='/' /> : <Auth />)}
          />
          <Route component={Shop} exact path='/shop' />
          <Route component={NotFound} path='*' />
        </Switch>
      </div>
    )
  }
}

function mapStateToProps({user}) {
  return {
    currentUser: user.currentUser,
  }
}

function mapDispatchToProps() {
  return {
    setCurrentUser(user) {
      return store.dispatch(setCurrentUser(user))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
