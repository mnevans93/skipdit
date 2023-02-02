
import { useState, useEffect } from "react"
import { destroy } from "../../utilities/general-service"
export default function Comment({commentBody, commentOwner, setUpdated, id, user}) {
    const [match, setMatch] = useState(false)


    const checkUser = () => {
        if(commentOwner === user.username){
            return setMatch(true)
        }else{
            setMatch(false)
        }
    }
    const deleteComment = async (event) =>{
        event.preventDefault()
        try {
           
            console.log(await destroy('comments', id))
            setUpdated(Math.random())
            
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() =>{
        checkUser()
    })

    return(
        <li>
            <p>{commentOwner}</p>
            <h5>{commentBody}</h5>
           {
                match ? <button onClick={deleteComment}> delete</button>
                :''
           }
        </li>
    )
}
