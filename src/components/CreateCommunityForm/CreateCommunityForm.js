import { useState } from 'react'
import { create } from '../../utilities/general-service'
import { update } from '../../utilities/users-service'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import './CreateCommunity.scss'

export default function CreateCommunityForm ({setLink, user, setUser}) {
    const [ community , setCommunity ] = useState({
      subName: '',
      subAbout: ''
    })

    const [error, setError] = useState('')

    const handleChange = (event) => {
        setCommunity({ ...community, [event.target.name]: event.target.value })
        setError('')
    } 

    const createCommunity = async (event) => {
      event.preventDefault()
      try {
        const newCommunity = await create('subskipdits', community)
        if (newCommunity) setLink(`/s/${newCommunity._id}`)
        user.subSkipdits.push(newCommunity._id)
        setUser(await update(user))
        setError('Community created!')
      } catch (error) {
        setError('There was an error. Try again.')
      }
    }
 
  return (
    <div className='CreateCommunityPage'>
    <Card className='CreateCommunityForm'>
      <Card.Title className='CreateCommunityTitle'>Create a community</Card.Title>
      <div className='container'>
        <Form
          className='form'
          onSubmit={createCommunity}
        >
          <div>
            {/* <label>Title<input type='text' value={community.subName} name='subName' onChange={handleChange} placeholder='Community Title' /></label> */}
            {/* <label>About<input type='text' value={community.subAbout} name='subAbout' onChange={handleChange} placeholder='About this Community' /></label> */}
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Control type='text' value={community.subName} name='subName' onChange={handleChange} placeholder='Community Title' />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Control as="textarea" rows={3} value={community.subAbout} name='subAbout' onChange={handleChange} placeholder="Tell us about your community."/>
            </Form.Group>
          </div>
          {/* <input className='button' type='submit' value='Create Community' /> */}
          <Button as="input" type="submit" value="Create Community" />{' '}
          <br /><p className='error-message'>&nbsp;{error}</p>
        </Form>
      </div>
    </Card>
    </div>
  )
}
