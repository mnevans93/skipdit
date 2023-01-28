import { useState, useEffect } from "react";
import { Route, Routes, useParams, Navigate, useNavigate } from "react-router-dom";
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
  const [user, setUser] = useState({})
  const [posts, setPosts] = useState(null)

  // use this on sub pages that require id's or slugs
  // const {subName, postId} = useParams()

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
  },[])

  return(
    <div className='App'>
      {/* <NavBar user={user} navigate={navigate} /> */}
      <Routes>
        <Route path='/s/:subName/:postId' element={<PostPage posts={posts}/>} />
        <Route path='/users/:id' element={<UserPage user={user}/>} />
        <Route path='/login' element={<LoginPage navigate={navigate} />} />
        <Route path='/signup' element={<SignupPage navigate={navigate} />} />
        <Route path='/dashboard' element={<DashboardPage />} />
        <Route path='/s/:subName' element={<SubOverviewPage />} />
        <Route path='/s' element={<ExplorePage />} />
      </Routes>
    </div>
  )
}