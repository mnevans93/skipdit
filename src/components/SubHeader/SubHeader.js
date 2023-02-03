import React from 'react'
import './SubHeader.scss'

export default function SubHeader({currentSub}) {
  return (
    <div className='SubHeaderContainer'>
      <div className='SubHeaderSizer'>
        <h1 className='SubHeaderTitle'> {currentSub.subName}</h1>
        <h3 className='SubHeaderUsername'> s/{currentSub.subOwner.username}</h3>
        {/* <h4 className='SubHeaderPath'>Path: {`/s/${currentSub._id}`}</h4> */}
        {/* <button /> if joined then display leave else display join */}
      </div>
    </div>
  )
}