// import React, { useRef } from 'react';

// interface CardTypeProps {
//   i: number;
//   title: string;
//   description: string;
//   features: string[];
//   color: string;
//   bgColor: string;
//   progress: number;
//   range: [number, number];
//   targetScale: number;
// }

// const Card = ({
//   i,
//   title,
//   description,
//   features,
//   color,
//   bgColor,
//   progress,
//   range,
//   targetScale,
// }: CardTypeProps) => {
//   // Scale: 1 at start of range, targetScale at end
//   const rangeLength = range[1] - range[0];
//   const normalizedProgress = Math.max(
//     0,
//     Math.min(1, (progress - range[0]) / rangeLength)
//   );
//   const scale = 1 - normalizedProgress * (1 - targetScale);

//   return (
//     <div className="h-screen max-h-200 sticky top-24 flex items-start justify-center px-4">
//       <div
//         className={`bg-white text-primary-text relative rounded-2xl p-8 lg:p-12 w-full max-w-4xl origin-top shadow-lg`}
//         style={{
//           transform: `scale(${scale})`,
//           top: `calc(-5vh + ${i * 25}px)`,
//         }}
//       >
//         <h2 className="text-2xl md:text-3xl font-extrabold my-4">{title}</h2>
//         <div className="lg:flex lg:items-start lg:justify-between gap-4 lg:gap-8">
//           <div className="mb-8 md:w-xl">
//             <h3 className="text-md font-light uppercase mt-8 mb-4 lg:mt-0">
//               Miben segítek?
//             </h3>
//             <p className="text-lg md:text-xl font-semibold text-left">
//               {description}
//             </p>
//           </div>

//           <ul>
//             {features.map((feature, index) => (
//               <li key={index} className="flex gap-4 mb-4 items-start text-lg">
//                 <p className="font-semibold">{`0${index + 1}`}</p>
//                 <p className="font-medium">{feature}</p>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;
