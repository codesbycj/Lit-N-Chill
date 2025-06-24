import React from 'react'
import Youtube from '../../youtube_icon.png'
import Twitter from '../../twitter_icon.png'
import Instagram from '../../instagram_icon.png'
import Facebook from '../../facebook_icon.png'
import './Footer.css'

export const Footer = () => {
  return (
    <div className='footer'>
      <div className="footerIcons">
        <img src={Youtube} alt="" />
        <img src={Twitter} alt="" />
        <img src={Instagram} alt="" />
        <img src={Facebook} alt="" />
      </div>

      <ul>
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Media Center</li>
        <li>Home Wisdom</li>
        <li>BootDre</li>
        <li>Media Center</li>
        <li>Jobs</li>
        <li>Audio Description</li>
        <li>Legal Notice</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>

      <p className="copyright">1997 - 2025 Netflix, inc</p>
    </div>
  )
}
