import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { show, destroy } from '../../utilities/general-service'
import VoteContainer from '../../components/VoteContainer/VoteContainer'
import CommentList from '../../components/CommentList/CommentList'
import Card from 'react-bootstrap/Card'
import './PostPage.scss'

export default function PostPage({user, updated, setUpdated, setLink}) {
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
    }, [updated])

    useEffect(() =>{
        checkUser()
    }, [currentPost])
    
    return (
        error ? 
            <div className='CurrentPostPageError'>
            <Card className='ErrorCard'>
                <Card.Title>Oh no! Something went wrong ☹️</Card.Title>
            </Card>
            </div>
        : currentPost ?
        <div className='CurrentPostPage'>
            <Card className='CurrentPost'>
                <VoteContainer className='VoteContainer' user={user} currentPost={currentPost} setCurrentPost={setCurrentPost} setUpdated={setUpdated} />
                <div className='CurrentPostBody'>
                <p className='PostAuthor'>{currentPost.postOwner.username}</p>
                <Card.Title className='PostTitle'>{currentPost.postTitle}</Card.Title>
                {match ? <button onClick={deletePost}>DELETE POST</button> : ''}
                <Card.Text className='CardText'>{currentPost.postBody}</Card.Text>
                <div className='Comments'>
                <CommentList user={user} setUpdated={setUpdated} currentPost={currentPost} />
                </div>
                </div>
            </Card>
        </div>
        : 'Loading...'
    )
}
