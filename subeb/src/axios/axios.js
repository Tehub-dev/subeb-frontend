import axios from "axios";

export const baseUrl = process.env.REACT_APP_BASE_URL;
const auth = JSON.parse(localStorage.getItem("atk"));
const token = !auth ? "" : auth.authToken;

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};
const authConfig = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
};
const formConfig = {
  headers: {
    "Content-Type": "multipart/form-data",
    Authorization: `Bearer ${token}`,
  },
};

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

export async function AxiosAuthPost(url, dataObject) {
  try {
    const res = await axios.post(`${baseUrl}${url}`, dataObject, authConfig);
    return res.data;
  } catch (err) {
    throw err;
  }
}

export async function AxiosAuthPut(url, dataObject) {
  try {
    const res = await axios.put(`${baseUrl}${url}`, dataObject, authConfig);
    return res.data;
  } catch (err) {
    throw err;
  }
}

export async function AxiosDelete(url) {
  try {
    const res = await axios.delete(`${baseUrl}${url}`, authConfig);
    return res.data;
  } catch (err) {
    throw err;
  }
}

export async function AxiosAuthGet(url) {
  try {
    const res = await axios.get(`${baseUrl}${url}`,authConfig);
    return res.data;
  } catch (err) {
    throw err;
  }
}

export async function AxiosFormData(url, dataObject) {
  try {
    const res = await axios.post(`${baseUrl}${url}`, dataObject, formConfig);
    return res.data;
  } catch (err) {
    throw err;
  }
}