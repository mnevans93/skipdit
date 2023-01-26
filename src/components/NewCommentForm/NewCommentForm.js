import { JsonWebTokenError } from "jsonwebtoken";
import { useState } from "react";
export default function NewCommentForm (){
    
    const [newComment, setNewComment] = useState({
        body:'',
        commentOwner:''
    })

    const createComment = async () => {
        try {
            const response = await fetch('api/comments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({...newComment})
            })
            const data = await response.json()
            setNewComment({
                body: '',
                commentOwner:''
            })
        } catch (error) {
            console.error(error)
        }
    }

    const handleChange = (evt) => {
        setNewComment({...newComment, [evt.target.name]: evt.target.value})
    }
}