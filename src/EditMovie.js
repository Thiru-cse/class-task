import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {useParams} from "react-router-dom";
import { useHistory } from "react-router-dom";

export function EditMovie({ movies, setMovies}) {
  const {id} = useParams();
  const movie = movies[id];
  const history = useHistory();
  const [name, setName] = useState(movie.name);
  const [poster, setPoster] = useState(movie.poster);
  const [rating, setRating] = useState(movie.rating);
  const [summary, setSummary] = useState(movie.summary);
  const [trailer, setTrailer] = useState(movie.trailer);
  const setMovieName = (event) => setName(event.target.value);
  const setPosterName = (event) => setPoster(event.target.value);
  const setRatingName = (event) => setRating(event.target.value);
  const setSummaryName = (event) => setSummary(event.target.value);
  const setTrailerName = (event) => setTrailer(event.target.value);
  const addMovie = () => {
    console.log({ name, poster, rating, summary });
    const updateMovie = { name, poster, rating, summary,trailer };
    // 1.copyarray
    // 2.replace the element in copyarray
    // this is for saving the changes to the edited movie in the form
   const copyMovies=[...movies];
   copyMovies[id]=updateMovie;
   setMovies(copyMovies);
   history.push("/movies");
  //  setMovies([...movies, newMovie]);
    // resetMovieForm();
  };

  // const resetMovieForm = () => {
  //   setName("");
  //   setPoster("");
  //   setRating("");
  //   setSummary("");
  //   setTrailer("");
  // };
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
      <Button variant="contained" color="error" onClick={addMovie}>
       Save Movie
      </Button>
    </div>
  );
}