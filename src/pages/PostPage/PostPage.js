import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { show, destroy } from '../../utilities/general-service'
import VoteContainer from '../../components/VoteContainer/VoteContainer'
import CommentList from '../../components/CommentList/CommentList'
import Button from 'react-bootstrap/Button'

export default function PostPage({user, updated, setUpdated, link, setLink}) {
    const [currentPost, setCurrentPost] = useState(null)
    const [error, setError] = useState(null)
    const [match, setMatch] = useState(false)
    const {subName, postId} = useParams()

    const getPost = async () => {
        try {
            const post = await show('posts', postId)
            setCurrentPost(post)
        } catch (e) {
            setError(e)
        }
    }

    const checkUser = () => {
        if (!user || !currentPost) return null
        if (currentPost.postOwner.username === user.username) {
            setMatch(true)
        } else {
            setMatch(false)
        }
        console.log(match)
    }

    const deletePost = async (event) => {
        event.preventDefault()
        try {
            const deleted = await destroy('posts', currentPost._id)
            if (deleted) setLink(`/s/${subName}`)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getPost()
    }, [updated, link])

    useEffect(() =>{
        checkUser()
    }, [currentPost])
    
    return (
        error ? 
            <>
                <h1>Oh no! Something went wrong ☹️</h1>
            </>
        : currentPost ?
            <>
                <VoteContainer user={user} currentPost={currentPost} setCurrentPost={setCurrentPost} setUpdated={setUpdated} />
                <p>{currentPost.postOwner.username}</p>
                {match ? <Button onClick={deletePost}>DELETE POST</Button> : ''}
                <h1>{currentPost.postTitle}</h1>
                <p>{currentPost.postBody}</p>
                <CommentList user={user} setUpdated={setUpdated} currentPost={currentPost} />
            </>
        : 'Loading...'
    )
}
