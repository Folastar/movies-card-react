import React from "react";

const MovieCard = ({ movie }) => {
  const { title, description, posterURL, rating } = movie;

  return (
    <div style={{ border: "1px solid #ddd", padding: "10px", margin: "10px", borderRadius: "5px" }}>
      <img src={posterURL} alt={title} style={{ width: "150px", height: "200px", objectFit: "cover" }} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p><strong>Rating:</strong> {rating}/5</p>
    </div>
  );
};

export default MovieCard;
