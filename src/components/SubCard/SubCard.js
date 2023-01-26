import React from 'react'
// import './SubCard.css'

functionSubCards() {
    return(
<div className={'SubCardContainer'}>
    <h4 className="SubCardHeader">props.title</h4>
    <div className={'AboutBlurb'}>
    <p classsName="AboutSub"></p>
    {/* Created X date */}
    </div>
    <div className="MembersContainer">
    {/* X (total amount of users) / usersNickname */}
    {/* X (total amount of ONLINE users) / online */}
    </div>
    <div className="CreatePostSubButton">
        <button />
    </div>
</div>
 );
}

export default SubCard;