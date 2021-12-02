import {React,useEffect,useState} from "react";
import {Box,makeStyles,Typography} from "@material-ui/core";
import {Edit,Delete} from "@material-ui/icons";
import {Link,useParams} from "react-router-dom";

import {getPost} from "../../service/api";


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
  icons:{
    float:"right"
  },
  icon:{
    border:"1px solid #878787",
    margin:"5px",
    padding:5,
    borderRadius:10,
    [theme.breakpoints.down('md')]: {
      margin:"0px 10px 0px 0px"
    }
  },
  title:{
    fontSize:38,
    fontWeight:600,
    textAlign:"center",
    margin:"30px 0px 10px 0px"
  },
  subHeading:{
    color:"#494848",
    [theme.breakpoints.down('md')]: {
      padding:"0px 20px"
    }
  },
  link:{
    textDecoration:"none",
    color:"inherit"
  }
}))

const DetailView = () => {
  //Then inside your component
  const { id } = useParams();
  const classes=useStyles();
  const url="https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";
  const [post,setPost]=useState({});


  useEffect(() => {
        const fetchData = async () => {
            let data = await getPost(id);
            //console.log(data);
            setPost(data);
        }
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);



  return (
    <Box className={classes.container}>
    <img className={classes.image} src={post.image || url} alt="banner" />
    <Box className={classes.icons}>
    <Link to={"/update"} className={classes.link}>
    <Edit className={classes.icon} color="primary"/>
    </Link>
    <Delete className={classes.icon} color="error"/>
    </Box>
    <Box className={classes.subHeading}>
    <Typography>Author : <span style={{fontWeight:600}}>{post.username}</span></Typography>
    <Typography>{new Date(post.createDate).toDateString()}</Typography>
    </Box>
    <Typography className={classes.title}>{post.title}</Typography>
    <Typography>{post.description}</Typography>
    </Box>
  );
}

export default DetailView;
