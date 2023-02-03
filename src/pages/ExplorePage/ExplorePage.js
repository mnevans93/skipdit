import { useState, useEffect } from 'react'
import { index } from '../../utilities/general-service'
import { update } from '../../utilities/users-service'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

export default function ExplorePage ({user, setUser, handleClick}) {
    const [subs, setSubs] = useState(null)

    const checkForSub = (subId) => {
        let match = false
        if (!user.subSkipdits.length) return false
        user.subSkipdits.forEach(userSub => {
            if (userSub._id === subId) {
                match = true
            }
        })
        return match
    }

    const community = async (event, subId, joining) => {
        event.preventDefault()
        try {
            if (joining) {
                user.subSkipdits.push(subId)
                setUser(await update(user))
            } else {
                const index = user.subSkipdits.findIndex((element) => element === subId)
                user.subSkipdits.splice(index, 1)
                setUser(await update(user))
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        const getSubs = async () => {
            const foundSubs = await index('subskipdits')
            setSubs(foundSubs.map(sub => 
                <Card key={sub._id} className='ExploreCard'>
                    <Card.Title><a href={`/s/${sub._id}`} onClick={(e) => handleClick(e, `/s/${sub._id}`)}>{sub.subName}</a></Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{sub.subAbout}</Card.Subtitle>
                    {!user ? 
                        <Button disabled>SIGN UP TO JOIN!</Button>
                    : !checkForSub(sub._id) ?
                        <Button onClick={(e) => community(e, sub._id, true)} >JOIN COMMUNITY</Button>
                    :
                        <Button variant="warning" onClick={(e) => community(e, sub._id, false)} >LEAVE COMMUNITY</Button>
                    }
                </Card>
            ))
        }
        getSubs().catch(console.error)
    }, [user])
    
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
