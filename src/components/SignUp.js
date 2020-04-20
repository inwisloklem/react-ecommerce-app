import React, {Component} from 'react'
import {auth, createUserProfileDocument} from 'db/firebase'
import Input from 'components/Input'
import Button from 'components/Button'
import styles from 'components/SignUp.module.scss'

class SignUp extends Component {
  state = {confirmPassword: '', displayName: '', email: '', password: ''}

  handleChange = event => {
    const {name, value} = event.target
    this.setState({[name]: value})
  }

  handleSubmit = async event => {
    event.preventDefault()
    const {confirmPassword, password} = this.state

    if (confirmPassword === password) {
      try {
        const {displayName, email, password} = this.state
        const {user} = await auth.createUserWithEmailAndPassword(email, password)

        await createUserProfileDocument(user, {displayName})
        this.setState({confirmPassword: '', displayName: '', email: '', password: ''})
      }
      catch (error) {
        console.error(error)
      }
    }
  }

  render() {
    const {handleChange, handleSubmit} = this
    const {confirmPassword, displayName, email, password} = this.state

    return (
      <div className={styles.component}>
        <h2 className={styles.title}>I don't have an account</h2>
        <form>
          <Input
            name='displayName'
            label='Display Name'
            value={displayName}
            onChange={handleChange}
          />
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
          <Input
            name='confirmPassword'
            label='Confirm password'
            type='password'
            value={confirmPassword}
            onChange={handleChange}
          />

          <Button type='submit' onClick={handleSubmit}>
            Sign up
          </Button>
        </form>
      </div>
    )
  }
}

export default SignUp
