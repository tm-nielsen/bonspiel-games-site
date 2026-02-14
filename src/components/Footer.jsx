import React from 'react';
import { FaSteam, FaTwitter, FaDiscord, FaEnvelope } from 'react-icons/fa';
import '../styling/footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <a
        href="https://store.steampowered.com/app/2100970/Curl/"
        target="_blank"
        rel="noreferrer"
        className="footer-icon-box"
        aria-label="Curl on Steam"
      >
        <FaSteam className="footer-icon" />
      </a>
      <a
        href="mailto: contact@bonspiel.games"
        target="_blank"
        rel="noreferrer"
        className="footer-icon-box"
        aria-label="email"
      >
        <FaEnvelope className="footer-icon" />
      </a>
      <a
        href="https://discord.gg/FBn84MpCfS"
        target="_blank"
        rel="noreferrer"
        className="footer-icon-box"
        aria-label='Discord'
      >
        <FaDiscord className="footer-icon" />
      </a>
    </div>
  );
};

export default Footer;
