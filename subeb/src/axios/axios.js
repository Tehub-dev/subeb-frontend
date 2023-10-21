import axios from "axios";
// import useAuth from "../hooks/useAuth";

export const baseUrl = process.env.REACT_APP_BASE_URL;
// const auth = JSON.parse(localStorage.getItem("atk"));
// const token = !auth ? "" : auth.authToken;

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};
// const authConfig = {
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: `Bearer ${token}`,
//   },
// };
// const formConfig = {
//   headers: {
//     "Content-Type": "multipart/form-data",
//     Authorization: `Bearer ${token}`,
//   },
// };

export async function AxiosPost(url, dataObject) {
  try {
    const res = await axios.post(`${baseUrl}${url}`, dataObject, config);
    return res.data;
  } catch (err) {
    throw err;
  }
}


export async function AxiosGet(url) {
  try {
    const res = await axios.get(`${baseUrl}${url}`,config);
    return res.data;
  } catch (err) {
    throw err;
  }
}
