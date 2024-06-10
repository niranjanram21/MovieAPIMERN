import axios from 'axios';
import { API_KEY, TMDB_BASE_URL } from "./constants";

const fetchTrailer = async (id, type) => {
  try {
    const response = await axios.get(
      `${TMDB_BASE_URL}/${type}/${id}/videos?api_key=${API_KEY}`
    );
    const trailer = response.data.results.find(
      (video) => video.type === 'Trailer' && video.site === 'YouTube'
    );
    return trailer ? `https://www.youtube.com/watch?v=${trailer.key}` : null;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      console.warn(`No trailer found for ${type} with ID ${id}`);
      return null;
    } else {
      console.error(`Failed to fetch trailer for ${type} with ID ${id}: ${error.message}`);
      return null;
    }
  }
};

export default fetchTrailer;
