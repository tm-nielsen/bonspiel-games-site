import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styling/navbar.css';
import logo from '../images/favicon.ico';

const Navbar = () => {
  const [opacity, setOpacity] = useState(0);

  const ref = useRef(null);

  useEffect(() => {
    const height = ref.current.clientHeight;
    const range = 100;
    const offset = height / 2;

    const onScroll = (e) => {
      let calc = (window.scrollY - offset + range) / range;

      if (calc > 0.9) calc = 0.9;
      else if (calc < 0) calc = 0;

      setOpacity(calc);
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div className="navbar" ref={ref}>
      <div className="nav-bg" style={{ opacity: opacity }} />
      <div className="width-container-flat">
        <div className="flex-container" style={{ flex: 2 }}>
          <Link to="/#" className="nav-main">
            <img src={logo} alt="logo" className="nav-logo" />
            <h1 className="nav-main">Bonspiel Games</h1>
          </Link>
        </div>
        <div className="flex-container">
          <nav>
            <ul className="nav-list">
              <li>
                <Link to={{ pathname: '', hash: '' }} className="nav-link">
                  Curl
                </Link>
              </li>
              <li>
                <Link to={{ pathname: '', hash: 'faq' }} className="nav-link">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to={{ pathname: '', hash: 'team' }} className="nav-link">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/bci" className="nav-link">
                  About BCI
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
