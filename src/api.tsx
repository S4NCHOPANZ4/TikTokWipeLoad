import axios from "axios";

const API_KEY = '262c8da2c2msh4a99bdd66ffa512p1805cajsn6246cc2899b7';
const API_HOST = 'tiktok-full-info-without-watermark.p.rapidapi.com';

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