import { useState, useEffect } from 'react'
import { index } from '../../utilities/general-service'
import './ExplorePage.scss'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import HomeCard from '../../components/HomeCard/HomeCard'

export default function ExplorePage ({user, handleClick, generateButton}) {
    const [subs, setSubs] = useState(null)

    useEffect(() => {
        const getSubs = async () => {
            const foundSubs = await index('subskipdits')
            setSubs(foundSubs.map(sub => 
                <Card key={sub._id} className='ExploreCard'>
                    <Card.Title><a href={`/s/${sub._id}`} onClick={(e) => handleClick(e, `/s/${sub._id}`)}>{sub.subName}</a></Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{sub.subAbout}</Card.Subtitle>
                    {!user ? 
                        <Button disabled>SIGN UP TO JOIN!</Button>
                    :
                        generateButton(sub._id, sub.subOwner)
                    }
                </Card>
            ))
        }
        getSubs().catch(console.error)
    }, [user])
    
    return (
        <>
            <div className='ExplorePage'>
            <div className='ExploreContainer'>
            <div className='Expcolleft'>
            <Card className='ExplorePageTitle'>
                <Card.Title>{!user ? 'Welcome to Skipdit!' : `Hi again, ${user.username} !`}</Card.Title>
                <Card.Title>{!user ? 'Start browsing communities below!' : 'Start browsing communities below, or make your own!'}</Card.Title>
            </Card>
            {subs ? subs : 'Loading...'}
            </div>
            <div className='Expcolright'>
                <HomeCard user={user} handleClick={handleClick}/>
            </div>
            </div>
            </div>
        </>
    )
}
