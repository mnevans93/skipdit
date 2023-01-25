import { useState, useEffect} from 'react'
// import styles from './SubOverviewPage.module.scss'
// import { Link, useNavigate } from 'react-router-dom'
// import Header from '../components/Header/Header'
// import CreatePost from '../components/CreatePost/CreatePost'
// import FeedSorter from '../components/FeedSorter/FeedSorter'
// import PostList from '../components/PostList/PostList'
// import SubSkipditCard from '../components/HomeCard/HomeCard'

export default function SubOverviewPage({}) {
    // variables
    
    // useEffects

    // State for how we generate subskipdit header
    const [currentSub, setCurrentSub] = useState(null)
    
    // event handlers
    
    
    return(
        <>
        <SubSkipditHeader />
        <CreatePost />
        <div className="SubOverviewPage">
        {/* <FeedSorter /> */}
        <PostList />
        <SubSkipditCard />
        </div>
        </>
    )
    }
    