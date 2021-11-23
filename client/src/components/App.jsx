import React from "react";
import NavBar from "./NavBar";
import Home from "./home/Home"
import {Box} from "@material-ui/core"


function App(){
  return (
    <div>
    <NavBar/>
    <Box style={{marginTop:64}}> 
    <Home/>
    </Box>
    </div>
  );
}

export default App;
