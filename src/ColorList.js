import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ColorBox } from "./colorbox";

  export function ColorList() {
  const [color, setColor] = useState(" ");
  //setcolor will help to change the color
  const styles = { backgroundColor: color, color: 'black' };
  const initial_colors = ["aqua", "skyblue", "pink", "red"];
  const [colors, setColors] = useState(initial_colors);
  return (
    <div>
      {/* <input
                  value={color}
                  style={styles}
                   onChange={(event)=>setColor(event.target.value)}
                 //used to dynamically change the color we entered
                  placeholder="Enter a color"
             /> */}
      <TextField label="Enter a color"
        value={color}
        style={styles}
        onChange={(event) => setColor(event.target.value)}
        variant="outlined" />
      <Button variant="contained"
        onClick={() => setColors([...colors, color])}
      >Add Color</Button>
      {/* <button onClick={()=>setColors([...colors ,color])}>Add Color</button> */}
      {colors.map((clr) => (
        <ColorBox color={clr} />
      ))}
    </div>
  );
}