export default function UserPage(){
    
    return(
        <>
        {
            user?(
                <>
                <div className={style.userinfo}>
                    <h1>{user.username}</h1>
                    <h1>{user.email}</h1>
                </div>
                <ul>
                {
                    user.subSkipdit
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
            ):<h1></h1>
        }
        
    
        </>
    )
}