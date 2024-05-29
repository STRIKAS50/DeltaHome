
import React from "react";

interface BackgroundProps {
  image: React.ReactNode;
  children: React.ReactNode;
}

const Background: React.FC<BackgroundProps> = ({ image, children }) => {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
      {image}
      <div className="z-10 flex flex-col items-center justify-center p-20 bg-black bg-opacity-50">
        {children}
      </div>
    </div>
  );
};

export default Background;
