import { useState } from 'react'
import { Card } from 'react-bootstrap'
import { create, update } from '../../utilities/general-service'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

export default function CreatePostForm ( {setUpdated, currentSub} ) {
    const [ post , setPost ] = useState({
      postTitle: '',
      postBody: ''
    })

    const [error, setError] = useState('')

    const handleChange = (event) => {
      setPost({ ...post, [event.target.name]: event.target.value })
      setError('')
    } 

    const createPost = async (event) => {
      event.preventDefault()
      try {
        const subPostsArr = currentSub.subPosts
        const newPost = await create('posts', post)
        subPostsArr.push(newPost._id)
        const subData = {...currentSub, subPosts: subPostsArr}
        const updatedSub = await update('subskipdits', currentSub._id, subData)
        setUpdated(Math.random())
        setError('Post created!')
        setPost({
          postTitle: '',
          postBody: ''
        })
      } catch (error) {
        setError('There was an error. Try again.')
      }
    }
 
  return (
    <Card>
      <Card.Title>Create a Post</Card.Title>
      <div>
        <form
          onSubmit={createPost}
        >
          {/* <div>
            <label>Title<input type='text' value={post.postTitle} name='postTitle' onChange={handleChange} placeholder='Title' /></label>
            <label>Body<input type='text' value={post.postBody} name='postBody' onChange={handleChange} placeholder='Body' /></label>
          </div> */}
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Control type="text" placeholder="Title" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Control as="textarea" rows={3} placeholder="Text"/>
            </Form.Group>
          {/* <input className={styles.button} type='submit' value='Create Post' /> */}
          <Button as="input" type="submit" value="Post" />{' '}
          <br /><p className='error-message'>&nbsp;{error}</p>
        </form>
      </div>

    </Card>
  )
}
