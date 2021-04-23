import {apiKey, apiBase } from '../../tbm/movieAPI'

export default async (req, res) => {

  const result = await fetch(`${apiBase}/trending/movie/week?api_key=${apiKey}`);
  const json = await result.json();

  res.status(200).json({ 
    movieList: json.results
  })
}
