import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { show, destroy } from '../../utilities/general-service'
import SubHeader from '../../components/SubHeader/SubHeader'
import CreatePostForm from '../../components/CreatePostForm/CreatePostForm'
import PostList from '../../components/PostList/PostList'
import SubCard from '../../components/SubCard/SubCard'
import DeleteModal from '../../components/DeleteCommunityModal/DeleteCommunityModal'

export default function SubOverviewPage({user, updated, setUpdated, handleClick, setLink}) {
    const [currentSub, setCurrentSub] = useState(null)
    const [error, setError] = useState(null)
    const [match, setMatch] = useState(false)
    const {subName} = useParams()

    const [showModal, setShowModal] = useState(false)
    const handleClose = () => setShowModal(false)
    const handleShow = () => setShowModal(true)

    const getSub = async () => {
        try {
            const sub = await show('subskipdits', subName)
            setCurrentSub(sub)
            console.log(currentSub)
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
    }

    const deleteSub = async () => {
        try {
            const deleted = await destroy('subskipdits', currentSub._id)
            if (deleted) setLink('/s')
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getSub()
    }, [updated, subName])

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
                {match ? <DeleteModal show={showModal} handleShow={handleShow} handleClose={handleClose} handleDelete={deleteSub} /> : ''}
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
