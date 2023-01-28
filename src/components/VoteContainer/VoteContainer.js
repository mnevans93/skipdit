import { useState, useEffect } from 'react'
import { redirect } from 'react-router-dom'

export default function VoteContainer({ props }) {
    const [voteUp, voteDown] = useState(true);

  return (
    <div className="Vote">
 <form class="voteUp" data-id="{{this._id}}">
    <button type="submit">Vote Up</button>
  </form>
  
  <form class="voteDown" data-id="{{this._id}}">
    <button type="submit">Vote Down</button>
  </form>
    </div>
  );
}