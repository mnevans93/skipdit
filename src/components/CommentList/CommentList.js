import { useState, useEffect } from 'react'
import { show } from '../../utilities/general-service'
import Comment from '../Comment/Comment'
import NewCommentForm from '../NewCommentForm/NewCommentForm'
import './CommentList.scss'

export default function CommentList ({ user, setUpdated, currentPost }) {
  const [comments, setComments] = useState(currentPost.postComments)

  useEffect(() => {
    const getComments = async () => {
      const foundPost = await show('posts', currentPost._id)
      setComments(foundPost.postComments)
    }
    getComments().catch(console.error)
  }, [currentPost])

  return (
    <>
      {user ? <NewCommentForm user={user} setUpdated={setUpdated} currentPost={currentPost} /> : ''}
      <ul>
        {comments
          ? comments.map(comment => {
            return (
              <Comment key={comment._id} commentOwner={comment.commentOwner.username} commentTime={`${comment.createdAt.substring(0, 10)} ${comment.createdAt.substring(11, 19)}  GMT`} commentBody={comment.commentBody} user={user} setUpdated={setUpdated} id={comment._id} />
            )
          })
          : ''}
      </ul>
    </>
  )
}
