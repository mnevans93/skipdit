import { useState, useEffect } from 'react'
// import styles from './DashboardPage.module.scss'
// import { Link, useNavigate } from 'react-router-dom'
import CreatePostForm from '../../components/CreatePostForm/CreatePostForm'
import CreateCommunityForm from '../../components/CreateCommunityForm/CreateCommunityForm'
// import FeedSorter from '../components/FeedSorter/FeedSorter'
// import PostList from '../components/PostList/PostList'
import HomeCard from '../../components/HomeCard/HomeCard'
// import SubList from '../../components/SubList/SubList'

export default function DashboardPage ({ user }) {
  // variables
  // const [] = useState();
  // const [] = useState();
  // const navigate = useNavigate();

  // useEffects
  useEffect(function () {
    async function getPosts () {
    }
  })

  // event handlers

  return (
    <>
      <CreateCommunityForm user={user} />
      <CreatePostForm user={user} />
      {/* <FeedSorter /> */}
      {/* <SubList user={user} /> */}
      {/* <PostList /> */}
      <HomeCard user={user} />
    </>
  )
}
