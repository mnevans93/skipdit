import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
// import './HomeCard.css'

function HomeCard() {
    return(
        <Card className='HomeCardContainer'>
            <Card.Body className='HomeCard'>
                <Card.Title className="HomeTitle">Home</Card.Title>
                <Card.Text className="HomeBlurb">Your personal Skipdit frontpage. Come here to check in with your favorite communities.</Card.Text>
                <div className='HomeCardButtons'>
                <Button variant="primary">Create a Post</Button>{' '}
                <Button variant="outline-primary">Create a Community</Button>{' '}
                </div>
            </Card.Body>
            <Card.Body className='PolicyCard'>
                <ul>
                    <li>User Agreement</li>
                    <li>Privacy Policy</li>
                    <li>Conent Policy</li>
                    <li>Moderator Code of Conduct</li>
                </ul>
                <footer className="blockquote-footer">
                Skipdit. A GA group project. All rights reserved.
                </footer>
            </Card.Body>
        </Card>
    )
}

export default HomeCard