import React from 'react';

const Card = ({ children, className = '' }) => (
  <div className={`card ${className} `.trim()}>{children}</div>
);

export default Card;
