import axios from 'axios';

export type Params = {
  query: string;
  page: string;
  num_pages: string;
};

export const fetchPopularJob = async (params: Params) => {
  const options = {
    headers: {
      'X-RapidAPI-Key': 'e8527f9ea3msh4247bb81b4ca8d1p18693ejsn2578e693ce9b',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
    },
    params: {...params},
  };

  const url = 'https://jsearch.p.rapidapi.com/search';

  return axios.get(url, options).then(response => response.data.data);
};
