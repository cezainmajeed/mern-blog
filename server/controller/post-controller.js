import Post from "../model/post.js";


export const createPost = async(req,res)=>{
  //console.log(req.body);
  try{
    const post=await new Post(req.body);
    post.save();
    res.status(200).json("Blog saved Successfully");
  } catch(error) {
    res.status(500).json(error);
  }
}

export const getAllPosts = async(req,res)=> {
  try {
    const posts=await Post.find({});
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json(error);
  }
}

export const getPost = async(req,res)=> {
  try{
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch(error) {
    res.status(500).json(error);
  }
}
