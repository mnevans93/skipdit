import { useState, useEffect } from "react"
import { destroy } from "../../utilities/general-service"
import './Comment.scss'

export default function Comment({commentBody, commentOwner, setUpdated, id, user}) {
    const [match, setMatch] = useState(false)

    const checkUser = () => {
        if (!user) return null
        if (commentOwner === user.username) {
            setMatch(true)
        } else {
            setMatch(false)
        }
    }

    const deleteComment = async (event) => {
        event.preventDefault()
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
            {match ? <button onClick={deleteComment}>DELETE</button> : ''}
        </li>
    )
}
