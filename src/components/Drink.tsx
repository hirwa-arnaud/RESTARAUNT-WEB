import { useState } from "react";

function Drink() {
  const images = ["wine.png", "wine.webp", "adrian2.png"];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="drink">
      <div className="coc">
        <img className="img" src={images[currentIndex]} alt="drink" />
        <img src="right.png" alt="next" onClick={handleNext} />
        <img src="left.png" alt="previous" onClick={handlePrev} />
      </div>

      <div className="cok">
        <h1 className={currentIndex === 0 ? "cock" : ""}>Wine</h1>
        <h1 className={currentIndex === 1 ? "cock" : ""}>Cocktails</h1>
        <h1 className={currentIndex === 2 ? "cock" : ""}>Beer</h1>
      </div>
    </div>
  );
}

export default Drink;
