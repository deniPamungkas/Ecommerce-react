import { useState } from "react";

const images = [
  "https://via.placeholder.com/800x400/ff0000/ffffff",
  "https://via.placeholder.com/800x400/00ff00/000000",
  "https://via.placeholder.com/800x400/0000ff/ffffff",
];

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const selectImage = (index) => {
    setCurrentImage(index);
  };

  return (
    <div className="relative w-full">
      <div className="overflow-hidden relative w-full">
        <div
          className="flex transition-transform duration-300 ease-in-out transform"
          style={{
            width: `${images.length * 100}%`,
            transform: `translateX(-${currentImage * (100 / images.length)}%)`,
          }}
        >
          {images.map((imageUrl, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img
                src={imageUrl}
                alt={`slide-${index + 1}`}
                className="w-full"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex mt-2 justify-center">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => selectImage(index)}
            className={`w-4 h-4 mx-1 rounded-full ${
              index === currentImage ? "bg-gray-800" : "bg-gray-400"
            } focus:outline-none`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
