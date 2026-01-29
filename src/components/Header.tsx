import React, { useState, useEffect } from 'react';
import { LuAlignLeft } from 'react-icons/lu';
const Header: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="p-8 bg-primary-bg lg:px-48">
      {isMobile ? (
        <div className="flex justify-between items-center">
          <h1
            className="font-family-bebas font-regular 
          text-xl"
          >
            AGNESNORA <br />
            STUDIO
          </h1>
          <LuAlignLeft className="text-2xl" />
        </div>
      ) : (
        <div className="flex justify-between items-center">
          <h1
            className="font-family-bebas font-regular 
          text-xl"
          >
            AGNESNORA <br />
            STUDIO
          </h1>
        </div>
      )}
    </header>
  );
};

export default Header;
