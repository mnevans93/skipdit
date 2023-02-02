import { useState } from 'react'
import { create } from '../../utilities/general-service'

export default function CreateCommunityForm ({setLink}) {
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
        setError('Community created!')
      } catch (error) {
        setError('There was an error. Try again.')
      }
    }
 
  return (
    <>
      <h2>Create New Community</h2>
      <div className='container'>
        <form
          className='form'
          onSubmit={createCommunity}
        >
          <div>
            <label>Title<input type='text' value={community.subName} name='subName' onChange={handleChange} placeholder='Community Title' /></label>
            <label>About<input type='text' value={community.subAbout} name='subAbout' onChange={handleChange} placeholder='About this Community' /></label>
          </div>
          <input className='button' type='submit' value='Create Community' />
          <br /><p className='error-message'>&nbsp;{error}</p>
        </form>
      </div>
    </>
  )
}
