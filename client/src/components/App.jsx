import React from "react";
import NavBar from "./NavBar";
import Home from "./home/Home"
import DetailView from "./detail/DetailView";
import CreatePost from "./create/CreatePost";
import Update from "./create/Update";

import {Box} from "@material-ui/core"
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App(){
  return (
    <BrowserRouter>
    <NavBar/>
    <Box style={{marginTop:64}}>
    <Routes>
         <Route exact path="/" element={<Home/>}/>
         <Route exact path="/detail/:id" element={<DetailView/>}/>
         <Route exact path="/create" element={<CreatePost/>}/>
         <Route exact path="/update/:id" element={<Update/>}/>
    </Routes>
    </Box>
    </BrowserRouter>
  );
}

export default App;
