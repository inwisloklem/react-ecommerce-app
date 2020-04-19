import React, {Component} from 'react'
import {signInWithGoogle} from 'db/firebase'
import Input from 'components/Input'
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
          <Input
            name='email'
            label='Email'
            value={email}
            onChange={handleChange}
          />
          <Input
            name='password'
            label='Password'
            type='password'
            value={password}
            onChange={handleChange}
          />

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
