import React from 'react';

const Title = () => (
  <b>
    <i>Curl!</i>
  </b>
);

const Section = ({ children, id }) => {
  return (
    <div className="section" id={id}>
      {children}
    </div>
  );
};

export { Title, Section };
