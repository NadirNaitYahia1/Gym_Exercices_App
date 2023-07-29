export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '0b6819616amsh179ba45c55b6e2ep195fd9jsncc1d280549ce',
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
    'X-RapidAPI-Key': 'e3c0272822mshbbdd7f4e021f6cbp1912bdjsnafeec80d597d',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};



export const fetchData = async (url,options) => {
  const res = await fetch(url, options);
  const data = await res.json();
   

  return data;
};