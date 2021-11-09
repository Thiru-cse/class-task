import { useParams } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export function MovieDetails() {
  const { id } = useParams();
  // const movie = movies[id];
  const history = useHistory();

  const [movie, setMovie] = useState([]);
  // axios - fetch inbuilt in js
  useEffect(() => {
    fetch("https://6156a144e039a0001725aab5.mockapi.io/movies/" + id)
   .then((data) => data.json())
   .then((mv) => setMovie(mv));
  }, [])

  

  return (
    <div>
      {/* <h1>Movie id is {id} </h1> */}
      <iframe
        width="900"
        height="506"
        src={movie.trailer}
        //  src="https://www.youtube.com/embed/zSWdZVtXT7E" 
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
      <div className="movie-detail-container">
        <div className="movie-specs">
          <h3 className="movie-name">{movie.name}</h3>
          <p className="movie-rating">⭐{movie.rating}</p>
        </div>
        <p>
          {movie.summary}
        </p>
        <Button
          onClick={() => history.goBack()}
          variant="contained"
          startIcon={<ArrowBackIosIcon />}>
          Back
        </Button>
      </div>
    </div>
  );
}
