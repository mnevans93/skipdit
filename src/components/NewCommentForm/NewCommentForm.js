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
    return(
        <>
        {
            user ?(
                <main>
                {
                    <>
                <h1>Comment as {user._id}</h1>
                 <input value={newComment.body} onChange={handleChange} name="body" placeholder="What are your thoughts?"></input><br/>
                 <button onClick={() => createComment() }>Comment</button>
                 </>   
                }
                </main>
            ):<h1>Login in to Comment</h1>
        }
        </>
    )
}