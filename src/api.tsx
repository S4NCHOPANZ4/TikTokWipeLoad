import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const API_HOST = import.meta.env.VITE_API_HOST;

export async function fetchTikTokInfo(url: string) {
  const options = {
    method: 'GET',
    url: 'https://tiktok-full-info-without-watermark.p.rapidapi.com/vid/index',
    params: { url },
    headers: {
      'X-RapidAPI-Key': API_KEY,
      'X-RapidAPI-Host': API_HOST
    }
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    throw error;
  }
}