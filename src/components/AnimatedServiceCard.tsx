import React from 'react';
import services from '../data/services.json';
import Card from './Card';

const AnimatedServiceCard = () => {
  return (
    <div>
      {services.map((service) => (
        <Card
          title={service.title}
          description={service.description}
          features={service.features}
        />
      ))}
    </div>
  );
};

export default AnimatedServiceCard;
