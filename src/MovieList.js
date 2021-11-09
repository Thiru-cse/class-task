import { useState, useEffect } from "react";
import { Movie } from "./Movie";
import DeleteIcon from '@mui/icons-material/Delete';
import { AddMovie } from "./AddMovie";
import { IconButton } from "@mui/material";

export function MovieList() {
  const [movies, setMovies] = useState([]);

// axios - fetch inbuilt in js
  const getMovies = () => {
    fetch("https://6156a144e039a0001725aab5.mockapi.io/movies", {
      method: "GET",
    })
   .then((data) => data.json())
   .then((mvs) => setMovies(mvs));
  };

  const deleteMovie = (id) => {
    fetch("https://6156a144e039a0001725aab5.mockapi.io/movies/" + id, {
      method: "DELETE",
  }).then(()=> getMovies());
};

  useEffect(getMovies, []); 

  return (
    <section>
      <div className="movie-list">
        {movies.map((mv, index) => (
          <Movie
            key={index}
            name={mv.name}
            poster={mv.poster}
            rating={mv.rating}
            summary={mv.summary}
            id={mv.id}
            DeleteMovieButton={
            <IconButton
            className="movie-show-button"
            onClick={()=> deleteMovie(mv.id)}
            color="error"
            aria-label="delete movie">
            <DeleteIcon />
          </IconButton>
          }
            setMovies={setMovies}
            movies={movies}
          />
        ))}
      </div>
    </section>
  );
}

// CRUD

// CREATE - POST
// READ - GET
// UPDATE - PUT
// DELETE - DEL