import { useState, useEffect } from "react";
import { Route, Routes, useParams, Navigate, useNavigate } from "react-router-dom";
import { getUser } from '../../utilities/users-service'
import UserPage from "../UserPage/UserPage";
import SubOverviewPage from "../SubOverviewPage/SubOverviewPage";
import PostPage from "../PostPage/PostPage";
import DashboardPage from "../DashboardPage/DashboardPage";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import ExplorePage from "../ExplorePage/ExplorePage"
import NavBar from "../../components/NavBar/NavBar"

export default function App() {
  const navigate = useNavigate()
  const [user, setUser] = useState(getUser())
  const [link, setLink] = useState('')
  const [posts, setPosts] = useState(null)

  // use this on sub pages that require id's or slugs
  // const {subName, postId} = useParams()

  const handleClick = (e, link) => {
    e.preventDefault()
    setLink(link)
  }

  const getPosts = async () => {
    try {
      // const response = await fetch()
      // const data = await response.json()
      // setPosts(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() =>{
    getPosts()
  }, [])

  return(
    <div className='App'>
      <NavBar user={user} setUser={setUser} link={link} setLink={setLink} navigate={navigate} handleClick={handleClick} />
      <Routes>
        <Route path='/s/:subName/:postId' element={<PostPage posts={posts}/>} />
        <Route path='/s/:subName' element={<SubOverviewPage />} />
        {/* <Route path='/s/new' element={< />} /> */}
        <Route path='/s' element={<ExplorePage />} />
        <Route path='/*' element={<Navigate to='/s' />} />
        { user ?
          <>
            <Route path='/users/:id' element={<UserPage user={user}/>} />
            <Route path='/dashboard' element={<DashboardPage />} />
          </>
        :
          <>
            <Route path='/login' element={<LoginPage setUser={setUser} navigate={navigate} handleClick={handleClick} />} />
            <Route path='/signup' element={<SignupPage setUser={setUser} navigate={navigate} handleClick={handleClick} />} />
          </>
        }
      </Routes>
    </div>
  )
}
