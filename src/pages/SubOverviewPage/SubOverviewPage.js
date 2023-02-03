import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { show, destroy } from '../../utilities/general-service'
import { update } from '../../utilities/users-service'
import SubHeader from '../../components/SubHeader/SubHeader'
import CreatePostForm from '../../components/CreatePostForm/CreatePostForm'
import PostList from '../../components/PostList/PostList'
import SubCard from '../../components/SubCard/SubCard'
import DeleteModal from '../../components/DeleteCommunityModal/DeleteCommunityModal'

export default function SubOverviewPage({user, setUser, updated, setUpdated, handleClick, setLink}) {
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
            const index = user.subSkipdits.findIndex((element) => element._id === currentSub._id)
            user.subSkipdits.splice(index, 1)
            setUser(await update(user))
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
            <div className='SubOverviewPage'>
                <SubHeader currentSub={currentSub} />
                {match ? <DeleteModal show={showModal} handleShow={handleShow} handleClose={handleClose} handleDelete={deleteSub} /> : ''}
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
