import { useState, useEffect} from 'react'
// import styles from './SubOverviewPage.module.scss'
// import { Link, useNavigate } from 'react-router-dom'
import SubHeader from '../../components/SubHeader/SubHeader'
import CreatePostForm from '../../components/CreatePostForm/CreatePostForm'
// import FeedSorter from '../components/FeedSorter/FeedSorter'
import PostList from '../../components/PostList/PostList'
import SubCard from '../../components/SubCard/SubCard'

export default function SubOverviewPage({}) {
    // variables
    
    // useEffects

    // State for how we generate subskipdit header
    const [currentSub, setCurrentSub] = useState(null)
    
    // event handlers
    
    
    return(
        <>
            <SubHeader />
            <CreatePostForm />
            <div className="SubOverviewPage">
                {/* <FeedSorter /> */}
                {/* <PostList /> */}
                <SubCard />
            </div>
        </>
    )
}
    