import VoteContainer from '../VoteContainer/VoteContainer'
import Card from 'react-bootstrap/Card'
import './PostListItem.scss'

export default function PostListItem ({post, setUpdated, subId, id, title, body, author, handleClick}) {
    return (
        <Card className='PostListItem'>
            <VoteContainer currentPost={post} setUpdated={setUpdated} />
            <div className='PostBody'>
            <Card.Title><a href={`/s/${subId}/${id}`} onClick={(e) => handleClick(e, `/s/${subId}/${id}`)}>{title}</a></Card.Title>
            <Card.Text className='PostCardAuthor'>{author}</Card.Text>
            <Card.Text className='PostCardBody'>{body}</Card.Text>
            </div>
        </Card>
    )
}
