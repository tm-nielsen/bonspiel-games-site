import React from 'react'
import '../styling/widget.css'
import capsule from '../images/Small-Capsule.jpg'

const SteamWidget = () => {
  return <div className="widget">
    <div className="widget-header">
        <h2 className="head">Curl! </h2>
        <h2 className="tail">on Steam</h2>
    </div>
    <div className="desc">
        <a href="https://store.steampowered.com/app/2100970/Curl/" target="_blank" rel="noreferrer">
            <img src={capsule} alt="small logo image" className="logo" />
        </a>
        <p>
            The beloved and captivating sport is spreading to new worlds! Take up the broom to challenge your friends locally or online to a competition of wit, teamwork, and silliness in this first-of-its-kind game, built for accessibility with brain-computer interface integration.
        </p>
    </div>
    <div className="wishlist-container">
        <div className="date">
            <h2 className="date">Available: Late 2022</h2>
        </div>
        <div className="wishlist-button">
            <a href="https://store.steampowered.com/app/2100970/Curl/"  target="_blank" rel="noreferrer" className="wishlist-button-content">
                Wishlist on Steam
            </a>
        </div>
    </div>
  </div>
}

export default SteamWidget