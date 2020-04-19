import React, {Component} from 'react'
import Input from 'components/Input'
import Button from 'components/Button'
import styles from 'components/SignIn.module.scss'

class SignUp extends Component {
  state = {confirmPassword: '', displayName: '', email: '', password: ''}

  handleChange = event => {
    const {name, value} = event.target
    this.setState({[name]: value})
  }

  handleSubmit = event => {
    event.preventDefault()
    this.setState({confirmPassword: '', displayName: '', email: '', password: ''})
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
