import React from 'react';
interface CardTypeProps {
  title: string;
  description: string;
  features: string[];
  color: string;
  bgColor: string;
}
const Card = ({
  title,
  description,
  features,
  color,
  bgColor,
}: CardTypeProps) => {
  return (
    <div className={`${bgColor} ${color} p-6 rounded-lg `}>
      <h1 className="text-3xl font-extrabold my-8">{title}</h1>
      <div className="lg:flex lg:items-start lg:justify-between">
        <div className="mb-12">
          <h2 className="text-md font-extralight uppercase  mt-16 mb-4 lg:mt-0">
            Miben segítek?
          </h2>
          <p className="text-xl/8 font-semibold text-left ">{description}</p>
        </div>

        <ul>
          {features.map((feature, index) => (
            <li key={index} className="flex gap-4 mb-4 items-start text-lg ">
              <p className="font-semibold">{`0${index + 1}`}</p>
              <p className="font-medium">{feature}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
