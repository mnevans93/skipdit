import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import UserPage from "../UserPage/UserPage";
import SubOverviewPage from "../SubOverviewPage/SubOverviewPage";
import PostPage from "../PostPage/PostPage";
import DashboardPage from "../DashboardPage/DashboardPage";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";


export default function App() {
  const [user, setUser] = useState(null)
  const [posts, setPosts] = useState(null)
  


const getPosts = async () => {
  try {
    const response = await fetch()
    const data = await response.json()
    setPosts(data)
  } catch (error) {
    console.error(error)
  }
}

useEffect(() =>{
  getPosts()
},[])

return(
  <Routes>
    <Route path='/' element={<PostPage posts={posts}/>} />
    <Route path='/hel' element={<UserPage user={user}/>} />
    <Route path='/aye' element={<LoginPage />} />
    <Route path='/a' element={<SignupPage />} />
    <Route path='/d' element={<DashboardPage />} />
    <Route path='/ff' element={<SubOverviewPage />} />
  </Routes>
)

}