import React from 'react'
import photo from '../../Assets/profile.jpg';
import './profile.css'

function Profile() {
  return (
    <div className="sidebar-profiles">
      <div className="sidebar-profiles__image">
        <img src={photo} alt="profile" />
      </div>
      <div className="sidebar-profiles__names">
        <h1>Josue Batey</h1>
        <p><strong>Full-stack Developer</strong> based in Kigali</p>
      </div>
    </div>
  )
}

export default Profile;
