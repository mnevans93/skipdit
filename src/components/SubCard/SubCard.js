import React from 'react'
// import './SubCard.css'

export default function SubCard(props) {
    return(
        <div className='SubCardContainer'>
            <h4 className="SubCardHeader">{props.title}</h4>
            <div className='AboutBlurb'>
                <p className="AboutSub"></p>
                {/* Created X date */}
            </div>
            <div className="MembersContainer">
                {/* X (total amount of users) / usersNickname */}
                {/* X (total amount of ONLINE users) / online */}
            </div>
            <div className="CreatePostSubButton">
                <button>ooh ooh ooh ooh what does this button do</button>
            </div>
        </div>
    )
}
