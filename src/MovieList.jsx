import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {movies.length > 0 ? (
        movies.map((movie, index) => <MovieCard key={index} movie={movie} />)
      ) : (
        <p>No movies to display</p>
      )}
    </div>
  );
};

export default MovieList;
