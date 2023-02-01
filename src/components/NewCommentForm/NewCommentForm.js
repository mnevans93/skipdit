import { useState } from "react";
import { create, update } from '../../utilities/general-service'

export default function NewCommentForm({user, setUpdated, currentPost}) {
    const [comment, setComment] = useState({
        commentBody: '',
        commentOwner: user._id
    })
    const [error, setError] = useState('')

    const createComment = async (event) => {
        event.preventDefault()
        try {
            const commentsArr = currentPost.postComments
            const newComment = await create('comments', comment)
            commentsArr.push(newComment._id)
            const postData = {...currentPost, postComments: commentsArr}
            const updatedPost = await update('posts', currentPost._id, postData)
            setUpdated(Math.random())
            setError('Comment created!')
            setComment({
                commentBody: '',
                commentOwner: user._id
            })
        } catch (error) {
            setError('There was an error. Try again.')
        }
    }

    const handleChange = (evt) => {
        setComment({...comment, [evt.target.name]: evt.target.value})
        setError('')
    }

    return (
        <>
            {user ? 
                <form onSubmit={createComment}>
                    <h5>Comment as {user.username}</h5>
                    <input value={comment.commentBody} onChange={handleChange} name="commentBody" placeholder="What are your thoughts?"></input><br/>
                    <input type='submit' value='Comment' />
                </form>
            :
                <h1>Login in to Comment</h1>
            }
        </>
    )
}
