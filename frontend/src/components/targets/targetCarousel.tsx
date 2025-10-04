import React, { useState } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const TargetCarousel: React.FC<Props> = ({ children, className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = React.Children.count(children);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  };

  return (
    <div className={`targetCarousel ${className || ""}`}>
      {/* Contenedor deslizante */}
      <div
        className="targetCarouselContainer"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {React.Children.map(children, (child, index) => (
          <div className="targetCarouselItem" key={index}>
            {child}
          </div>
        ))}
      </div>

      {/* Controles */}
      <div className="targetCarouselControls">
        <button onClick={handlePrev}>❮</button>
        <button onClick={handleNext}>❯</button>
      </div>
    </div>
  );
};

export default TargetCarousel;
