import { useState } from 'react'
import { redirect } from 'react-router-dom'
import * as userService from '../../utilities/users-service'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Card } from 'react-bootstrap'
import './LoginForm.scss'

export default function LoginForm ({ setUser, handleClick }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })

  const [error, setError] = useState('')

  const handleChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value })
    setError('')
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const user = await userService.login(credentials)
      setUser(user)
      if (user) return redirect('/dashboard')
    } catch (error) {
      setError('Your credentials were incorrect. Try again.')
    }
  }

  const disable = !credentials.password

  return (
    <Card className='LoginForm'>
      <h1 className='logo'>Welcome back!</h1> 
      <h1 className='logo'>Sign in below to pick up where you left off.</h1>
      <br />
      <Form className='text-center' onSubmit={handleSubmit}>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Control type='email' name='email' value={credentials.email} onChange={handleChange} placeholder='Enter your email' required />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Control type='password' name='password' value={credentials.password} onChange={handleChange} placeholder='Password' required />
        </Form.Group>
        <Button variant='primary' type='submit' disabled={disable}>Log In</Button>
        <br /><p className='error-message'>&nbsp;{error}</p>
        <h3 className='SignUpHeader logo'>New to Skipdit?</h3>
      <Button href='/signup' onClick={(e) => handleClick(e, '/signup')}>Sign Up</Button>
      </Form>
    </Card>
  )
}
