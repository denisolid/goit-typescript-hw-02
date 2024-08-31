import axios from "axios";

const ACCESS_KEY = "a_gumy9lx_kt3Hq5T_VL-Nfm7N5sI8vLs64Te8qEDXo";

axios.defaults.baseURL = "https://api.unsplash.com/";
axios.defaults.headers.common["Authorization"] = `Client-ID ${ACCESS_KEY}`;

export const searchImages = async (query, page = 0) => {
  const response = await axios.get("/search/photos", {
    params: {
      query,
      page,
      per_page: 10,
    },
  });
  return response.data;
};
