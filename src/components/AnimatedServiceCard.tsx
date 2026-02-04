import React from 'react';
import data from '../data/services.json';
import Card from './Card';

const AnimatedServiceCard = () => {
  return (
    <div>
      {data.services.map((service) => (
        <Card
          key={service.id}
          title={service.title}
          description={service.description}
          features={service.features}
          bgColor={service.bgColor}
          color={service.color}
        />
      ))}
    </div>
  );
};

export default AnimatedServiceCard;
