// ReviewCard.js
import React from "react";
import starFilled from '../assets/star-filled.png';


const ReviewCard = ({ authorName, rating, feedback }) => {
  return (
    <div className="card">
      <h3>{authorName}</h3>
      <div className="rating">
        {[...Array(rating)].map((_, index) => (
          <img key={index} src={starFilled} alt="filled star" />
        ))}
      </div>
      <p style={{ fontSize: "19px", textAlign: "left" }}>{feedback}</p>
    </div>
  );
};

export default ReviewCard;
