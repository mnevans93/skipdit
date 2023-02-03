import { useState, useEffect } from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import { getUser } from '../../utilities/users-service'
import UserPage from "../UserPage/UserPage";
import SubOverviewPage from "../SubOverviewPage/SubOverviewPage";
import PostPage from "../PostPage/PostPage";
import DashboardPage from "../DashboardPage/DashboardPage";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import ExplorePage from "../ExplorePage/ExplorePage"
import NavBar from "../../components/NavBar/NavBar"
import CreateCommunityForm from "../../components/CreateCommunityForm/CreateCommunityForm";

export default function App() {
  const navigate = useNavigate()
  const [user, setUser] = useState(getUser())
  const [link, setLink] = useState('')
  const [updated, setUpdated] = useState(0)

  // use this on sub pages that require id's or slugs
  // const {subName, postId} = useParams()

  const handleClick = (e, link) => {
    e.preventDefault()
    setLink(link)
  }

  return(
    <div className='App'>
      <NavBar user={user} setUser={setUser} link={link} setLink={setLink} navigate={navigate} handleClick={handleClick} />
      <Routes>
        <Route path='/s/:subName/:postId' element={<PostPage user={user} updated={updated} setUpdated={setUpdated} setLink={setLink} />} />
        <Route path='/s/:subName' element={<SubOverviewPage user={user} updated={updated} setUpdated={setUpdated} handleClick={handleClick} setLink={setLink} />} />
        <Route path='/s' element={<ExplorePage link={link} setLink={setLink} handleClick={handleClick} />} />
        <Route path='/*' element={<Navigate to='/s' />} />
        { user ?
          <>
            <Route path='/users/:id' element={<UserPage user={user}/>} />
            <Route path='/dashboard' element={<DashboardPage user={user} />} />
            <Route path='/s/new' element={<CreateCommunityForm user={user} setLink={setLink} />} />
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
