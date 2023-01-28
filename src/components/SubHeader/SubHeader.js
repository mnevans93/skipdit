import React from 'react'
// import './SubHeader.scss'

function SubHeader(props) {
  return (
    <div className='SubHeaderContainer'>
        <h1 className='SubHeaderTitle'>`${props.title}`</h1>
        <h4 className='SubHeaderPath'>${}</h4>
        {/* <button /> if joined then display leave else display join */}
    </div>
  )
}

export default SubHeader