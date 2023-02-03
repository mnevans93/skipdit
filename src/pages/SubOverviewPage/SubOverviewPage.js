import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { show } from '../../utilities/general-service'
import './SubOverviewPage.scss'
import SubHeader from '../../components/SubHeader/SubHeader'
import CreatePostForm from '../../components/CreatePostForm/CreatePostForm'
import PostList from '../../components/PostList/PostList'
import SubCard from '../../components/SubCard/SubCard'

export default function SubOverviewPage({user, setUser, updated, setUpdated, handleClick, setLink, community, generateButton}) {
    const [currentSub, setCurrentSub] = useState(null)
    const [error, setError] = useState(null)
    const {subName} = useParams()

    const getSub = async () => {
        try {
            const sub = await show('subskipdits', subName)
            setCurrentSub(sub)
        } catch (e) {
            setError(e)
        }
    }

    useEffect(() => {
        getSub()
    }, [updated, subName])
    
    return(
        error ? 
            <>
                <h1>Oh no! Something went wrong ☹️</h1>
            </>
        : currentSub ?
            <div className='SubOverviewPage'>
                <SubHeader user={user} setUser={setUser} currentSub={currentSub} setLink={setLink} community={community} generateButton={generateButton} />
                <div className='subcontainer'>
                    <div className='subcolleft'>
                        {user ? <CreatePostForm user={user} setUpdated={setUpdated} currentSub={currentSub} /> : ''}
                        <div className="SubOverviewItems">
                            {/* <FeedSorter /> */}
                            <PostList user={user} currentSub={currentSub} setUpdated={setUpdated} handleClick={handleClick} />
                        </div>
                    </div>
                    <div className='subcolright'>
                        <SubCard currentSub={currentSub} />
                    </div>
                </div>
            </div>
        : 'Loading...' /* displays while the sub info is loading */
    )
}
