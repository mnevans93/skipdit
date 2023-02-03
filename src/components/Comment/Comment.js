import { useState, useEffect } from "react"
import { destroy } from "../../utilities/general-service"
import './Comment.scss'
import DeleteModal from '../../components/DeleteCommentModal/DeleteCommentModal'

export default function Comment({commentBody, commentOwner, setUpdated, id, user}) {
    const [match, setMatch] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const handleClose = () => setShowModal(false)
    const handleShow = () => setShowModal(true)

    const checkUser = () => {
        if (!user) return null
        if (commentOwner === user.username) {
            setMatch(true)
        } else {
            setMatch(false)
        }
    }

    const deleteComment = async (event) => {
        try {
            const deleted = await destroy('comments', id)
            if (deleted) setUpdated(Math.random())
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() =>{
        checkUser()
    }, [])

    return(
        <li className="CommentContainer">
            <p className="CommentAuthor">{commentOwner}</p>
            <h5>{commentBody}</h5>
            {match ? <DeleteModal show={showModal} handleShow={handleShow} handleClose={handleClose} handleDelete={deleteComment} /> : ''}
        </li>
    )
}
