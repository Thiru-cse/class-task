import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export function AddMovie({ movies, setMovies }) {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");
  const setMovieName = (event) => setName(event.target.value);
  const setPosterName = (event) => setPoster(event.target.value);
  const setRatingName = (event) => setRating(event.target.value);
  const setSummaryName = (event) => setSummary(event.target.value);
  const setTrailerName = (event) => setTrailer(event.target.value);
  const addMovie = () => {
    console.log({ name, poster, rating, summary });
    const newMovie = { name, poster, rating, summary,trailer };
    setMovies([...movies, newMovie]);
    resetMovieForm();
  };

  const resetMovieForm = () => {
    setName("");
    setPoster("");
    setRating("");
    setSummary("");
    setTrailer("");
  };
  return (
    <div className="add-movie-form">
      <TextField
        value={name}
        onChange={setMovieName}
        label="Movie Name"
        variant="outlined" />
      <TextField
        value={poster}
        onChange={setPosterName}
        label="Poster"
        variant="outlined" />
      <TextField
        value={rating}
        onChange={setRatingName}
        label="Rating"
        variant="outlined" />
      <TextField
        value={summary}
        onChange={setSummaryName}
        label="Summary"
        variant="outlined" />
        <TextField
        value={trailer}
        onChange={setTrailerName}
        label="Trailer"
        variant="outlined" />
      <Button variant="contained" onClick={addMovie}>
        Add Movie
      </Button>
    </div>
  );
}