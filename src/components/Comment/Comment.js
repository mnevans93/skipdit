export default function Comment({commentBody, commentOwner}) {
    return(
        <li>
            <p>{commentOwner}</p>
            <h5>{commentBody}</h5>
        </li>
    )
}
