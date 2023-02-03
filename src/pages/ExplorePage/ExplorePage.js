import { useState, useEffect } from 'react'
import { index } from '../../utilities/general-service'
import { update } from '../../utilities/users-service'
import './ExplorePage.scss'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import HomeCard from '../../components/HomeCard/HomeCard'

export default function ExplorePage ({user, setUser, handleClick}) {
    const [subs, setSubs] = useState(null)

    const generateButton = (subId, subOwner) => { //subId is sub _id string, subOwner is user object of owner
        if (!user.subSkipdits.length) return <Button onClick={(e) => community(e, subId, true)} >JOIN COMMUNITY</Button>
        const subs = user.subSkipdits
        for (const i in subs) {
            if (subs[i]._id === subId) {
                if (user._id === subOwner._id) {
                    return <Button variant="warning" disabled >YOUR COMMUNITY</Button>
                } else {
                    return <Button variant="warning" onClick={(e) => community(e, subId, false)} >LEAVE COMMUNITY</Button>
                }
            }
        }
        return <Button onClick={(e) => community(e, subId, true)} >JOIN COMMUNITY</Button>
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
                <Card.Title>Welcome to Skipdit!</Card.Title>
                <Card.Title>Start browsing communities below!</Card.Title>
            </Card>
            {subs ? subs : 'Loading...'}
            </div>
            <div className='Expcolright'>
                <HomeCard handleClick={handleClick}/>
            </div>
            </div>
            </div>
        </>
    )
}
