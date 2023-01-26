

export default function PostList ({
  posts,
  updatePost,
  deletePost
}) {
  return (
    <ul>
      {
            posts.length
              ? posts.map(post => (
                <Post
                  key={post._id}
                  post={post}
                  updatePost={updatePost}
                  deletePost={deletePost}
                />
              ))
              : <>
                <h2></h2>
                </>
        }
    </ul>
  )
}