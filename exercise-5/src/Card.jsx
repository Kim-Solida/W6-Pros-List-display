import React from 'react';

const Card = ({ name, hobby, category, picture }) => {
  return (
    <div className="card">
      <img src={picture} alt={name} className="card-image" />
      <div className="card-details">
        <h2>{name}</h2>
        <p>{category}</p>
        <p>{hobby}</p>
      </div>
    </div>
  );
};

export default Card;
