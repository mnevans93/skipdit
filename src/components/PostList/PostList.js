import { useState, useEffect } from 'react'
import { show } from '../../utilities/general-service'
import PostListItem from '../PostListItem/PostListItem'

export default function PostList ({ user, currentSub, setUpdated, handleClick }) {
  const [posts, setPosts] = useState(currentSub.subPosts)

  useEffect(() => {
    const getPosts = async () => {
      const foundSub = await show('subskipdits', currentSub._id)
      setPosts(foundSub.subPosts)
    }
    getPosts().catch(console.error)
  }, [currentSub])

  return (
    <ul className='PostList'>
      {
        posts.length
          ? posts.map(post => (
            <div key={post._id}>
              <PostListItem
                user={user}
                post={post}
                subId={currentSub._id}
                id={post._id}
                title={post.postTitle}
                body={post.postBody}
                author={post.postOwner.username}
                handleClick={handleClick}
                setUpdated={setUpdated}
              />
              <hr />
            </div>
          ))
          : <>
            <h2>No posts yet. Be the first and start a conversation!</h2>
          </>
      }
    </ul>
  )
}
