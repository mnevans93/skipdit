import { useState } from 'react'
import { create, update } from '../../utilities/general-service'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import './NewCommentForm.scss'

export default function NewCommentForm ({ user, setUpdated, currentPost }) {
  const [comment, setComment] = useState({
    commentBody: ''
  })
  const [error, setError] = useState('')

  const createComment = async (event) => {
    event.preventDefault()
    try {
      const commentsArr = currentPost.postComments
      const newComment = await create('comments', comment)
      commentsArr.push(newComment._id)
      const postData = { ...currentPost, postComments: commentsArr }
      await update('posts', currentPost._id, postData)
      setUpdated(Math.random())
      setError('Comment created!')
      setComment({
        commentBody: ''
      })
    } catch (error) {
      setError('There was an error. Try again.')
    }
  }

  const handleChange = (evt) => {
    setComment({ ...comment, [evt.target.name]: evt.target.value })
    setError('')
  }

  return (
    <>
      {user
        ? <Card className='CommentCard'>
          <Form onSubmit={createComment}>
            <Card.Title>Commenting as {user.username}</Card.Title>
            <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
              <Form.Control as='textarea' rows={3} value={comment.commentBody} onChange={handleChange} name='commentBody' placeholder='What are your thoughts?' />
            </Form.Group>
            <Button as='input' type='submit' value='Comment' />{' '}
            <br /><p className='error-message'>&nbsp;{error}</p>
          </Form>
        </Card>
        : <h1>Login in to Comment</h1>}
    </>
  )
}
