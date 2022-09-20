import React from 'react'
import { FaSteam, FaTwitter, FaDiscord } from 'react-icons/fa'
import '../styling/footer.css'

const Footer = () => {
  return <div className="footer">
    <a href="https://store.steampowered.com/app/2100970/Curl/" target="_blank" rel='noreferrer' className="footer-icon-box">
        <FaSteam className='footer-icon'/>
    </a>
    <a href="https://twitter.com/bonspiel_games" target="_blank" rel='noreferrer' className="footer-icon-box">
        <FaTwitter className='footer-icon'/>
    </a>
    <a href="https://discord.gg/FBn84MpCfS" target="_blank" rel='noreferrer' className="footer-icon-box">
        <FaDiscord className='footer-icon'/>
    </a>
  </div>
}

export default Footer