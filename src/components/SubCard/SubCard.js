import Card from 'react-bootstrap/Card'
import './SubCard.scss'

export default function SubCard({ currentSub }) {
    return(
        <Card className='SubCard'>
            <Card.Header className="SubCardHeader">About Community</Card.Header>
            <Card.Body className='SubCardContainer'>
                <Card.Text className='AboutBlurb'>
                    {currentSub.subAbout}
                </Card.Text>
                <br />
                <Card.Text className='SubCardDate'>
                    {`Created By: ${currentSub.subOwner.username}`}
                    <br />
                    {`Date Created: ${currentSub.createdAt.substring(0, 10)} ${currentSub.createdAt.substring(11, 19)} GMT`}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
