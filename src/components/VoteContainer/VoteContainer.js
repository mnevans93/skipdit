import { useState, useEffect } from 'react'
import { show, update } from '../../utilities/general-service'
import './VoteContainer.scss'

export default function VoteContainer ({ user, currentPost, setUpdated }) {
  const [error, setError] = useState('')
  const [disable, setDisable] = useState(false)

  useEffect(() => {
    if (!user) setDisable(true)
  }, [user])

  const changeVotes = async (event, value) => {
    event.preventDefault()
    try {
      // Need to make sure we are updating the post state in
      // the database in case our React state isn't up to date
      const post = await show('posts', currentPost._id)
      // set the post votes equal to existing votes + or - this vote
      post.votes += value
      // use our locally modified post variable to update the post
      const updatedPost = await update('posts', currentPost._id, { ...post })
      setUpdated(Math.random())
    } catch (error) {
      setError('There was an error. Try again.')
    }
  }

  return (
    <div className='voteContainer'>
      <form onSubmit={e => changeVotes(e, 1)}>
        <button className='voteUp' type='submit' disabled={disable}>&#8679;</button>
      </form>
      <p>{currentPost.votes}</p>
      <form onSubmit={e => changeVotes(e, -1)}>
        <button className='voteDown' type='submit' disabled={disable}>&#8681;</button>
      </form>
      <br /><p className='error-message'>&nbsp;{error}</p>
    </div>
  )
}
