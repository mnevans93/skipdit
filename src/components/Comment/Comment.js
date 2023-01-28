export default function Comment({
    commentBody,
    commentOwner
}){
    return(
        <>
        <p>{commentOwner}</p>
        <h1>{commentBody}</h1>
        </>
    )
}