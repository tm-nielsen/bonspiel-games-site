import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollWrapper = (props) => {
  const location = useLocation();
  const [previousLocation, setPreviousLocation] = useState(location);
  const shouldReduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    var hash = location.hash;
    if (hash === '') hash = 'root';
    else hash = hash.slice(1);

    var scrollOptions = { behavior: 'auto' };
    if (location.pathname === previousLocation.pathname && !shouldReduceMotion)
      scrollOptions.behavior = 'smooth';

    document.getElementById(hash).scrollIntoView(scrollOptions);

    setPreviousLocation(location);
  }, [location, previousLocation.pathname]);

  return <>{props.children}</>;
};

export default ScrollWrapper;
