import React from "react";
import {Box,makeStyles,FormControl,InputBase,Button,TextareaAutosize} from "@material-ui/core";
import {AddCircle} from "@material-ui/icons";

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

function Update(){
  const classes=useStyles();
  const url="https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";
  return (
    <Box className={classes.container}>
    <img className={classes.image} src={url} alt="banner" />

    <FormControl className={classes.form}>
    <AddCircle color="action" fontSize="large"/>
    <InputBase className={classes.textField} placeholder="title"/>
    <Button variant="contained" color="primary">Update</Button>
    </FormControl>
    <TextareaAutosize
         rowsMin={5}
         placeholder="Write Your Blog here..."
         className={classes.textarea}
    />
    </Box>
  );
}

export default Update;
