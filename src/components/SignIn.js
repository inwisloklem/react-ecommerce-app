import React, {Component} from 'react'
import {signInWithGoogle} from 'db/firebase'
import Button from 'components/Button'
import styles from 'components/SignIn.module.scss'

class SignIn extends Component {
  state = {email: '', password: ''}

  handleChange = event => {
    const {name, value} = event.target
    this.setState({[name]: value})
  }

  handleSubmit = event => {
    event.preventDefault()
    this.setState({email: '', password: ''})
  }

  render() {
    const {handleChange, handleSubmit} = this
    const {email, password} = this.state

    return (
      <div className={styles.component}>
        <h2 className={styles.title}>I already have an account</h2>
        <form>
          <label className={styles.label}>
            <h3 className={styles.text}>Name</h3>
            <input
              className={styles.input}
              name='email'
              type='text'
              value={email}
              onChange={handleChange}
            />
          </label>
          <label className={styles.label}>
            <h3 className={styles.text}>Password</h3>
            <input
              className={styles.input}
              name='password'
              type='password'
              value={password}
              onChange={handleChange}
            />
          </label>

          <div className={styles.hgap}>
            <Button type='submit' onClick={handleSubmit}>
              Sign in
            </Button>

            <Button hasAccent onClick={signInWithGoogle}>
              Sign in with Google
            </Button>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn
