export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '9a284b55b4mshb9c99515ea989f7p11bdbajsn63433791ff31',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  },
};
export const youtubeOptions = {
  method: 'GET',
  url: 'https://youtube-search-and-download.p.rapidapi.com/channel/about',
  params: {
    id: 'UCE_M8A5yxnLfW0KghEeajjw'
  },
  headers: {
    'X-RapidAPI-Key': '9a284b55b4mshb9c99515ea989f7p11bdbajsn63433791ff31',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};



export const fetchData = async (url,options) => {
  const res = await fetch(url, options);
  const data = await res.json();
   

  return data;
};