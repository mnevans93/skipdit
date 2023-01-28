import Comment from "../Comment/Comment"
import NewCommentForm from "../NewCommentForm/NewCommentForm"
export default function CommentList(props){
    return(
        <>
        <NewCommentForm/>
        {
        
           props.comments
           .map((comment) => {
            return(
                <Comment commentOwner={comment.commentOwner} commentBody={comment.commentBody}/>
                
            )
           })
        
        }
        </>
    )
}