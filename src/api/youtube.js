import axios from "axios";

const KEY = "AIzaSyA6lHUWV0iS28ZqPw7W-MCsoxk1OntdQ5M";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
