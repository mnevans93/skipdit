import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { show, destroy } from '../../utilities/general-service'
import VoteContainer from '../../components/VoteContainer/VoteContainer'
import CommentList from '../../components/CommentList/CommentList'
import Card from 'react-bootstrap/Card'
import './PostPage.scss'
import DeleteModal from '../../components/DeletePostModal/DeletePostModal'

export default function PostPage({user, updated, setUpdated, link, setLink}) {
    const [currentPost, setCurrentPost] = useState(null)
    const [error, setError] = useState(null)
    const [match, setMatch] = useState(false)
    const {subName, postId} = useParams()

    const [showModal, setShowModal] = useState(false)
    const handleClose = () => setShowModal(false)
    const handleShow = () => setShowModal(true)

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
    }

    const deletePost = async () => {
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
                        <p className='PostAuthor'>{`${currentPost.createdAt.substring(0, 10)} ${currentPost.createdAt.substring(11, 19)} GMT`}</p>
                        {match ? <DeleteModal show={showModal} handleShow={handleShow} handleClose={handleClose} handleDelete={deletePost} /> : ''}
                        <Card.Text className='CardText'>{currentPost.postBody}</Card.Text>
                        <div className='Comments'>
                            <CommentList user={user} setUpdated={setUpdated} currentPost={currentPost} />
                        </div>
                    </div>
                </Card>
            </div>
        : 
            <div className='CurrentPostPageError'>
                <Card className='ErrorCard'>
                    <Card.Title>Loading...</Card.Title>
                </Card>
            </div>
    )
}
