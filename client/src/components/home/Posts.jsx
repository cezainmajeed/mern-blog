import {React,useState,useEffect} from "react";
import Post from "./Post";
import {Grid} from "@material-ui/core";
import {Link} from "react-router-dom";

import {getAllPosts} from "../../service/api";

function Posts(){
  let [posts,setPosts]=useState([]);

  useEffect(()=>{
    const fetchdata= async()=>{
      let data=await getAllPosts();
      //console.log(data);
      setPosts(data);
    }
    fetchdata();
  },[]);

  
  return (
    posts.map(post=>(
      <Grid item lg={3} sm={6} xs={12}>
      <Link to={`/detail/${post._id}`} style={{textDecoration:"none",color:"inherit"}}>
      <Post post={post}/>
      </Link>
      </Grid>
    ))
  );
}

export default Posts;
