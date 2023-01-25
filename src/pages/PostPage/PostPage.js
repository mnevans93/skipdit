export default function PostPage(props){
return(
    <>
        {
            props.posts && props.posts.length ?(
                <div>
                {
                    props.posts
                    .map((post) => {
                        return(
                            <div>
                                <p>{post.postOwner}</p>
                                <h1>{post.postTitle}</h1>
                                <p>{post.postBody}</p>
                            Form to comment hear
                            comments here 
                            turnary on if users post and delete button

                            </div>
                        )
                        })
                }
                </div>
            ):<h1>nothing yet</h1>
        }
    </>
)
}