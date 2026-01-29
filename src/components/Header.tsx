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
    <header className="p-4 bg-primary-bg">
      {isMobile ? (
        <div className="flex justify-between items-center">
          <h1
            className="font-bebas  font-bold tracking-tighter
          text-xl"
          >
            AGNESNORA <br />
            STUDIO
          </h1>
          <LuAlignLeft className="text-2xl" />
        </div>
      ) : (
        <h1 className="text-2xl font-bold">Desktop Header</h1>
      )}
    </header>
  );
};

export default Header;
