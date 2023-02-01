export default function PostListItem ({title, body, author}) {
    return (
        <li>
            <h1>Title: {title}</h1>
            <p>Author: {author}</p>
            <h4>Body: {body}</h4>
        </li>
    )
}
