import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { show } from '../../utilities/general-service'

// import styles from './SubOverviewPage.module.scss'
// import { Link, useNavigate } from 'react-router-dom'
import SubHeader from '../../components/SubHeader/SubHeader'
import CreatePostForm from '../../components/CreatePostForm/CreatePostForm'
// import FeedSorter from '../components/FeedSorter/FeedSorter'
import PostList from '../../components/PostList/PostList'
import SubCard from '../../components/SubCard/SubCard'

export default function SubOverviewPage({user}) {
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
    }, [])
    
    return(
        error ? 
            <>
                <h1>Oh no! Something went wrong ☹️</h1>
            </>
        : currentSub ?
            <>
                <h1>{currentSub.subName}</h1> {/* DELETE once SubHeader works properly; this is only for testing */}
                <SubHeader currentSub={currentSub} />
                <CreatePostForm user={user} currentSub={currentSub} setCurrentSub={setCurrentSub} />
                <div className="SubOverviewPage">
                    {/* <FeedSorter /> */}
                    <PostList currentSub={currentSub} />
                    <SubCard currentSub={currentSub} />
                </div>
            </>
        : 'Loading...' /* displays while the sub info is loading */
    )
}
