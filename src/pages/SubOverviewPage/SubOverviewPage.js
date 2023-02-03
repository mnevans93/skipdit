import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { show, destroy } from '../../utilities/general-service'
import SubHeader from '../../components/SubHeader/SubHeader'
import CreatePostForm from '../../components/CreatePostForm/CreatePostForm'
import PostList from '../../components/PostList/PostList'
import SubCard from '../../components/SubCard/SubCard'

export default function SubOverviewPage({user, updated, setUpdated, handleClick, setLink}) {
    const [currentSub, setCurrentSub] = useState(null)
    const [error, setError] = useState(null)
    const [match, setMatch] = useState(false)
    const {subName} = useParams()

    const getSub = async () => {
        try {
            const sub = await show('subskipdits', subName)
            setCurrentSub(sub)
        } catch (e) {
            setError(e)
        }
    }

    const checkUser = () => {
        if (!user || !currentSub) return null
        if (currentSub.subOwner.username === user.username) {
            setMatch(true)
        } else {
            setMatch(false)
        }
        console.log(match)
    }

    const deleteSub = async (event) => {
        event.preventDefault()
        try {
            const deleted = await destroy('subskipdits', currentSub._id)
            if (deleted) setLink('/s')
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getSub()
    }, [updated])

    useEffect(() =>{
        checkUser()
    }, [currentSub])
    
    return(
        error ? 
            <>
                <h1>Oh no! Something went wrong ☹️</h1>
            </>
        : currentSub ?
            <>
                <SubHeader currentSub={currentSub} />
                {match ? <button onClick={deleteSub}>DELETE COMMUNITY</button> : ''}
                {user ? <CreatePostForm user={user} setUpdated={setUpdated} currentSub={currentSub} /> : ''}
                <div className="SubOverviewPage">
                    {/* <FeedSorter /> */}
                    <PostList user={user} currentSub={currentSub} setUpdated={setUpdated} handleClick={handleClick} />
                    <SubCard currentSub={currentSub} />
                </div>
            </>
        : 'Loading...' /* displays while the sub info is loading */
    )
}
