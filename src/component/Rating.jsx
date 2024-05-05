import { useState } from "react";
import { FaStar } from "react-icons/fa6";

export default function Rating({ stars = 15 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const mouseClick = (getIndex) => {
    setRating(getIndex);
  };
  const mouseEnter = (getIndex) => {
    setHover(getIndex);
  };
  const mouseLeave = () => {
    setHover(rating);
  };
  return (
    <div className="flex items-center justify-center mt-60 ">
      {[...Array(stars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            className={
              index <= (hover || rating) ? " fill-yellow-500" : "fill-black"
            }
            onClick={() => mouseClick(index)}
            onMouseMove={() => mouseEnter(index)}
            onMouseLeave={() => mouseLeave()}
          />
        );
      })}
    </div>
  );
}
