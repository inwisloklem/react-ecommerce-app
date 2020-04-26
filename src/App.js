import React, {Component} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {CHECKOUT_PATHNAME} from 'config/constants'
import {auth, createUserProfileDocument} from 'db/firebase'
import {getCurrentUser} from 'store/userSelectors'
import {getQuantity} from 'store/cartSelectors'
import {setCurrentUser} from 'store/actions'
import Auth from 'pages/Auth'
import Checkout from 'pages/Checkout'
import Header from 'components/Header'
import Home from 'pages/Home'
import NotFound from 'pages/NotFound'
import Shop from 'pages/Shop'
import styles from 'App.module.scss'

class App extends Component {
  unsubscribeFromAuthStateChanged = null

  componentDidMount() {
    const {setCurrentUser} = this.props

    this.unsubscribeFromAuthStateChanged = auth.onAuthStateChanged(async user => {
      if (user) {
        const userRef = await createUserProfileDocument(user)

        userRef.onSnapshot(snapshot => {
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
    const {currentUser, quantity} = this.props

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
          <Route
            exact
            path={CHECKOUT_PATHNAME}
            render={() => (quantity > 0 ? <Checkout /> : <Redirect to='/' />)}
          />
          <Route component={Shop} exact path='/shop' />
          <Route component={NotFound} path='*' />
        </Switch>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setCurrentUser(user) {
      return dispatch(setCurrentUser(user))
    },
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: getCurrentUser,
  quantity: getQuantity,
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
