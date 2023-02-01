import { useState, useEffect } from 'react'
import { index } from '../../utilities/general-service'
import Button from 'react-bootstrap/Button'

export default function ExplorePage ({handleClick}) {
    const [subs, setSubs] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        const getSubs = async () => {
            const foundSubs = await index('subskipdits')
            setSubs(foundSubs.map(sub => 
                <div key={sub._id}>
                    <h1><a href={`/s/${sub._id}`} onClick={(e) => handleClick(e, `/s/${sub._id}`)}>{sub.subName}</a></h1>
                    <h3>{sub.subAbout}</h3>
                </div>
            ))
        }
        getSubs().catch(console.error)
    }, [])
    
    return (
        <>
            <h1>Welcome to Skipdit!</h1>
            <h3>Start browsing communities below!</h3>
            {subs ? subs : 'Loading...'}
        </>
    )
}
