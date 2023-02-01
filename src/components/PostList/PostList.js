import {useState, useEffect} from 'react'
import PostListItem from '../PostListItem/PostListItem'

export default function PostList ({currentSub}) {
  const [posts, setPosts] = useState(currentSub.subPosts)
  
  useEffect(() => {
    setPosts(currentSub.subPosts)
  }, [currentSub])
  
  return (
    <ul>
      {
        posts.length ?
          posts.map(post => (
              <PostListItem
                key={post._id}
                title={post.postTitle}
                body={post.postBody}
                author={post.postOwner}
                // updatePost={updatePost}
                // deletePost={deletePost}
              />
            ))
        :
          <>
            <h2>No posts yet. Be the first and start a conversation!</h2>
          </>
      }
    </ul>
  )
}
