import { useState, useEffect } from 'react'
import { destroy } from '../../utilities/general-service'
import { update } from '../../utilities/users-service'
import DeleteModal from '../../components/DeleteCommunityModal/DeleteCommunityModal'
import Button from 'react-bootstrap/Button'
import './SubHeader.scss'

export default function SubHeader({user, setUser, currentSub, setLink, community, generateButton}) {
  const [match, setMatch] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const handleClose = () => setShowModal(false)
  const handleShow = () => setShowModal(true)

  const checkUser = () => {
    if (!user || !currentSub) return null
    if (currentSub.subOwner.username === user.username) {
        setMatch(true)
    } else {
        setMatch(false)
    }
  }

  useEffect(() =>{
    checkUser()
  }, [currentSub])

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

  return (
    <div className='SubHeaderContainer'>
      <div className='SubHeaderSizer'>
        <h1 className='SubHeaderTitle'> {currentSub.subName}</h1>
        <h3 className='SubHeaderUsername'> s/{currentSub._id}</h3>
        {/* <h4 className='SubHeaderPath'>Path: {`/s/${currentSub._id}`}</h4> */}
        {/* <button /> if joined then display leave else display join */}
      </div>
      {!user? <Button disabled>SIGN UP TO JOIN!</Button> : match ? <DeleteModal show={showModal} handleShow={handleShow} handleClose={handleClose} handleDelete={deleteSub} /> : generateButton(currentSub._id, currentSub.subOwner)}
    </div>
  )
}
