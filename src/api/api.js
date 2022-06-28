import axios from "axios";

// TODO read from env
export default axios.create({
  baseURL: "localhost:8000",
});
