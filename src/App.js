import React, { useState } from "react";
import MovieList from "./MovieList";
import Filter from "./Filter";

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A thief who steals corporate secrets through dream-sharing technology.",
      posterURL: "https://media.istockphoto.com/id/2163766216/photo/idea-innovative-product-launch-concept-businessman-touching-on-the-botton-rocket-icons.webp?a=1&b=1&s=612x612&w=0&k=20&c=g4dc1MRbeFVtnkISD1KDeAPASuDcH565KmLmmi8K3a8=",
      rating: 5,
    },
    {
      title: "Interstellar",
      description: "A team of explorers travel through a wormhole in space to save humanity.",
      posterURL: "https://m.media-amazon.com/images/M/MV5BMTQ0MjQ3NjE1MF5BMl5BanBnXkFtZTgwMzMyODgxMzE@._V1_QL75_UX820_.jpg",
      rating: 4,
    },
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);

  const addMovie = () => {
    const title = prompt("Enter movie title:");
    const description = prompt("Enter movie description:");
    const posterURL = prompt("Enter movie poster URL:");
    const rating = parseFloat(prompt("Enter movie rating (1-5):"));

    if (title && description && posterURL && rating) {
      const newMovie = { title, description, posterURL, rating };
      setMovies((prevMovies) => [...prevMovies, newMovie]);
      setFilteredMovies((prevMovies) => [...prevMovies, newMovie]);
    } else {
      alert("All fields are required!");
    }
  };

  const handleFilter = (key, value) => {
    const lowerCaseValue = value.toLowerCase();

    setFilteredMovies(
      movies.filter((movie) => {
        if (key === "title") {
          return movie.title.toLowerCase().includes(lowerCaseValue);
        } else if (key === "rating") {
          return movie.rating >= parseFloat(value || 0);
        }
        return true;
      })
    );
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Movie App</h1>
      <button onClick={addMovie} style={{ display: "block", margin: "20px auto", padding: "10px" }}>
        Add Movie
      </button>
      <Filter onFilter={handleFilter} />
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
