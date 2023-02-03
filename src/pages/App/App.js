import { useState } from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import { getUser, update } from '../../utilities/users-service'
import UserPage from "../UserPage/UserPage";
import SubOverviewPage from "../SubOverviewPage/SubOverviewPage";
import PostPage from "../PostPage/PostPage";
import DashboardPage from "../DashboardPage/DashboardPage";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import ExplorePage from "../ExplorePage/ExplorePage"
import NavBar from "../../components/NavBar/NavBar"
import CreateCommunityForm from "../../components/CreateCommunityForm/CreateCommunityForm";
import Button from 'react-bootstrap/Button'

export default function App() {
  const navigate = useNavigate()
  const [user, setUser] = useState(getUser())
  const [link, setLink] = useState('')
  const [updated, setUpdated] = useState(0)

  const handleClick = (e, link) => {
    e.preventDefault()
    setLink(link)
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

  const generateButton = (subId, subOwner) => { //subId is sub _id string, subOwner is user object of owner
    if (!user.subSkipdits.length) return <Button variant="secondary" onClick={(e) => community(e, subId, true)} >Join Community</Button>
    const subs = user.subSkipdits
    for (const i in subs) {
        if (subs[i]._id === subId) {
            if (user._id === subOwner._id) {
                return <Button variant="outline-warning" disabled >Your Community</Button>
            } else {
                return <Button variant="outline-warning" onClick={(e) => community(e, subId, false)} >Leave Community</Button>
            }
        }
    }
    return <Button variant="secondary" onClick={(e) => community(e, subId, true)} >Join Community</Button>
  }

  return(
    <div className='App'>
      <NavBar user={user} setUser={setUser} link={link} setLink={setLink} navigate={navigate} handleClick={handleClick} />
      <Routes>
        <Route path='/s/:subName/:postId' element={<PostPage user={user} updated={updated} setUpdated={setUpdated} link={link} setLink={setLink} />} />
        <Route path='/s/:subName' element={<SubOverviewPage user={user} setUser={setUser} updated={updated} setUpdated={setUpdated} handleClick={handleClick} link={link} setLink={setLink} community={community} generateButton={generateButton} />} />
        <Route path='/s' user={user} element={<ExplorePage user={user} setUser={setUser} link={link} setLink={setLink} handleClick={handleClick} community={community} generateButton={generateButton} />} />
        <Route path='/*' element={<Navigate to='/s' />} />
        { user ?
          <>
            <Route path='/users/:id' element={<UserPage user={user}/>} />
            <Route path='/dashboard' element={<DashboardPage user={user} />} />
            <Route path='/s/new' element={<CreateCommunityForm user={user} setUser={setUser} setLink={setLink} />} />
          </>
        :
          <>
            <Route path='/login' element={<LoginPage setUser={setUser} handleClick={handleClick} />} />
            <Route path='/signup' element={<SignupPage setUser={setUser} handleClick={handleClick} />} />
          </>
        }
      </Routes>
    </div>
  )
}
