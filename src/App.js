import './App.css';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import MailIcon from '@mui/icons-material/Mail';
import { cardActionAreaClasses } from '@mui/material';
import { MovieList } from './MovieList';
import {ColorList} from './ColorList';
import { Switch, Route, Link } from "react-router-dom";
import { AddMovie } from "./AddMovie";
import { useState } from "react";
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import {EditMovie} from "./EditMovie";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { ThemeProvider, useTheme, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import HomeIcon from '@mui/icons-material/Home';
import { useEffect } from 'react';
import MovieIcon from '@mui/icons-material/Movie';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { dark } from '@mui/material/styles/createPalette';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import { height } from '@mui/system';
import { MovieDetails } from './MovieDetails';
import { Game } from './Game';


function App() {
  const initial_movies = [
    {
      id:"100",
      name: "Interstellar",
      poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
      rating: 8.6,
      summary: `When Earth becomes uninhabitable in the future, a farmer and ex-NASA 
                  pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team 
                   of researchers, to find a new planet for humans.`,
      trailer: "https://www.youtube.com/embed/zSWdZVtXT7E"             
    },

    {
      id:"101",
      name: "Malik",
      poster:
        "https://static.toiimg.com/photo/msid-80750425/80750425.jpg?594893",
      rating: 8.4,
      summary: `A young man rises to prominence through his unswerving fight against political and police corruption in his village.`,
      trailer : "https://www.youtube.com/embed/41g6MgPkH7E"
    },

    {
      id:"102",
      name: "Bahubali",
      poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
      rating: 8,
      summary: `In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. 
                While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.`,
      trailer: "https://www.youtube.com/embed/CYcKs5fknb8"         
    },

    {
      id:"103",
      name: "The Dark Knight",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
      rating: 9,
      summary: `After Gordon, Dent and Batman begin an assault on Gotham's organised crime, the mobs hire the Joker,
                a psychopathic criminal mastermind who offers to kill Batman and bring the city to its knees.`,
      trailer : "https://www.youtube.com/embed/LDG9bisJEaI"
                  },

    {
      id:"104",
      name: "Birds Of Prey",
      poster:
        "https://resizing.flixster.com/AvapwqD9kdFHB3mmFfFKKOn5Xbs=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzL2ZkNjI0NWUzLWVlOGEtNGM3Yi05MjQzLTVjMzE4NWYzZmI5Mi53ZWJw",
      rating: 6.1,
      summary: `After being thrown out in the streets by Joker, Harley struggles to pick herself up. 
                However, Harley teams up with Huntress, Black Canary and Renee Montoya to defeat a gangster and protect a girl.`,
      trailer : "https://www.youtube.com/embed/kGM4uYZzfu0"  
              },
  ];


  // const [movies, setMovies] = useState(initial_movies);
  const history = useHistory();
  const [mode,setMode] =useState("dark");
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });
  // axios - fetch inbuilt in js
  // useEffect(() => {
  //   fetch("https://6156a144e039a0001725aab5.mockapi.io/movies")
  //  .then((data) => data.json())
  //  .then((mvs) => setMovies(mvs));
  // }, [])







  return (
    <ThemeProvider theme={theme}>
      <Paper styles={{minHeight :"100vh "}}elevation={4} >
    <div className="App">
       <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button startIcon={<HomeIcon />}  onClick={()=>history.push("/")} color="error">Home</Button>
          <Button  startIcon={< MovieIcon />} onClick={()=>history.push("/movies")} color="error">Movies</Button>
          <Button startIcon={< ColorLensIcon />}  onClick={()=>history.push("/color-game")} color="error">Color Game </Button>
          <Button startIcon={< AddPhotoAlternateIcon />}  onClick={()=>history.push("/add-movies")} color="error">Add Movies</Button>
          <Button startIcon={< SportsEsportsIcon />} onClick={()=>history.push("/tictactoe")} color="error">TicTACTOE GAME</Button>
          <Button onClick={()=>setMode(mode==="dark"? "light":"dark" )}
           startIcon={<Brightness4Icon/>} 
           sx={{marginLeft: "auto" }} 
          color="error">{mode==="dark"? "light":"dark" }mode
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
       {/* <AppBar position="static">
      <nav>
        <ul>
         <li> <Link to="/">Home</Link></li>
         <li> <Link to="/movies">Movies</Link></li>
         <li> <Link to="/color-game">Color Game</Link></li>
         <li> <Link to="/add-movies">Add Movies</Link></li>
        </ul>
        </nav>
        </AppBar> */}
        <Switch> 
        <Route exact path="/">
         <Welcome />
         {/* <MovieDetails /> */}
        </Route>
         <Route exact path="/movies">
        <MovieList />
        </Route>
        <Route exact path="/add-movies">
        <AddMovie />
        </Route>
        <Route exact path="/movies/edit/:id">
        <EditMovie  />
        </Route>
        <Route exact path="/movies/:id">
       <MovieDetails/>
        </Route>
        <Route exact path="/color-game">
        <ColorList />
        </Route>
        <Route exact path="/tictactoe">
          <TicTacToe />
          </Route>
        <Route path="**">
        <NotFound />
        </Route>
      </Switch>
    </div>
    </Paper>
    </ThemeProvider>
  );
}
function NotFound(){
  return(
  <div>
    <h3 className ="not-found">404</h3>
    <img 
      src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
      alt=" not found"
      />
  </div>
  );
}

function Welcome(){
  return <h1>Welcome All✌</h1>
}

function TicTacToe(){

  return <Game/>
}

export default App;

