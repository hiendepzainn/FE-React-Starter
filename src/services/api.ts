import axios from "axios";

const loginAPI = async (username: string, password: string) => {
  const url = "http://localhost:8000/api/login";
  const response = await axios.post(url, {
    username,
    password,
  });

  return response;
};

export { loginAPI };
