import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';
import Footer from './Footer';
import '../styling/mobilenav.css';
import logo from '../images/favicon.ico';

const MobileNav = () => {
  const [expanded, setExpanded] = useState(false);

  const onLinkClicked = () => {
    setExpanded(false);
  };

  return (
    <div className="mobile-navbar">
      <div className="width-container-flat">
        <Link to="/#" className="mobile-nav-header">
          <img src={logo} alt="logo" className="mobile-nav-logo" />
          <h1 className="mobile-nav-header">Bonspiel Games</h1>
        </Link>
      </div>
      <button
        className={`nav-button${expanded ? ' nav-button-expanded' : ''}`}
        onClick={() => setExpanded(!expanded)}
        aria-label="menu dropdown"
        aria-expanded={expanded}
      >
        <BiMenu className="nav-button-icon" />
      </button>
      {expanded ? (
        <div className="mobile-nav-background">
          <nav>
            <ul className="mobile-nav-list">
              <li>
                <Link
                  to={{ pathname: '', hash: '' }}
                  className="mobile-nav-link"
                  onClick={onLinkClicked}
                >
                  Curl
                </Link>
              </li>
              <li>
                <Link
                  to={{ pathname: '', hash: 'faq' }}
                  className="mobile-nav-link"
                  onClick={onLinkClicked}
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to={{ pathname: '', hash: 'team' }}
                  className="mobile-nav-link"
                  onClick={onLinkClicked}
                >
                  Team
                </Link>
              </li>
              <li>
                <Link to="bci" className="mobile-nav-link" onClick={onLinkClicked}>
                  About BCI
                </Link>
              </li>
            </ul>
            <Footer />
          </nav>
        </div>
      ) : null}
    </div>
  );
};

export default MobileNav;
