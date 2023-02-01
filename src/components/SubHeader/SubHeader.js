import React from 'react'
// import './SubHeader.scss'

export default function SubHeader({currentSub}) {
  return (
    <div className='SubHeaderContainer'>
        <h1 className='SubHeaderTitle'>Community Title: {currentSub.subName}</h1>
        <h3>Community Creator: {currentSub.subOwner.username}</h3>
        <h4 className='SubHeaderPath'>Path: {`/s/${currentSub._id}`}</h4>
        {/* <button /> if joined then display leave else display join */}
    </div>
  )
}
