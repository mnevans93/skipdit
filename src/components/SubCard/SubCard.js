import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
// import './SubCard.css'

function SubCard(props) {
    return(
        <Card>
            <Card.Body className='SubCardContainer'>
            <Card.Title className="SubCardHeader">Child</Card.Title>
            <Card.Text className='AboutBlurb'>
                {/* Created X date */}
            </Card.Text>
            {/* <div className="MembersContainer">
                {X (total amount of users) / usersNickname}
                {X (total amount of ONLINE users) / online}
            </div> */}
            <Button variant="primary">Create a Post</Button>{' '}
            </Card.Body>
        </Card>
    )
}

export default SubCard
