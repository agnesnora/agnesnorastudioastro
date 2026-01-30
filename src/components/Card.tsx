import React from 'react';
interface CardTypeProps {
  title: string;
  description: string;
  features: string[];
}
const Card = ({ title, description, features }: CardTypeProps) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>{`0${index + 1} ${feature}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
