import axios from 'axios';

const AUTH_TOKEN =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTdjYWJmNzMyYjNlYjc3OWQ2YjA1MTRiYWVlNGY5NSIsInN1YiI6IjY2MGFiNjllMTVkZWEwMDE3YzMzNjNjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WALXp8g9HALVrRvDd4denS0xE2qLZDqaX1_mVhj_7hE';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

export default async function fetchData(path) {
  const response = await axios.get(path);
  return response.data;
}