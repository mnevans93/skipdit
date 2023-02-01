import { useState } from 'react'
import { create, update } from '../../utilities/general-service'
import styles from './CreatePostForm.scss'

export default function CreatePostForm ( {user, currentSub, setCurrentSub} ) {
    const [ post , setPost ] = useState({
      postTitle: '',
      postBody: '',
      postOwner: user._id
    })

    const [error, setError] = useState('')

    const handleChange = (event) => {
      setPost({ ...post, [event.target.name]: event.target.value })
    } 

    const createPost = async (event) => {
      event.preventDefault()
      try {
        const subPostsArr = currentSub.subPosts
        const newPost = await create('posts', post)
        subPostsArr.push(newPost._id)
        const subData = {...currentSub, subPosts: subPostsArr}
        const updatedSub = await update('subskipdits', currentSub._id, subData)
        setCurrentSub(updatedSub)
        console.log(updatedSub)
      } catch (error) {
        setError('There was an error. Try again.')
      }
    }
 
  return (
    <>
      <h2>Create New Post</h2>
      <div className={styles.container}>
        <form
          className={styles.form}
          onSubmit={createPost}
        >
          <div>
            <label>Title<input type='text' value={post.postTitle} name='postTitle' onChange={handleChange} placeholder='Title' /></label>
            <label>Body<input type='text' value={post.postBody} name='postBody' onChange={handleChange} placeholder='Body' /></label>
          </div>
          <input className={styles.button} type='submit' value='Create Post' />
          <br /><p className='error-message'>&nbsp;{error}</p>
        </form>
      </div>

    </>
  )
}
