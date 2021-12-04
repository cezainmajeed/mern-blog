import {React, useState,useEffect} from "react";
import {Box,makeStyles,FormControl,InputBase,Button,TextareaAutosize} from "@material-ui/core";
import {AddCircle} from "@material-ui/icons";
import {sendPost,uploadFile} from "../../service/api";
import { useNavigate } from 'react-router-dom';

const useStyles=makeStyles((theme)=>({
  container:{
    padding:"0px 100px",
    [theme.breakpoints.down('md')]: {
      padding:0
    }
  },
  image:{
    width:"100%",
    height:"50vh",
    objectFit:"cover"
  },
  form:{
    display:"flex",
    flexDirection:"row",
    marginTop:10
  },
  textField:{
    flex:1,
    margin: "0px 30px",
    fontSize:25
  },
  textarea:{
    marginTop:50,
    width:"100%",
    border:"none",
    fontSize:18,
    '&:focus-visible':{
      outline:"none"
    }
  }
}));

const initialValue ={
  title:"",
  description:"",
  image:"",
  username:"Cezain Majeed",
  category:"All",
  createDate:new Date()
}

function CreatePost(){

  const [post,setPost]=useState(initialValue);
  const [file,setFile]=useState('');
  const [imageURL,setImageURL]=useState('');

  const classes=useStyles();
  const url=post.image ? post.image : "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";
  const navigate=useNavigate();


  useEffect(()=>{
    const getImage=async()=>{
      if(file){
        const data=new FormData();
        data.append("name",file.name);
        data.append("file",file);

        const image=await uploadFile(data);
        post.image=image.data;
        setImageURL(image.data);
      }
    }
    getImage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[file])

  const handleChange=(e)=>{
    setPost({...post, [e.target.name]: e.target.value});
  }

  const savePost = async()=>{
    await sendPost(post);
    navigate("/");
  }
  return (
    <Box className={classes.container}>
    <img className={classes.image} src={url} alt="banner" />

    <FormControl className={classes.form}>
    <label htmlFor="fileInput">
    <AddCircle color="action" fontSize="large"/>
    </label>
    <input
        type="file"
        id="fileInput"
        style={{display:"none"}}
        onChange={(e)=>setFile(e.target.files[0])}
    />
    <InputBase
         onChange={(e)=>handleChange(e)}
         className={classes.textField}
         placeholder="title"
         name="title"
    />
    <Button onClick={()=>savePost()} variant="contained" color="primary">Publish</Button>
    </FormControl>
    <TextareaAutosize
         onChange={(e)=>handleChange(e)}
         rowsMin={5}
         placeholder="Write Your Blog here..."
         className={classes.textarea}
         name="description"
    />
    </Box>
  );
}

export default CreatePost;
