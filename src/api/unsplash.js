import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID JlhxkEB_fqtK6E2WEHXEordZzZ3D344X9aZEFPggt2c"
  }
});
