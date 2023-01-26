import { useState } from 'react'
import { useState, useEffect } from 'react'

export default function CreatePostForm ({ }) {
    const [ post , setPost ] = useState({
      title: '',
      body: ''
    })

   const handleChange = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value })
  } 
 
  return (
    <>
      <h2>Create New Post</h2>
      <div className={styles.container}>
        <form
          className={styles.form}
          onSubmit={(e) => {
            e.preventDefault()
            createPost()
          }}
        >
          <div>
            <label>Title<input type='text' value={post.title} name='title' onChange={handleChange} placeholder='Title' /></label>
            <label>Body<input type='text' value={post.body} name='body' onChange={handleChange} placeholder='Body' /></label>
          </div>
          <input className={styles.button} type='submit' value='Create Post' />
        </form>
      </div>

    </>
  )
}
