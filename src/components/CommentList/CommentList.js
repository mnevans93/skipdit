import { useState, useEffect } from 'react'
import { show } from '../../utilities/general-service'
import Comment from "../Comment/Comment"
import NewCommentForm from "../NewCommentForm/NewCommentForm"

export default function CommentList({user, currentPost, setCurrentPost}){
    const [comments, setComments] = useState(currentPost.postComments)

    useEffect(() => {
        const getComments = async () => {
            const foundPost = await show('posts', currentPost._id)
            setComments(foundPost.postComments)
        }
        getComments().catch(console.error)
      }, [currentPost])
    
    return(
        <>
            <NewCommentForm user={user} currentPost={currentPost} setCurrentPost={setCurrentPost} />
            <ul>
                {comments ?
                    comments.map(comment => {
                    return(
                        <Comment key={comment._id} commentOwner={comment.commentOwner.username} commentBody={comment.commentBody} />
                    )
                })
                : ''}
            </ul>
        </>
    )
}
