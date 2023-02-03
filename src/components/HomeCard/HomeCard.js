import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import './HomeCard.scss'

function HomeCard({handleClick}) {
    return(
        <Card className='HomeCardContainer'>
            <Card.Body className='HomeCard'>
                <Card.Title className="HomeTitle">Home</Card.Title>
                <Card.Text className="HomeBlurb">Your personal Skipdit frontpage. Come here to check in with your favorite communities.</Card.Text>
                <div className='HomeCardButtons'>
                <Button variant="outline-primary" onClick={(e) => handleClick(e, '/s/new')}>Create a Community</Button>{' '}
                </div>
            </Card.Body>
            <Card.Body className='PolicyCard'>
                <ul>
                    <li>User Agreement (lol we have this?)</li>
                    <li>Privacy Policy (we share all your data)</li>
                    <li>Content Policy (be kind. i guess)</li> 
                    <li>Moderator Code of Conduct</li>
                </ul>
                <br/>
                <footer className="blockquote-footer">
                Skipdit. A GA SEI group project.
                </footer>
            </Card.Body>
        </Card>
    )
}

export default HomeCard