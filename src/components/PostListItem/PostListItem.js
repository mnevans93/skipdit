import VoteContainer from '../VoteContainer/VoteContainer'
import Card from 'react-bootstrap/Card'

export default function PostListItem ({post, setUpdated, subId, id, title, body, author, handleClick}) {
    return (
        <Card className='PostListItem'>
            <VoteContainer currentPost={post} setUpdated={setUpdated} />
            <Card.Title>Title: <a href={`/s/${subId}/${id}`} onClick={(e) => handleClick(e, `/s/${subId}/${id}`)}>{title}</a></Card.Title>
            <Card.Text className='PostCardAuthor'>Author: {author}</Card.Text>
            <Card.Text className='PostCardBody'>Body: {body}</Card.Text>
        </Card>
    )
}
