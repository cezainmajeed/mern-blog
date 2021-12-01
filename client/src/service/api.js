import axios from "axios";

const URL = "http://localhost:8000";

export const sendPost = async(post)=> {
  try {
      return await axios.post(`${URL}/create`,post);
  } catch(error) {
    console.log(error);
  }
}
