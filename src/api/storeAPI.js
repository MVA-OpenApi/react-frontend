import axiosInstance from "./api.js";

// get all
var getAllItems = async () => {
  return await axiosInstance.get(path);
};

export { getAllItems };
