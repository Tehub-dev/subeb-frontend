import axios from "axios";

export const baseUrl = process.env.REACT_APP_BASE_URL;
// const auth = JSON.parse(localStorage.getItem("atk"));
// const token = !auth ? "" : auth.authToken;

// const config = {
//   headers: {
//     "Content-Type": "application/json",
//   },
// };
// const auth = JSON.parse(localStorage.getItem("atk"));
// const token = !auth ? "" : auth.authToken;
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
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post(`${baseUrl}${url}`, dataObject, config);
    return res.data;
  } catch (err) {
    throw err;
  }
}

export async function AxiosGet(url) {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.get(`${baseUrl}${url}`, config);
    return res.data;
  } catch (err) {
    throw err;
  }
}

export async function AxiosAuthPost(url, dataObject) {
  const auth = JSON.parse(localStorage.getItem("atk"));
  const token = !auth ? "" : auth.authToken;
  const authConfig = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const res = await axios.post(`${baseUrl}${url}`, dataObject, authConfig);
    return res.data;
  } catch (err) {
    throw err;
  }
}
export async function AxiosAuthPatch(url, dataObject) {
  const auth = JSON.parse(localStorage.getItem("atk"));
  const token = !auth ? "" : auth.authToken;
  const authConfig = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const res = await axios.patch(`${baseUrl}${url}`, dataObject, authConfig);
    return res.data;
  } catch (err) {
    throw err;
  }
}

export async function AxiosAuthPut(url, dataObject) {
  const auth = JSON.parse(localStorage.getItem("atk"));
  const token = !auth ? "" : auth.authToken;
  const authConfig = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const res = await axios.put(`${baseUrl}${url}`, dataObject, authConfig);
    return res.data;
  } catch (err) {
    throw err;
  }
}

export async function AxiosDelete(url) {
  const auth = JSON.parse(localStorage.getItem("atk"));
  const token = !auth ? "" : auth.authToken;
  const authConfig = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const res = await axios.delete(`${baseUrl}${url}`, authConfig);
    return res.data;
  } catch (err) {
    throw err;
  }
}

export async function AxiosAuthGet(url) {
  const auth = JSON.parse(localStorage.getItem("atk"));
  const token = !auth ? "" : auth.authToken;
  const authConfig = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const res = await axios.get(`${baseUrl}${url}`, authConfig);
    return res.data;
  } catch (err) {
    throw err;
  }
}

export async function AxiosFormData(url, dataObject) {
  const auth = JSON.parse(localStorage.getItem("atk"));
  const token = !auth ? "" : auth.authToken;
  const formConfig = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const res = await axios.post(`${baseUrl}${url}`, dataObject, formConfig);
    return res.data;
  } catch (err) {
    throw err;
  }
}
