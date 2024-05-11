import React from 'react';
import '../styling/widget.css';
import capsule from '../images/Small-Capsule.jpg';

const SteamWidget = () => {
  return (
    <div className="widget">
      <div className="widget-header">
        <b className="head">Curl! </b>
        <b className="tail">on Steam</b>
      </div>
      <div className="desc">
        <a href="https://store.steampowered.com/app/2100970/Curl/" target="_blank" rel="noreferrer">
          <img src={capsule} alt="Curl logo" className="logo" />
        </a>
        <p className="desc">
          The beloved and captivating sport is spreading to new worlds! Take up the broom to challenge your friends locally or online to a competition of wit, teamwork, and silliness in this first-of-its-kind game, built for accessibility with brain-computer interface integration.
        </p>
      </div>
      <div className="wishlist-container">
        <div className="date">
          <b className="date">Available: Late 2022</b>
        </div>
        <div className="wishlist-button">
          {/* <form action="https://store.steampowered.com//api/addtowishlist/" method='POST' target='_blank'>
                <input type="hidden" name="snr" value="1_5_1100_"/>
                <input type="hidden" name="sessionid" value="c22eb79a5552f54ec8c122a4"/>
                <input type="hidden" name="appid" value="2100970"/>
                <input type="hidden" name="widget" value="1"/>
            </form> */}
          <a
            href="https://store.steampowered.com/app/2100970/Curl/"
            target="_blank"
            rel="noreferrer"
            className="wishlist-button-content"
          >
            Wishlist on Steam
          </a>
        </div>
      </div>
    </div>
  );
};

export default SteamWidget;
