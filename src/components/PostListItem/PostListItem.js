import VoteContainer from '../VoteContainer/VoteContainer'

export default function PostListItem ({user, post, setUpdated, subId, id, title, body, author, handleClick}) {
    return (
        <li>
            <VoteContainer user={user} currentPost={post} setUpdated={setUpdated} />
            <h1>Title: <a href={`/s/${subId}/${id}`} onClick={(e) => handleClick(e, `/s/${subId}/${id}`)}>{title}</a></h1>
            <p>Author: {author}</p>
            <h4>Body: {body}</h4>
        </li>
    )
}
