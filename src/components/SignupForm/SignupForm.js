import { useState } from 'react'
import { redirect } from 'react-router-dom'
import { signUp } from '../../utilities/users-service'
import validInput from '../../utilities/check-input'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Card } from 'react-bootstrap'
import './SignUpForm.scss'

export default function SignUpForm ({ setUser, handleClick }) {
  const [credentials, setCredentials] = useState({
    username: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  })

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const formData = { ...credentials }
      delete formData.error
      delete formData.confirm
      const user = await signUp(formData)
      setUser(user)
      if (user) return redirect('/dashboard')
    } catch (error) {
      setCredentials({ error: 'Signup Failed' })
    }
  }

  const handleChange = (event) => {
    if (validInput(event, 'name')) {
      setCredentials({
        ...credentials,
        [event.target.name]: event.target.value
      })
    }
  }

  const disable = credentials.password ? (credentials.password !== credentials.confirm) : true

  return (
    <Card className='SignUpForm'>
      <h1 className='logo'>Welcome to skipdit!</h1>
      <h1 className='logo'>Sign up to get started.</h1>
      <Form className='text-center' onSubmit={handleSubmit}>
        <Form.Group className='mb-3' controlId='formBasic'>
          <Form.Control type='text' name='username' value={credentials.username} onChange={handleChange} placeholder='Create a username' required />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Control type='email' name='email' value={credentials.email} onChange={handleChange} placeholder='Enter your email' required />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Control type='password' name='password' value={credentials.password} onChange={handleChange} placeholder='Password' required />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicConfirm'>
          <Form.Control type='password' name='confirm' value={credentials.confirm} onChange={handleChange} placeholder='Confirm password' required />
        </Form.Group>
        <Button variant='primary' type='submit' disabled={disable}>SIGN UP</Button>
        <br /><p className='error-message'>&nbsp;{credentials.error}</p>
        <h3 className='logo'>Already have an Account?</h3>
        <Button className='LoginButton' href='/login' onClick={(e) => handleClick(e, '/login')}>LOGIN</Button>
      </Form>
     </Card>
  )
}
