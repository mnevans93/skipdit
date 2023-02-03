import { useState, useEffect } from 'react'
import { index } from '../../utilities/general-service'
import Button from 'react-bootstrap/Button'
import { Card } from 'react-bootstrap'

export default function ExplorePage ({handleClick}) {
    const [subs, setSubs] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        const getSubs = async () => {
            const foundSubs = await index('subskipdits')
            setSubs(foundSubs.map(sub => 
                <Card key={sub._id} className='ExploreCard'>
                    <Card.Title><a href={`/s/${sub._id}`} onClick={(e) => handleClick(e, `/s/${sub._id}`)}>{sub.subName}</a></Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{sub.subAbout}</Card.Subtitle>
                </Card>
            ))
        }
        getSubs().catch(console.error)
    }, [])
    
    return (
        <>
        <div className='ExplorePage'>
        <Card className='ExplorePageTitle'>
            <Card.Title>Welcome to Skipdit!</Card.Title>
            <Card.Title>Start browsing communities below!</Card.Title>
        </Card>
            {subs ? subs : 'Loading...'}
            </div>
        </>
    )
}
