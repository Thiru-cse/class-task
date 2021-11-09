import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Counter } from './Counter';
import { useHistory } from "react-router-dom";
import InfoIcon from '@mui/icons-material/Info';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import {CardActions } from '@mui/material';
import { MovieList } from "./MovieList";
import EditIcon from '@mui/icons-material/Edit';


export function Movie({ name, poster, rating, summary , id, setMovies ,movies,index}) {
  const [show, setShow] = useState(false);
  const history = useHistory();

  return (
    <Card
      className="movie-container">
      <img className="movie-poster"
        src={poster} alt={name} />
      <CardContent>
        <div className="movie-specs">
          <h3 classname="movie-name">{name}{" "}
          <IconButton
               onClick={()=>history.push("/movies/"+id)}
            //  onClick={() => history.push("/movies/" + id)}
              color="error"
              aria-label="movie-details">
             <InfoIcon />
            </IconButton>
            <IconButton
              className="movie-show-button"
              onClick={() => setShow(!show)}
              color="error"
              aria-label={show ? "Less" : "More"}>
              {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </h3>
          <p className="movie-rating"> ⭐{rating} </p>
        </div>
        {show ? <p>{summary}</p> : " "}
       </CardContent>
       < CardActions>
        <Counter />

        <IconButton
              className="movie-show-button"
              color="error"
              aria-label="delete movie">
              <DeleteIcon />
            </IconButton>
            
        <IconButton
              className="movie-show-button"
               onClick={() => history.push("/movies/edit/"+id) }
              color="error"
              aria-label="delete movie">
              < EditIcon />
            </IconButton>
            </CardActions>
      </Card>
  );
}