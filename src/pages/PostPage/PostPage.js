import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { show } from '../../utilities/general-service'
import VoteContainer from '../../components/VoteContainer/VoteContainer'
import CommentList from '../../components/CommentList/CommentList'

export default function PostPage({user, updated, setUpdated}) {
    const [currentPost, setCurrentPost] = useState(null)
    const [error, setError] = useState(null)
    const {postId} = useParams()

    const getPost = async () => {
        try {
            const post = await show('posts', postId)
            setCurrentPost(post)
        } catch (e) {
            setError(e)
        }
    }

    useEffect(() => {
        getPost()
    }, [updated])
    
    return (
        error ? 
            <>
                <h1>Oh no! Something went wrong ☹️</h1>
            </>
        : currentPost ?
            <>
                <VoteContainer user={user} currentPost={currentPost} setCurrentPost={setCurrentPost} setUpdated={setUpdated} />
                <p>{currentPost.postOwner.username}</p>
                <h1>{currentPost.postTitle}</h1>
                <p>{currentPost.postBody}</p>
                <CommentList user={user} setUpdated={setUpdated} currentPost={currentPost} />
            </>
        : 'Loading...'
    )
}
