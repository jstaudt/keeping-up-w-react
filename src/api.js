import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID YC3e7sPmburmNqbw4t6pUKUrWd-2Dl6i-xYSPLKg6gw",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
