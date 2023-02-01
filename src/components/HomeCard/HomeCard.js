import React from 'react'
// import './HomeCard.css'

export default function HomeCard() {
    return(
        <div className='HomeCardContainer'>
            <div className='HomeCard'>
                <h2 className="HomeTitle">Home</h2>
                <p className="HomeBlurb">Your personal Skipdit frontpage. Come here to check in with your favorite communities.</p>
                <div className='HomeCardButtons'>
                    <button>CREATE A POST</button>
                    <button>CREATE A COMMUNITY</button>
                </div>
            </div>
            <div className='PolicyCard'>
                <ul>
                    <li>User Agreement</li>
                    <li>Privacy Policy</li>
                    <li>Conent Policy</li>
                    <li>Moderator Code of Conduct</li>
                </ul>
                <h4>Skipdit. A GA group project. All rights reserved.</h4>
            </div>
        </div>
    )
}
