import VoteContainer from '../VoteContainer/VoteContainer'

export default function PostListItem ({post, setUpdated, subId, id, title, body, author, handleClick}) {
    return (
        <li>
            <VoteContainer currentPost={post} setUpdated={setUpdated} />
            <h1>Title: <a href={`/s/${subId}/${id}`} onClick={(e) => handleClick(e, `/s/${subId}/${id}`)}>{title}</a></h1>
            <p>Author: {author}</p>
            <h4>Body: {body}</h4>
        </li>
    )
}
