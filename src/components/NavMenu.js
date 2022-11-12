import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import MobileNav from './MobileNav';

const NavMenu = () => {
  const [onMobile, setOnMobile] = useState(false);

  useEffect(() => {
    const OnWindowResize = () => {
      var isOnMobile = window.innerWidth < 500;

      if (isOnMobile !== onMobile) setOnMobile(isOnMobile);
    };

    window.addEventListener('resize', OnWindowResize, false);
    OnWindowResize();
  }, [onMobile]);

  if (onMobile) return <MobileNav />;
  return <Navbar />;
};

export default NavMenu;
