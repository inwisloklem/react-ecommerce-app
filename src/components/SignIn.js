import React, {Component} from 'react'
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

          <div>
            <button className={styles.button} type='submit' onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn
