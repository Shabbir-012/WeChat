import React from 'react'
import './RightSideBar.css'
import assets from '../../assets/assets'

const RightSideBar = () => {
  return (
    <div className="rs">
      <div className="rs-profile">
        <img src={assets.profile_img} alt="" />
        <h3>Richar Sanford <img src={assets.green_dot} className='dot' alt="" /></h3>
        <p>Hey, There i am Richard Sanford using chat app</p>
      </div>
    </div>
  )
}

export default RightSideBar
