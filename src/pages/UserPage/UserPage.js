export default function UserPage(props){
    
    return(
        <>
        {
            props.users?(
                <>
                <div>
                    <h1>{props.user.username}</h1>
                    <h1>{props.user.email}</h1>
                </div>
                <ul>
                {
                    props.user.subSkipdit
                    .map((subSkipdit) =>{
                        return(
                            <li key = {subSkipdit._id}>
                                <h1>{subSkipdit.subName}</h1>
                            </li>
                        )
                    })

                }
                </ul>
                </>
            ):<h1>No User</h1>
        }
        
    
        </>
    )
}